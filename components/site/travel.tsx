const travel = [
  { name: "Jezero Garda", url: "https://www.jezerogarda.cz", flag: "🇮🇹" },
  { name: "Ubytování Garda", url: "https://www.ubytovani-garda.cz", flag: "🇮🇹" },
  { name: "Ubytování Hinterstoder", url: "https://www.ubytovani-hinterstoder.cz", flag: "🇦🇹" },
  { name: "Hauser Kaibling", url: "https://www.hauserkaibling.cz", flag: "🇦🇹" },
  { name: "Hintertux Gletscher", url: "https://www.hintertuxgletscher.cz", flag: "🇦🇹" },
  { name: "Průvodce Budapešť", url: "https://www.pruvodce-budapest.cz", flag: "🇭🇺" },
  { name: "Ubytování Benátky", url: "https://www.ubytovani-benatky.cz", flag: "🇮🇹" },
  { name: "Ubytování Střední Čechy", url: "https://www.ubytovani-stredni-cechy.cz", flag: "🇨🇿" },
  { name: "Průvodce Bergamo", url: "https://www.pruvodce-bergamo.cz", flag: "🇮🇹" },
];

const palette = [
  "bg-comic-yellow",
  "bg-comic-pink",
  "bg-comic-cyan",
  "bg-comic-green",
  "bg-comic-orange",
  "bg-comic-purple text-white",
  "bg-comic-red text-white",
  "bg-white",
  "bg-comic-blue text-white",
];

export function Travel() {
  return (
    <section
      id="cestovky"
      className="relative border-b-4 border-black bg-white py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12">
          <span className="inline-block -rotate-2 rounded-md border-comic-thick bg-comic-pink px-3 py-1 font-bold uppercase text-white shadow-comic-sm">
            Cestoweby
          </span>
          <h2 className="mt-3 font-display text-5xl sm:text-6xl">
            Průvodci a ubytko po Evropě.
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-black/80">
            Vlastní cestovatelské weby a průvodci. Garda, Alpy, Budapešť,
            Bergamo a další místa, která jsem prošel a popsal.
          </p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {travel.map((t, i) => (
            <li key={t.url}>
              <a
                href={t.url}
                target="_blank"
                rel="noopener"
                className={`${palette[i % palette.length]} flex items-center justify-between gap-3 rounded-xl border-comic-thick p-4 shadow-comic-sm transition hover:-translate-y-1 hover:translate-x-1 hover:shadow-none`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl" aria-hidden>
                    {t.flag}
                  </span>
                  <div>
                    <div className="font-display text-2xl leading-none">
                      {t.name}
                    </div>
                    <div className="text-xs font-medium opacity-80">
                      {t.url.replace("https://www.", "")}
                    </div>
                  </div>
                </div>
                <span className="font-display text-2xl">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
