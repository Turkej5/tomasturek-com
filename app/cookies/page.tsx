import type { Metadata } from "next";
import Link from "next/link";
import { CookieSettingsLink } from "@/components/site/cookie-consent";
import { LogoTT } from "@/components/site/logo";

export const metadata: Metadata = {
  title: "Zásady cookies",
  description:
    "Co o tobě měřím na webu tomasturek.com, jak dlouho, co se odesílá z kontaktního formuláře a jak svou volbu změníš.",
  alternates: {
    canonical: "/cookies",
  },
};

export default function CookiesPage() {
  return (
    <main className="flex-1">
      <section className="border-b-4 border-black bg-comic-yellow py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-3 rounded-full border-comic-thick bg-white px-4 py-1.5 text-sm font-bold uppercase tracking-wide shadow-comic-sm transition hover:-translate-y-0.5"
          >
            <LogoTT size={28} />
            <span>← Zpět na web</span>
          </Link>
          <h1 className="mt-6 font-display text-5xl leading-tight sm:text-6xl">
            Zásady cookies
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed">
            Krátce a srozumitelně — co o tobě sleduju, kdo to dělá, jak dlouho
            to uchovávám a jak svou volbu kdykoli změníš.
          </p>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto grid max-w-3xl gap-8 px-4 sm:px-6">
          <article className="rounded-2xl border-comic-thick bg-comic-cream p-6 shadow-comic-sm">
            <h2 className="font-display text-3xl">Správce údajů</h2>
            <p className="mt-2 text-base leading-relaxed">
              <strong>Ing. Tomáš Turek</strong> — IČO 01847872. Kontakt:{" "}
              <a
                href="mailto:info@tomasturek.com"
                className="font-bold underline decoration-2 underline-offset-2"
              >
                info@tomasturek.com
              </a>
              .
            </p>
          </article>

          <article className="rounded-2xl border-comic-thick bg-white p-6 shadow-comic-sm">
            <h2 className="font-display text-3xl">Co o tobě sleduju</h2>
            <p className="mt-2 text-base leading-relaxed">
              Web používá <strong>Google Tag Manager</strong> a{" "}
              <strong>Google Analytics 4</strong> v režimu{" "}
              <strong>Consent Mode v2</strong>. Bez tvého souhlasu jsou všechny
              měřicí tagy ve výchozím stavu <em>denied</em> — nic se neměří
              a žádné měřicí cookies se nenastaví. Po kliku „Souhlasím"
              v liště se měření zapne. Pak posílám:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-base leading-relaxed">
              <li>kolik vás sem chodí (počet návštěvníků, relací)</li>
              <li>odkud (např. Google, sociální sítě, přímý přístup)</li>
              <li>z jaké země a v jakém prohlížeči</li>
              <li>které sekce vás zajímají a jak dlouho zůstanete</li>
            </ul>
            <p className="mt-3 text-base leading-relaxed">
              <strong>Nesleduju</strong> tvoje jméno, e-mail ani obsah
              kontaktního formuláře — Google Analytics dostane jen
              anonymizovaná data.
            </p>
          </article>

          <article className="rounded-2xl border-comic-thick bg-comic-cyan p-6 shadow-comic-sm">
            <h2 className="font-display text-3xl">Kontaktní formulář</h2>
            <p className="mt-2 text-base leading-relaxed">
              Pokud mi přes formulář napíšeš, data (jméno, e-mail, zpráva)
              putují přes službu <strong>Web3Forms</strong>, která mi je
              přepošle e-mailem. Web3Forms zprávy zpracovává pouze pro
              doručení a krátkodobě je drží v logech. Žádné jiné měření přes
              formulář neprobíhá — funguje bez ohledu na tvůj souhlas
              s cookies.
            </p>
          </article>

          <article className="rounded-2xl border-comic-thick bg-white p-6 shadow-comic-sm">
            <h2 className="font-display text-3xl">Třetí strany</h2>
            <ul className="mt-2 list-disc space-y-2 pl-6 text-base leading-relaxed">
              <li>
                <strong>Google</strong> (Google Tag Manager + Google Analytics
                4) — USA, Standard Contractual Clauses.
              </li>
              <li>
                <strong>Web3Forms</strong> — doručení zpráv z kontaktního
                formuláře.
              </li>
              <li>
                <strong>Vercel</strong> — hosting webu, logy přístupů na úrovni
                CDN.
              </li>
            </ul>
          </article>

          <article className="rounded-2xl border-comic-thick bg-comic-pink p-6 text-white shadow-comic-sm">
            <h2 className="font-display text-3xl text-stroke-black">
              Doba uchování
            </h2>
            <p className="mt-2 text-base leading-relaxed">
              Google Analytics 4 standardně uchovává events 2 měsíce, user
              data 14 měsíců (default). Web3Forms zprávy v logu typicky
              30 dní. Vercel access logy ~30 dní.
            </p>
          </article>

          <article className="rounded-2xl border-comic-thick bg-comic-cream p-6 shadow-comic-sm">
            <h2 className="font-display text-3xl">Tvoje práva</h2>
            <p className="mt-2 text-base leading-relaxed">
              Podle GDPR máš právo na:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-base leading-relaxed">
              <li>přístup ke svým údajům a jejich kopii</li>
              <li>opravu nebo doplnění</li>
              <li>smazání („právo být zapomenut")</li>
              <li>omezení zpracování</li>
              <li>vznést námitku proti zpracování</li>
              <li>kdykoli odvolat udělený souhlas (viz níže)</li>
              <li>podat stížnost u Úřadu pro ochranu osobních údajů (uoou.cz)</li>
            </ul>
            <p className="mt-3 text-base leading-relaxed">
              Stačí mi napsat na{" "}
              <a
                href="mailto:info@tomasturek.com"
                className="font-bold underline decoration-2 underline-offset-2"
              >
                info@tomasturek.com
              </a>
              .
            </p>
          </article>

          <article className="rounded-2xl border-comic-thick bg-comic-yellow p-6 shadow-comic">
            <h2 className="font-display text-3xl">Změnit volbu</h2>
            <p className="mt-2 text-base leading-relaxed">
              Klikni níže a cookie lišta se ti znovu objeví. Můžeš souhlas
              udělit, nebo odvolat.
            </p>
            <div className="mt-4">
              <CookieSettingsLink className="inline-flex items-center gap-2 rounded-full border-comic-thick bg-comic-red px-5 py-2 font-display text-xl uppercase text-white shadow-comic-sm transition hover:-translate-y-1 hover:translate-x-1 hover:shadow-none">
                🍪 Změnit volbu
              </CookieSettingsLink>
            </div>
          </article>

          <p className="text-center text-sm text-black/60">
            Tato stránka byla naposledy aktualizována 2026-06-05.
          </p>
        </div>
      </section>
    </main>
  );
}
