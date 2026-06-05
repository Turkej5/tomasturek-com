import { headers } from "next/headers";
import { z } from "zod";
import { getSql } from "@/lib/db";
import { rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ContactSchema = z.object({
  name: z.string().trim().min(2, "Jméno je moc krátké.").max(120),
  email: z.string().trim().email("Neplatný e-mail.").max(255),
  message: z.string().trim().min(5, "Zpráva je moc krátká.").max(5000),
  website: z.string().max(0).optional(),
});

export async function POST(request: Request) {
  const hdrs = await headers();
  const ip =
    hdrs.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    hdrs.get("x-real-ip") ||
    "unknown";
  const userAgent = hdrs.get("user-agent") ?? "unknown";

  const rl = rateLimit(`contact:${ip}`, { limit: 5, windowMs: 60 * 60 * 1000 });
  if (!rl.ok) {
    return Response.json(
      { error: "Moc zpráv, zkus to později." },
      { status: 429, headers: { "Retry-After": String(rl.retryAfterSec) } },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Neplatný JSON." }, { status: 400 });
  }

  const parsed = ContactSchema.safeParse(body);
  if (!parsed.success) {
    const first = parsed.error.issues[0];
    return Response.json(
      { error: first?.message ?? "Neplatná data." },
      { status: 400 },
    );
  }

  if (parsed.data.website) {
    return Response.json({ ok: true });
  }

  const { name, email, message } = parsed.data;

  const sql = getSql();
  if (sql) {
    try {
      await sql`
        CREATE TABLE IF NOT EXISTS contact_messages (
          id           BIGSERIAL PRIMARY KEY,
          name         VARCHAR(120)  NOT NULL,
          email        VARCHAR(255)  NOT NULL,
          message      TEXT          NOT NULL,
          ip           VARCHAR(64),
          user_agent   TEXT,
          created_at   TIMESTAMPTZ   NOT NULL DEFAULT NOW()
        )
      `;
      await sql`
        INSERT INTO contact_messages (name, email, message, ip, user_agent)
        VALUES (${name}, ${email}, ${message}, ${ip}, ${userAgent})
      `;
    } catch (err) {
      console.error("[contact] DB error:", err);
    }
  } else {
    console.warn("[contact] DATABASE_URL not set — skipping DB insert.");
  }

  return Response.json({ ok: true });
}
