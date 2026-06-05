const hobbies = [
  { name: "Cestování", emoji: "✈️", color: "bg-comic-cyan", rot: "-rotate-2" },
  { name: "Lyžování", emoji: "⛷️", color: "bg-white", rot: "rotate-1" },
  { name: "Truhlařina", emoji: "🪚", color: "bg-comic-orange", rot: "-rotate-1" },
  { name: "DIY tvorba", emoji: "🛠️", color: "bg-comic-yellow", rot: "rotate-2" },
  { name: "Skoky na lyžích", emoji: "🎿", color: "bg-comic-pink text-white", rot: "-rotate-1" },
  { name: "Auta", emoji: "🏎️", color: "bg-comic-red text-white", rot: "rotate-2" },
  { name: "Biathlon", emoji: "🎯", color: "bg-comic-green text-white", rot: "-rotate-2" },
];

export function Hobbies() {
  return (
    <section
      id="zaliby"
      className="relative overflow-hidden border-b-4 border-black bg-comic-blue py-20 text-white"
    >
      <div className="absolute inset-0 -z-10 halftone opacity-20" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10">
          <span className="inline-block rotate-2 rounded-md border-comic-thick bg-comic-yellow px-3 py-1 font-bold uppercase text-black shadow-comic-sm">
            Mimo monitor
          </span>
          <h2 className="mt-3 font-display text-5xl text-stroke-black sm:text-6xl">
            Co mě baví, když nekódím.
          </h2>
        </div>

        <ul className="flex flex-wrap gap-4">
          {hobbies.map((h) => (
            <li
              key={h.name}
              className={`${h.color} ${h.rot} flex items-center gap-3 rounded-2xl border-comic-thick px-5 py-3 text-black shadow-comic transition hover:rotate-0`}
            >
              <span className="text-3xl" aria-hidden>
                {h.emoji}
              </span>
              <span className="font-display text-3xl">{h.name}</span>
            </li>
          ))}
        </ul>

        <div className="mt-12 inline-block -rotate-1 rounded-2xl border-comic-thick bg-comic-red px-6 py-4 font-display text-3xl text-stroke-black shadow-comic">
          BOOM!
        </div>
      </div>
    </section>
  );
}
