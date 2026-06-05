@AGENTS.md

# tomasturek.com — osobní web

One-page osobní web Tomáše Turka. Komiksový styl, výrazné barvy, Bangers font.

## Stack
- **Next.js 16** App Router + React 19 + TypeScript (strict).
- **Tailwind CSS 4** (bez `tailwind.config.ts`, vše v `@theme inline` v `app/globals.css`).
- **Fonty:** `Bangers` (display, headings, badge) a `Inter` (body) přes `next/font/google`.
- **Kontaktní formulář:** posílá data přímo z klienta na **Web3Forms API** (`https://api.web3forms.com/submit`). Žádný backend, žádná DB. Access key je veřejný identifikátor formuláře — žije v `components/site/contact-form.tsx`.

## Struktura
- `app/layout.tsx` — fonty, metadata, OG.
- `app/page.tsx` — skládá sekce.
- `app/icon.svg` — favicon (TT logo, komiksový styl).
- `app/globals.css` — komiksová paleta (`--comic-yellow/red/blue/pink/cyan/green/purple/orange/cream/black`) + utility (`shadow-comic`, `border-comic-thick`, `halftone`, `stripes-yellow`, `text-stroke-black`).
- `components/site/*` — `logo.tsx` (SVG TT badge), `nav.tsx`, `hero.tsx`, `about.tsx`, `projects.tsx`, `travel.tsx`, `hobbies.tsx`, `contact.tsx`, `contact-form.tsx` (`"use client"`, POST na Web3Forms), `footer.tsx`.
- `public/` — `tom.png` (hero), `tomas-turek-profile.jpg` (about), `tomas-turek.jpg`.

## Env
Web aktuálně žádné env proměnné nepotřebuje (kontaktní formulář jede přes Web3Forms API přímo z prohlížeče).

## Dev
- `npm run dev` (Turbopack). Port preferenčně 3018 (`PORT=3018 npm run dev`).

## Dům, kde se nehasí (KRITICKÉ)
- Doména **tomasturek.com je registrovaná u Forpsi** a **běží na ní Gmail (Google Workspace)**.
- Při napojení na Vercel se mění **JEN**: `A` pro apex a `CNAME` pro `www` (Vercel ti řekne aktuální cílové hodnoty).
- **NIKDY** nesahat na: `MX` (Gmail), `TXT` pro SPF / DKIM / Google site verification, případné `CNAME` pro `mail.` / `calendar.` apod.
- Před jakoukoli změnou DNS u Forpsi: vyexportovat/screenshotovat aktuální zónu.

## Commit policy (z globálního CLAUDE.md)
- Git autor: `info@tomasturek.com` (Vercel jinak odmítne).
- **Nikdy nepushovat / nedeployovat bez explicitního pokynu.**
- Pracovat na feature větvi → PR → `main`.

## Bezpečnost
- `.env*` v `.gitignore` (výjimka jen `.env.example`).
- Formulář: HTML validace (`required`, `type="email"`, `maxLength`), honeypot pole `botcheck` (Web3Forms konvence), rate-limit a anti-spam řeší Web3Forms na své straně.
- Pokud bys nastavoval custom backend zase, dej `RESEND_API_KEY` / `DATABASE_URL` jen na server (nikdy `NEXT_PUBLIC_*`).
