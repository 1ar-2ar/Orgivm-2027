import Image from "next/image";
import Link from "next/link";

const bands = [
  "ULVESANGER",
  "DHG",
  "NORDJEVEL",
  "FEN",
  "MORTEM",
  "AVRAK",
  "ABDUCTION",
  "ASKEREGN",
];

export default function LineupPreview() {
  return (
    <section
      id="lineup"
      className="relative z-10 min-h-screen flex items-center"
    >
      <div className="mx-auto w-full max-w-7xl px-8">
        <p className="mb-6 text-sm uppercase tracking-[0.4em] text-gray-400">
          Orgivm Satanicvm
        </p>

        <h2 className="mb-16 text-5xl md:text-7xl font-bold uppercase text-white">
          Summoning darkness at Orgivm Satanicvm VI
        </h2>

        <div className="space-y-10">
          {bands.map((band) => (
            <div
              key={band}
              className="
              relative
              overflow-hidden
              border
              border-white/10
              rounded-lg
              min-h-[350px]
              flex
              items-center
              justify-center
              transition-all
              duration-300
              hover:border-red-700
              hover:bg-white/5
              "
            >
               {band === "FEN" && (
    <>
      <Image
        src="/images/bands/fen.jpg"
        alt="FEN"
        fill
        className="object-cover transition-transform duration-700 hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/50" />
    </>
  )}
              <h3
              style={{ textShadow: "0 0 20px rgba(0,0,0,0.9)" }}
                className="
                relative
                z-10
                text-center
                  text-3xl
                  md:text-4xl
                  lg:text-5xl
                  font-bold
                  tracking-wider
                  text-white
                  drop-shadow-lg
                  duration-300
                  hover:text-red-700
                "
              >
                {band}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-16">
        </div>
      </div>
    </section>
  );
}