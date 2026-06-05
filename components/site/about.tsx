import Image from "next/image";

const milestones = [
  {
    years: "5 let",
    title: "SEO & Webmaster",
    where: "skupina Spěváček / Najdijazyky",
    color: "bg-comic-pink",
  },
  {
    years: "Lektor",
    title: "Online marketing",
    where: "GigiAka",
    color: "bg-comic-cyan",
  },
  {
    years: "Lektor",
    title: "PPC pro pokročilé",
    where: "Dobrý web",
    color: "bg-comic-yellow",
  },
  {
    years: "Přednášející",
    title: "Online marketing",
    where: "VŠE — pro ClickIT",
    color: "bg-comic-orange",
  },
];

export function About() {
  return (
    <section
      id="o-mne"
      className="relative border-b-4 border-black bg-white py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="inline-block -rotate-2 rounded-md border-comic-thick bg-comic-yellow px-3 py-1 font-bold uppercase shadow-comic-sm">
              O mně
            </span>
            <h2 className="mt-3 font-display text-5xl sm:text-6xl">
              Marketing, kód, pivo a hory.
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-black/80">
            Posledních 15+ let jsem v online marketingu — od SEO přes PPC až po
            vibecoding a stavění vlastních produktů. Učím to ostatní a stavím
            věci, co mají smysl.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-[1fr_1.5fr] md:gap-12">
          <div className="relative">
            <div className="absolute -inset-3 -z-10 -rotate-2 rounded-2xl bg-comic-purple border-comic-thick shadow-comic-lg" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border-comic-thick bg-white shadow-comic">
              <Image
                src="/tomas-turek-profile.jpg"
                alt="Tomáš Turek — profilová fotka"
                fill
                sizes="(max-width: 768px) 90vw, 360px"
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <h3 className="font-display text-3xl">Co mám za sebou</h3>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2">
              {milestones.map((m) => (
                <li
                  key={m.title}
                  className={`${m.color} relative rounded-xl border-comic-thick p-4 shadow-comic-sm`}
                >
                  <div className="font-display text-2xl">{m.years}</div>
                  <div className="text-lg font-bold leading-tight">
                    {m.title}
                  </div>
                  <div className="text-sm font-medium text-black/80">
                    {m.where}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border-comic-thick bg-comic-cream p-5 shadow-comic">
              <p className="text-base leading-relaxed">
                Dneska řídím digitál v{" "}
                <a
                  href="https://www.shepras.cz"
                  target="_blank"
                  rel="noopener"
                  className="font-bold underline decoration-2 underline-offset-2"
                >
                  Shepras
                </a>
                , vedle toho dělám PPC, konzultace a stavím vlastní projekty —
                od finančního nástroje po sbírku pivních půllitrů.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
