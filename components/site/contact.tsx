import { ContactForm } from "./contact-form";

export function Contact() {
  return (
    <section
      id="kontakt"
      className="relative border-b-4 border-black bg-comic-yellow py-20"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-2 md:gap-16">
        <div>
          <span className="inline-block -rotate-2 rounded-md border-comic-thick bg-comic-red px-3 py-1 font-bold uppercase text-white shadow-comic-sm">
            Kontakt
          </span>
          <h2 className="mt-3 font-display text-5xl sm:text-6xl">
            Pojďme se domluvit.
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed">
            Píšeš ohledně PPC, vibecodingu, spolupráce, nebo chceš jen pokecat?
            Klidně rovnou napiš.
          </p>

          <div className="mt-8 grid gap-4">
            <a
              href="mailto:info@tomasturek.com"
              className="group block rounded-2xl border-comic-thick bg-white p-4 shadow-comic-sm transition hover:-translate-y-1 hover:shadow-comic"
            >
              <div className="text-xs font-bold uppercase tracking-wide text-black/60">
                Email
              </div>
              <div className="font-display text-3xl">info@tomasturek.com</div>
            </a>

            <div className="rounded-2xl border-comic-thick bg-comic-cream p-4 shadow-comic-sm">
              <div className="text-xs font-bold uppercase tracking-wide text-black/60">
                Pracovně
              </div>
              <div className="text-lg font-bold">
                Head of Digital{" "}
                <a
                  href="https://www.shepras.cz"
                  target="_blank"
                  rel="noopener"
                  className="underline decoration-2 underline-offset-2"
                >
                  Sherpas
                </a>
              </div>
            </div>

            <div className="rounded-2xl border-comic-thick bg-white p-4 shadow-comic-sm">
              <div className="text-xs font-bold uppercase tracking-wide text-black/60">
                Fakturační údaje
              </div>
              <div className="mt-1 text-base font-bold">Ing. Tomáš Turek</div>
              <div className="text-sm">
                IČO: <span className="font-mono">01847872</span>
              </div>
              <a
                href="https://www.finmag.cz/obchodni-rejstrik/ares/01847872-ing-tomas-turek"
                target="_blank"
                rel="noopener"
                className="mt-1 inline-block text-sm underline decoration-2 underline-offset-2"
              >
                Detail v ARES / finmag ↗
              </a>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-3 -z-10 rotate-2 rounded-3xl bg-comic-blue border-comic-thick shadow-comic-lg" />
          <div className="relative rounded-3xl border-comic-thick bg-white p-6 shadow-comic sm:p-8">
            <h3 className="font-display text-3xl">Napiš mi</h3>
            <p className="mt-1 text-sm text-black/70">
              Zprávu si přečtu ve své schránce a ozvu se ti.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
