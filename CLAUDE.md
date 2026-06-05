@AGENTS.md

# tomasturek.com — osobní web

One-page osobní web Tomáše Turka. Komiksový styl, výrazné barvy, Bangers font.

## Stack
- **Next.js 16** App Router + React 19 + TypeScript (strict).
- **Tailwind CSS 4** (bez `tailwind.config.ts`, vše v `@theme inline` v `app/globals.css`).
- **Fonty:** `Bangers` (display, headings, badge) a `Inter` (body) přes `next/font/google`.
- **DB:** Neon Postgres přes `@neondatabase/serverless` (tagged template literals). **Žádný e-mail forwarding** — zprávy se jen ukládají do DB, Tomáš si je čte přímo.
- **Validace:** Zod.

## Struktura
- `app/layout.tsx` — fonty, metadata, OG.
- `app/page.tsx` — skládá sekce.
- `app/api/contact/route.ts` — POST handler (Zod → rate-limit → Neon). Bez `DATABASE_URL` jen zaloguje a vrátí `{ok:true}` — dev funguje bez setupu.
- `app/globals.css` — komiksová paleta (`--comic-yellow/red/blue/pink/cyan/green/purple/orange/cream/black`) + utility (`shadow-comic`, `border-comic-thick`, `halftone`, `stripes-yellow`, `text-stroke-black`).
- `components/site/*` — `logo.tsx` (SVG TT badge), `nav.tsx`, `hero.tsx`, `about.tsx`, `projects.tsx`, `travel.tsx`, `hobbies.tsx`, `contact.tsx`, `contact-form.tsx` (`"use client"`), `footer.tsx`.
- `lib/db.ts` — `getSql()` vrací `null` když chybí `DATABASE_URL`.
- `lib/rate-limit.ts` — in-memory bucket per IP (5/hod). V serverless prostředí best-effort, ne striktní limit.
- `public/` — `tom.png` (hero), `tomas-turek-profile.jpg` (about), `tomas-turek.jpg`.

## Env (`.env.example`)
- `DATABASE_URL` — Neon, ideálně přes Vercel Marketplace integraci.

## Dev
- `npm run dev` (Turbopack). Port preferenčně 3018 (`PORT=3018 npm run dev`).
- Test API: `curl -X POST http://localhost:3018/api/contact -H "Content-Type: application/json" -d '{"name":"x","email":"x@x.cz","message":"hello"}'`.

## Dům, kde se nehasí (KRITICKÉ)
- Doména **tomasturek.com je registrovaná u Forpsi** a **běží na ní Gmail (Google Workspace)**.
- Při napojení na Vercel se mění **JEN**: `A` pro apex (`76.76.21.21`) a `CNAME` pro `www` (`cname.vercel-dns.com`).
- **NIKDY** nesahat na: `MX` (Gmail), `TXT` pro SPF / DKIM / Google site verification, případné `CNAME` pro `mail.` / `calendar.` apod.
- Před jakoukoli změnou DNS u Forpsi: vyexportovat/screenshotovat aktuální zónu.

## Commit policy (z globálního CLAUDE.md)
- Git autor: `info@tomasturek.com` (Vercel jinak odmítne).
- **Nikdy nepushovat / nedeployovat bez explicitního pokynu.**
- Pracovat na feature větvi → PR → `main`.

## Bezpečnost
- `.env*` v `.gitignore` (výjimka jen `.env.example`).
- API: Zod validace, honeypot field `website`, rate-limit, parametrizované SQL přes neon tagged templates.
- Nikdy nepoužívat `VITE_*` / `NEXT_PUBLIC_*` pro `DATABASE_URL` — je server-side.
