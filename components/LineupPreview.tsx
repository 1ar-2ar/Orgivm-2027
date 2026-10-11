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
          Performing at Orgivm Satanicvm VI
        </h2>

        <div className="space-y-6">
          {bands.map((band) => (
            <div
              key={band}
              className="border-b border-white/10 pb-4"
            >
              <h3
                className="
                  text-3xl
                  md:text-5xl
                  font-light
                  tracking-wider
                  text-white
                  transition-all
                  duration-300
                  hover:text-red-700
                  hover:translate-x-2
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