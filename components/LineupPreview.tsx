import Image from "next/image";
import Link from "next/link";

const fridaybands = [
  "ULVESANGER",
  "NORDJEVEL",
  "FEN",
  "ASKEREGN"
] as const;

const saturdaybands = [  
  "DØDHEIMSGARD",
  "MORTEM",
  "AVRAK",
  "ABDUCTION",
] as const;

const bandImages = {
  ULVESANGER: "/images/bands/Ulvesanger og DHG.jpg",
  NORDJEVEL: "/images/bands/Nordjevellineup.jpg",
  FEN: "/images/bands/Fenlineup.jpg",
  ASKEREGN: "/images/bands/Askeregnlineup.jpg",
  DØDHEIMSGARD: "/images/bands/Ulvesanger og DHG.jpg",
  MORTEM: "/images/bands/Mortemlineup.jpg",
  AVRAK: "/images/bands/avraklineup.jpg",
  ABDUCTION: "/images/bands/Abductionlineup.jpg",
};

const bandLinks = {
  ULVESANGER: "ulvesanger",
  NORDJEVEL: "nordjevel",
  FEN: "fen",
  ASKEREGN: "askeregn",
  DØDHEIMSGARD: "dhg",
  MORTEM: "mortem",
  AVRAK: "avrak",
  ABDUCTION: "abduction",
};

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
            group
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
          {bandImages[band] && (
          <>
  <Image
    src={bandImages[band as keyof typeof bandImages]}
    alt={band}
    fill
    sizes="(max-width: 768px) 100vw, 50vw"
    className="object-cover transition-transform duration-700 hover:scale-110"
  />
  <div className="absolute inset-0 bg-black/50" />
</>
          )}
          <Link
          href={`/lineup#${bandLinks[band]}`}
            
            className="
              relative
              z-10
              text-center
              text-2xl
              md:text-3xl
              font-bold
              tracking-wider
              text-white
              transition-colors
              duration-300
              group-hover:text-red-700
            "
            style={{ textShadow: "0 0 20px rgba(0,0,0,0.9)" }}
          >
            {band}
          </Link>
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
            group
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
           {bandImages[band] && (
          <>
  <Image
    src={bandImages[band as keyof typeof bandImages]}
    alt={band}
    fill
    sizes="(max-width: 768px) 100vw, 50vw"
    className="object-cover transition-transform duration-700 hover:scale-110"
  />
  <div className="absolute inset-0 bg-black/50" />
</>
          )}

          <Link
            href={`/lineup#${bandLinks[band]}`}
            className="
               relative
               z-10
              text-center
              text-2xl
              md:text-3xl
              font-bold
              tracking-wider
              text-white
              transition-colors
              duration-300
              group-hover:text-red-700
            "
            style={{ textShadow: "0 0 20px rgba(0,0,0,0.9)" }}
          >
            {band}
          </Link>
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