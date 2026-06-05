@AGENTS.md

# tomasturek.com — osobní web

One-page osobní web Tomáše Turka. Komiksový styl, výrazné barvy, Bangers font. Aktuálně **v produkci** na `https://www.tomasturek.com` (deploy: Vercel auto z `main`).

## Stack
- **Next.js 16** App Router + React 19 + TypeScript (strict), Turbopack.
- **Tailwind CSS 4** (bez `tailwind.config.ts`, vše v `@theme inline` v `app/globals.css`).
- **Fonty:** `Bangers` (display, headings, badge) a `Inter` (body) přes `next/font/google`.
- **Kontaktní formulář:** posílá data přímo z klienta na **Web3Forms API** (`https://api.web3forms.com/submit`). Žádný backend, žádná DB. Access key je veřejný identifikátor formuláře — hardcoded v `components/site/contact-form.tsx`.
- **Analytics:** GTM (`GTM-WC75SW52`) + GA4 v režimu **Google Consent Mode v2**. GTM kontejner se načte vždy (aby Google crawler viděl instalaci), ale výchozí stav consent = denied; po souhlasu se push-uje update. Veškerá implementace v `components/site/cookie-consent.tsx`.

## Struktura
- `app/layout.tsx` — fonty, metadata, OG, root rendr (mount `CookieConsent`).
- `app/page.tsx` — skládá sekce.
- `app/icon.svg` — favicon (TT logo, komiksový styl).
- `app/cookies/page.tsx` — Zásady cookies (GDPR, GA4, Web3Forms, doby uchování, tlačítko „Změnit volbu").
- `app/loga/page.tsx` — showcase log se stahováním SVG variant.
- `app/globals.css` — komiksová paleta (`--comic-yellow/red/blue/pink/cyan/green/purple/orange/cream/black`) + utility (`shadow-comic`, `border-comic-thick`, `halftone`, `stripes-yellow`, `text-stroke-black`).
- `components/site/*`:
  - `logo.tsx` — `LogoTT` SVG TT badge (sunburst, dva T písmena).
  - `nav.tsx`, `hero.tsx`, `about.tsx`, `projects.tsx`, `travel.tsx`, `hobbies.tsx`, `contact.tsx`, `footer.tsx`.
  - `contact-form.tsx` — `"use client"`, POST na Web3Forms, honeypot `botcheck`.
  - `cookie-consent.tsx` — `"use client"`, banner + Consent Mode v2 + exporty `openCookieConsent` a `CookieSettingsLink`.
- `public/`:
  - `tom.png` (hero), `tomas-turek-profile.jpg` (about), `tomas-turek.jpg`.
  - `logo/icon.svg`, `logo/square.svg`, `logo/horizontal.svg`, `logo/banner.svg` — brand assety pro download na `/loga`.

## Pages & URLs
- `/` — home (one-page se sekcemi).
- `/cookies` — Zásady cookies (statická stránka, canonical).
- `/loga` — Loga ke stažení (showcase brand assetů).

## Env
Web aktuálně žádné env proměnné nepotřebuje. `.env.example` je tedy v podstatě placeholder.

## Dev
- `npm run dev` (Turbopack). Port preferenčně 3018 (`PORT=3018 npm run dev`).
- TypeCheck: `npx tsc --noEmit`.

## Deploy
- **Hosting:** Vercel (projekt `tomasturek-com`, auto deploy z `main` na GitHubu).
- **GitHub repo:** `github.com/Turkej5/tomasturek-com` (public).
- **Workflow:** `git push origin main` → Vercel build → deploy. Žádný PR proces zatím nepoužíváme (osobní projekt, jeden autor).

## Dům, kde se nehasí (KRITICKÉ)
- Doména **tomasturek.com je registrovaná u Forpsi** a **běží na ní Gmail (Google Workspace)**.
- DNS aktuálně:
  - `A` apex → `216.198.79.1` (Vercel nová IP řada)
  - `CNAME` www → `0c1e257d475c75c9.vercel-dns-017.com.` (project-specific)
  - 5× `MX` Google Workspace
- **NIKDY** nesahat na: `MX` (Gmail), `TXT` pro SPF / DKIM / Google site verification, případné `CNAME` pro `mail.` / `calendar.` apod.
- Před jakoukoli změnou DNS u Forpsi: vyexportovat/screenshotovat aktuální zónu.

## Commit policy (z globálního CLAUDE.md)
- Git autor: `info@tomasturek.com` (Vercel jinak odmítne). Lokální commit nastavujeme inline: `git -c user.email="info@tomasturek.com" -c user.name="Tomáš Turek" commit ...`
- **Nikdy nepushovat bez explicitního pokynu** — Tomáš to potvrzuje, my pak `git push`.
- Tomáš preferuje rychlé inkrementální commity přímo do `main` (osobní web, jeden autor). Pro větší změny později PR proces.

## Bezpečnost
- `.env*` v `.gitignore` (výjimka jen `.env.example`).
- Formulář: HTML validace (`required`, `type="email"`, `maxLength`), honeypot pole `botcheck` (Web3Forms konvence). Rate-limit a anti-spam řeší Web3Forms.
- Cookie consent: GTM se nenačte se sledovacími cookies bez souhlasu; po souhlasu `analytics_storage: granted`, `ad_*` zůstávají denied (žádné reklamy se neměří).
- Pokud bys nastavoval custom backend, klíče dej **jen na server** (`process.env.XXX`), nikdy `NEXT_PUBLIC_*` / `VITE_*` pro tajné věci.

## Historie zásadních rozhodnutí
- Začínalo se s Neon Postgres + plánem na Resend. Tomáš se 2026-06-05 rozhodl pro Web3Forms (jednodušší, žádný backend ani DB). Veškerý původní backend code byl odstraněn.
- Cookie consent původně blokoval GTM (script se nenačetl bez souhlasu) — 2026-06-05 přechod na **Consent Mode v2**, aby Google viděl kontejner pro testy v GTM panelu.
- Brand: doménový název firmy „Sherpas" (s R) má URL `www.sherpas.cz` (oprava z původního `shepras.cz`, ten byl typo v zadání).
