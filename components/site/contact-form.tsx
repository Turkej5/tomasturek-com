"use client";

import { useState, type FormEvent } from "react";

const WEB3FORMS_ACCESS_KEY = "9e1b9686-af54-4a4c-bd2d-fe48ac8e29fb";

type Status =
  | { state: "idle" }
  | { state: "loading" }
  | { state: "success" }
  | { state: "error"; message: string };

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (String(data.get("botcheck") ?? "")) {
      setStatus({ state: "success" });
      form.reset();
      return;
    }

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: "Nová zpráva z tomasturek.com",
      from_name: "Web tomasturek.com",
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };

    setStatus({ state: "loading" });

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const body = (await res.json().catch(() => null)) as
        | { success?: boolean; message?: string }
        | null;

      if (!res.ok || !body?.success) {
        throw new Error(
          body?.message ?? "Něco se pokazilo. Zkus to prosím znovu.",
        );
      }

      setStatus({ state: "success" });
      form.reset();
    } catch (err) {
      const message = err instanceof Error ? err.message : "Neznámá chyba.";
      setStatus({ state: "error", message });
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <label className="grid gap-1.5">
        <span className="font-bold uppercase tracking-wide text-sm">Jméno</span>
        <input
          type="text"
          name="name"
          required
          maxLength={120}
          placeholder="Jak ti mám říkat?"
          className="rounded-xl border-comic-thick bg-white px-4 py-3 text-base outline-none transition focus:-translate-y-0.5 focus:shadow-comic-sm"
        />
      </label>

      <label className="grid gap-1.5">
        <span className="font-bold uppercase tracking-wide text-sm">E-mail</span>
        <input
          type="email"
          name="email"
          required
          maxLength={255}
          placeholder="ty@email.cz"
          className="rounded-xl border-comic-thick bg-white px-4 py-3 text-base outline-none transition focus:-translate-y-0.5 focus:shadow-comic-sm"
        />
      </label>

      <label className="grid gap-1.5">
        <span className="font-bold uppercase tracking-wide text-sm">Zpráva</span>
        <textarea
          name="message"
          required
          minLength={5}
          maxLength={5000}
          rows={5}
          placeholder="Co máš na srdci?"
          className="resize-y rounded-xl border-comic-thick bg-white px-4 py-3 text-base outline-none transition focus:-translate-y-0.5 focus:shadow-comic-sm"
        />
      </label>

      <button
        type="submit"
        disabled={status.state === "loading"}
        className="mt-2 inline-flex w-fit items-center gap-3 rounded-full border-comic-thick bg-comic-red px-6 py-3 font-display text-2xl uppercase text-white shadow-comic transition hover:-translate-y-1 hover:translate-x-1 hover:shadow-comic-sm disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status.state === "loading" ? "Odesílám…" : "Odeslat zprávu"}
        <span aria-hidden>→</span>
      </button>

      {status.state === "success" && (
        <p
          role="status"
          className="rounded-xl border-comic-thick bg-comic-green px-4 py-3 font-bold text-white shadow-comic-sm"
        >
          Hotovo! Ozvu se co nejdřív. 🎉
        </p>
      )}
      {status.state === "error" && (
        <p
          role="alert"
          className="rounded-xl border-comic-thick bg-comic-yellow px-4 py-3 font-bold text-black shadow-comic-sm"
        >
          {status.message}
        </p>
      )}
    </form>
  );
}
