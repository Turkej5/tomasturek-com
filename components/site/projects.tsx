const projects = [
  {
    name: "Ledgerly",
    url: "https://www.ledgerly.cz",
    desc: "Jednoduchá účetnictví/fakturace nástroj. Vibecoder edition.",
    color: "bg-comic-blue",
    text: "text-white",
    tag: "FinTech",
  },
  {
    name: "AIwebik",
    url: "https://www.aiwebik.cz",
    desc: "AI služby a generování webů na míru.",
    color: "bg-comic-pink",
    text: "text-white",
    tag: "AI",
  },
  {
    name: "Audit PPC",
    url: "https://www.audit-ppc.cz",
    desc: "Audity PPC kampaní pro e‑shopy a značky.",
    color: "bg-comic-yellow",
    text: "text-black",
    tag: "PPC",
  },
  {
    name: "Sbírka půllitrů",
    url: "https://www.sbirkapullitru.cz",
    desc: "Hobby projekt — katalog mojí sbírky pivních půllitrů.",
    color: "bg-comic-red",
    text: "text-white",
    tag: "Hobby",
  },
  {
    name: "Remindy",
    url: "https://www.remindy.cz",
    desc: "Chytrý kalendář a připomínky — ať ti nic neuteče.",
    color: "bg-comic-purple",
    text: "text-white",
    tag: "App",
  },
];

export function Projects() {
  return (
    <section
      id="projekty"
      className="relative border-b-4 border-black bg-comic-cream py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="inline-block rotate-2 rounded-md border-comic-thick bg-comic-cyan px-3 py-1 font-bold uppercase shadow-comic-sm">
              Projekty
            </span>
            <h2 className="mt-3 font-display text-5xl sm:text-6xl">
              Věci, co jsem postavil.
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-black/80">
            Mix vlastních produktů, hobby projektů a služeb. Něco z vlastní
            kuchyně, něco pro klienty.
          </p>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <li key={p.url}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener"
                className={`${p.color} ${p.text} group relative block rounded-2xl border-comic-thick p-6 shadow-comic transition hover:-translate-y-1 hover:translate-x-1 hover:shadow-comic-sm`}
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full border-2 border-black bg-white px-3 py-0.5 text-xs font-bold uppercase tracking-wide text-black">
                    {p.tag}
                  </span>
                  <span className="font-display text-2xl">↗</span>
                </div>
                <h3 className="mt-3 font-display text-4xl text-stroke-black">
                  {p.name}
                </h3>
                <p className="mt-2 text-base font-medium">{p.desc}</p>
                <p className="mt-3 truncate text-sm opacity-90">{p.url.replace("https://", "")}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
