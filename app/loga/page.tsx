import type { Metadata } from "next";
import Link from "next/link";
import { LogoTT } from "@/components/site/logo";

export const metadata: Metadata = {
  title: "Loga ke stažení",
  description:
    "Logo Tomáš Turek — různé varianty pro avatary, hlavičky, e-mail signatury a sociální sítě.",
  alternates: {
    canonical: "/loga",
  },
};

type LogoVariant = {
  name: string;
  desc: string;
  use: string;
  src: string;
  bg: string;
  aspect: string;
  size: string;
};

const variants: LogoVariant[] = [
  {
    name: "Ikona",
    desc: "Samotný TT sunburst, transparentní pozadí.",
    use: "favicon, watermark, dekorace v dokumentu",
    src: "/logo/icon.svg",
    bg: "bg-comic-cream",
    aspect: "aspect-square",
    size: "viewBox 120×120, škálovatelné",
  },
  {
    name: "Čtverec",
    desc: "Sunburst na růžovém pozadí s halftone texturou — funguje jako brand panel.",
    use: "avatar (LinkedIn, Instagram, X), profilovka",
    src: "/logo/square.svg",
    bg: "bg-comic-cream",
    aspect: "aspect-square",
    size: "1024×1024",
  },
  {
    name: "Obdélník (horizontální lockup)",
    desc: "Sunburst + jméno na žlutém pozadí.",
    use: "hlavička webu, e-mail signatura, dokumenty",
    src: "/logo/horizontal.svg",
    bg: "bg-comic-cream",
    aspect: "aspect-[4/1]",
    size: "1200×300",
  },
  {
    name: "LinkedIn cover banner",
    desc: 'Široký formát s diagonálními pruhy, jménem, podtitulem a "POW!" cedulí.',
    use: "LinkedIn / Facebook cover photo, headers",
    src: "/logo/banner.svg",
    bg: "bg-comic-cream",
    aspect: "aspect-[4/1]",
    size: "1584×396 (LinkedIn cover)",
  },
];

export default function LogaPage() {
  return (
    <main className="flex-1">
      <section className="border-b-4 border-black bg-comic-yellow py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-3 rounded-full border-comic-thick bg-white px-4 py-1.5 text-sm font-bold uppercase tracking-wide shadow-comic-sm transition hover:-translate-y-0.5"
          >
            <LogoTT size={28} />
            <span>← Zpět na web</span>
          </Link>
          <h1 className="mt-6 font-display text-5xl leading-tight sm:text-6xl">
            Loga ke stažení
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed">
            Sada brand assetů ve formátu SVG. Klikni „Stáhnout SVG" nebo otevři
            v novém okně a pak Save As. Pro PNG/JPG si soubor otevři v
            prohlížeči a screenshotni (nebo použij{" "}
            <span className="font-mono">cloudconvert.com</span>).
          </p>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto grid max-w-5xl gap-10 px-4 sm:px-6">
          {variants.map((v) => (
            <article
              key={v.src}
              className="overflow-hidden rounded-3xl border-comic-thick bg-white shadow-comic"
            >
              <div className={`${v.bg} ${v.aspect} relative flex items-center justify-center border-b-4 border-black p-4 sm:p-8`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={v.src}
                  alt={`Logo Tomáš Turek — ${v.name}`}
                  className="max-h-full max-w-full"
                />
              </div>
              <div className="grid gap-4 p-6 sm:grid-cols-[1fr_auto] sm:items-end">
                <div>
                  <h2 className="font-display text-3xl">{v.name}</h2>
                  <p className="mt-1 text-sm text-black/70">{v.desc}</p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-wide text-black/60">
                    Použití: {v.use} · {v.size}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={v.src}
                    download
                    className="rounded-full border-comic-thick bg-comic-red px-4 py-2 font-bold uppercase tracking-wide text-sm text-white shadow-comic-sm transition hover:-translate-y-0.5"
                  >
                    Stáhnout SVG
                  </a>
                  <a
                    href={v.src}
                    target="_blank"
                    rel="noopener"
                    className="rounded-full border-comic-thick bg-white px-4 py-2 font-bold uppercase tracking-wide text-sm shadow-comic-sm transition hover:-translate-y-0.5"
                  >
                    Otevřít ↗
                  </a>
                </div>
              </div>
            </article>
          ))}

          <div className="rounded-2xl border-comic-thick bg-comic-cream p-6 shadow-comic-sm">
            <h3 className="font-display text-2xl">Pravidla použití</h3>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-sm leading-relaxed">
              <li>Nemě tahej za poměry — sunburst musí zůstat kulatý.</li>
              <li>Nepřebarvuj — žlutá, modrá, červená a cream jsou identita.</li>
              <li>Mezi logem a okolním obsahem nech minimálně tolik místa, kolik je výška „T" v ikoně.</li>
              <li>Na tmavé pozadí preferuj horizontální / banner variantu (mají vlastní pozadí).</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
