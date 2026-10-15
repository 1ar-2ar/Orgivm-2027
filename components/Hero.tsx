import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative z-10 flex min-h-screen items-center justify-center">
      <div className="text-center text-white">

        <p className="mb-6 text-sm uppercase tracking-[0.4em] text-gray-400">
          Oslo • Norway
        </p>

        <div className="mb-8 flex justify-center">
          <Image
            src="/images/logo/orgivm logo rød.png"
            alt="Orgivm VI"
            width={700}
            height={300}
            className="w-full max-w-4xl"
          />
        </div>

        <p className="mb-4 text-xl md:text-6xl">
          Two Days of the Darkest and Blackest Metal
        </p>

        <p className="text-lg text-gray-300">
          8-9 January 2027 • Parkteatret • Oslo, Norway
        </p>
        <div className="mt-10 flex justify-center gap-6">
  <a
    href="#tickets"
    className="rounded border border-red-900 bg-black/50 px-6 py-3 uppercase tracking-wider text-white transition hover:border-red-700 hover:bg-red-900/20"
  >
    Buy Tickets
  </a>

  <a
    href="#lineup"
    className="rounded border border-red-900 bg-black/50 px-6 py-3 uppercase tracking-wider text-white transition hover:border-red-700 hover:bg-red-900/20"
  >
    See Lineup
  </a>
</div>
      </div>
    </section>
  );
}
``