import Image from "next/image";
import Link from "next/link";

const fridaybands = [
  "ULVESANGER",
  "NORDJEVEL",
  "FEN",
  "ASKEREGN"
];

const saturdaybands = [  
  "DHG",
  "MORTEM",
  "AVRAK",
  "ABDUCTION",
];

export default function LineupPreview() {
  return (
    <section
      id="lineup"
      className="relative z-10 min-h-screen flex items-center"
    >
      <div className="mx-auto w-full max-w-7xl px-8">
        <p className="mb-6 text-sm uppercase tracking-[0.4em] text-gray-400 text-center">
          Orgivm Satanicvm
        </p>

        <h2 className="mb-12 text-5xl md:text-7xl font-bold uppercase text-white text-center">
          Summoning darkness at Orgivm Satanicvm VI
        </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

  {/* Friday */}
  <div>
    <h3 className="mb-6 text-2xl font-bold uppercase text-white text-center">
      Friday
    </h3>

    <div className="w-20 h-px bg-red-700 mx-auto mb-6"></div>

    <div className="space-y-4 max-w-md mx-auto">
      {fridaybands.map((band) => (
        <div
          key={band}
          className="
            relative
            overflow-hidden
            border
            border-white/10
            rounded-lg
            min-h-[130px]
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
              text-2xl
              md:text-3xl
              font-bold
              tracking-wider
              text-white
              hover:text-red-700
            "
          >
            {band}
          </h3>
        </div>
      ))}
    </div>
  </div>

  {/* Saturday */}
  <div>
    <h3 className="mb-6 text-2xl font-bold uppercase text-white text-center">
      Saturday
    </h3>

    <div className="w-20 h-px bg-red-700 mx-auto mb-6"></div>

    <div className="space-y-4 max-w-md mx-auto">
      {saturdaybands.map((band) => (
        <div
          key={band}
          className="
            border
            border-white/10
            rounded-lg
            min-h-[130px]
            flex
            items-center
            justify-center
            transition-all
            duration-300
            hover:border-red-700
            hover:bg-white/5
          "
        >
          <h3
            style={{ textShadow: "0 0 20px rgba(0,0,0,0.9)" }}
            className="
              text-center
              text-2xl
              md:text-3xl
              font-bold
              tracking-wider
              text-white
              hover:text-red-700
            "
          >
            {band}
          </h3>
        </div>
      ))}
    </div>
  </div>

</div>
        <div className="mt-16">
        </div>

             </div>
          </section>
    );
}