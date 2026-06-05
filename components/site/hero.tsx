import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b-4 border-black"
    >
      <div className="absolute inset-0 -z-10 stripes-yellow opacity-40" />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 md:grid-cols-2 md:items-center md:gap-16 md:py-32">
        <div className="order-2 md:order-1">
          <div className="inline-block rotate-[-3deg] rounded-md border-comic-thick bg-white px-4 py-1.5 text-sm font-bold uppercase shadow-comic-sm">
            Ahoj světe!
          </div>
          <h1 className="mt-4 font-display text-6xl leading-[0.95] text-black sm:text-7xl md:text-8xl">
            Jsem{" "}
            <span className="inline-block rounded-md bg-comic-red px-3 text-white text-stroke-black shadow-comic">
              Tomáš
            </span>{" "}
            <br />
            <span className="inline-block rounded-md bg-comic-blue px-3 text-white text-stroke-black shadow-comic">
              Turek
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-black/80 sm:text-xl">
            Head of Digital v{" "}
            <a
              href="https://www.sherpas.cz"
              target="_blank"
              rel="noopener"
              className="rounded-sm bg-comic-yellow px-1 font-bold underline decoration-black decoration-2"
            >
              Sherpas
            </a>
            , marketingový specialista, PPC konzultant a vášnivý vibecoder.
            Stavím digitálního ekosystému a cestovatelské weby.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#projekty"
              className="rounded-full border-comic-thick bg-comic-pink px-6 py-3 font-display text-2xl uppercase text-white shadow-comic transition hover:-translate-y-1 hover:translate-x-1 hover:shadow-comic-sm"
            >
              Projekty
            </Link>
            <Link
              href="#kontakt"
              className="rounded-full border-comic-thick bg-white px-6 py-3 font-display text-2xl uppercase text-black shadow-comic transition hover:-translate-y-1 hover:translate-x-1 hover:shadow-comic-sm"
            >
              Napsat mi
            </Link>
          </div>
        </div>

        <div className="relative order-1 md:order-2">
          <div className="absolute -inset-4 -z-10 rotate-3 rounded-3xl bg-comic-cyan border-comic-thick shadow-comic-lg" />
          <div className="relative aspect-square overflow-hidden rounded-3xl border-comic-thick bg-white shadow-comic-lg">
            <Image
              src="/tom.png"
              alt="Tomáš Turek"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 480px"
              className="object-cover"
            />
          </div>
          <div className="absolute -right-2 -top-6 rotate-12 rounded-2xl border-comic-thick bg-comic-yellow px-4 py-2 font-display text-3xl text-stroke-black shadow-comic">
            POW!
          </div>
          <div className="absolute -bottom-6 -left-4 -rotate-6 rounded-full border-comic-thick bg-comic-red px-4 py-2 font-display text-2xl text-white text-stroke-black shadow-comic">
            Vibecoder!
          </div>
        </div>
      </div>
    </section>
  );
}
