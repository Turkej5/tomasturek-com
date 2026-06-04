import Link from "next/link";
import { LogoTT } from "./logo";

const links = [
  { href: "#o-mne", label: "O mně" },
  { href: "#projekty", label: "Projekty" },
  { href: "#cestovky", label: "Cestovky" },
  { href: "#zaliby", label: "Záliby" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b-4 border-black bg-comic-yellow">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="#hero" className="flex items-center gap-3">
          <LogoTT size={48} />
          <span className="font-display text-3xl text-black sm:text-4xl">
            Tomáš Turek
          </span>
        </Link>
        <nav className="hidden gap-2 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border-2 border-black bg-white px-3 py-1.5 text-sm font-bold uppercase tracking-wide transition hover:-translate-y-0.5 hover:bg-comic-pink hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#kontakt"
          className="rounded-full border-2 border-black bg-comic-red px-4 py-2 text-sm font-bold uppercase tracking-wide text-white shadow-comic-sm transition hover:-translate-y-0.5 md:hidden"
        >
          Napsat
        </Link>
      </div>
    </header>
  );
}
