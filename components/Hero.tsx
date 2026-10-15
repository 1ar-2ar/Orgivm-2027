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
            width={900}
            height={400}
            className="w-full max-w-4xl"
          />
        </div>

        <p className="mb-4 text-xl md:text-4xl font-light">
          Two Days of the Darkest and Blackest Metal
        </p>

        <p className="text-xl upppercase tracking-wider text-zinc-200">
          8-9 January 2027 • Parkteatret • Oslo, Norway
        </p>
        <div className="mt-10 flex justify-center gap-6">
  <a
    href="#tickets"
    className="rounded border border-red-800 bg-black/60 px-6 py-3 uppercase tracking-wider text-white transition duration-300 hover:border-red-950 hover:bg-red-600"
  >
    Buy Tickets
  </a>

  <a
    href="#lineup"
    className="rounded border border-red-800 bg-black/60 px-6 py-3 uppercase tracking-wider text-white transition duration-300 hover:border-red-950 hover:bg-red-600"
  >
    See Lineup
  </a>
</div>
      </div>
    </section>
  );
}
``