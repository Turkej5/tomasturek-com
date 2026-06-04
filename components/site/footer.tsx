import { LogoTT } from "./logo";

export function Footer() {
  return (
    <footer className="bg-black py-12 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <LogoTT size={56} />
          <div>
            <div className="font-display text-3xl text-stroke-black text-comic-yellow">
              Tomáš Turek
            </div>
            <div className="text-sm text-white/70">
              Head of Digital · Marketing · Vibecoder
            </div>
          </div>
        </div>
        <div className="text-sm text-white/70">
          © {new Date().getFullYear()} Ing. Tomáš Turek · IČO 01847872 ·{" "}
          <a
            href="mailto:info@tomasturek.com"
            className="underline decoration-2 underline-offset-2"
          >
            info@tomasturek.com
          </a>
        </div>
      </div>
    </footer>
  );
}
