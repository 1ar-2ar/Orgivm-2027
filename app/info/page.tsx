import Link from "next/link";
export default function InfoPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32">
      <div className="max-w-5xl mx-auto px-8">

        <h1 className="text-5xl md:text-7xl font-bold uppercase mb-12">
          The Grimoire of Orgivm
        </h1>

        <div className="w-24 h-px bg-red-700 mb-16"></div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold uppercase mb-4">
            Venue
          </h2>

          <p className="text-gray-300">
            Parkteatret Scene
          </p>

          <p className="text-gray-300">
            Olaf Ryes plass 11
          </p>

          <p className="text-gray-300">
            0552 Oslo, Norway
          </p>
          <a
    href="https://www.parkteatret.no/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-4 text-red-700 hover:text-red-500 transition-colors"
  >
    Visit Parkteatret Website
  </a>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold uppercase mb-4">
            Date, Time and restrictions
          </h2>

          <p className="text-gray-300">
            8-9 January 2027
          </p>

          <p className="text-gray-300">
            Doors open: 19:00
          </p>

          <p className="text-gray-300">
            Age limit: 18+
          </p>

          <p className="text-gray-300 italic">
            Demons, Shadows and ancient curses are welcome
            <br /> Drugs are forbidden
          </p>
        </section>

<section className="mb-16">
  <h2 className="text-3xl font-bold uppercase mb-4">
    Tickets
  </h2>

  <a
    href="https://www.ticketmaster.no/search?q=orgivm+satanicvm"
    target="_blank"
    rel="noopener noreferrer"
    className="text-red-700 hover:text-red-500 transition-colors"
  >
    Buy Tickets on Ticketmaster
  </a>


  <div className="space-y-2 text-gray-300">
    <p>Festival Pass 1671,- NOK (includes 60,- NOK fee) </p>
    <p>Friday Pass 944,- NOK (includes 60,- NOK fee) </p>
    <p>Saturday Pass 944,- NOK (includes 60,- NOK fee) </p>
  </div>
</section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold uppercase mb-4">
            Lineup
          </h2>

          <div className="text-gray-300 uppercase space-y-2">

  <p>
    <Link 
    href="/lineup#ulvesanger"
    className="hover:text-red-700 transition-colors"
    >ULVESANGER</Link>
  </p>

  <p>
    <Link 
    href="/lineup#nordjevel"
    className="hover:text-red-700 transition-colors"
    >NORDJEVEL</Link>
  </p>

  <p>
    <Link 
    href="/lineup#fen"
    className="hover:text-red-700 transition-colors"
    >FEN</Link>
  </p>

  <p>
    <Link 
    href="/lineup#askeregn"
    className="hover:text-red-700 transition-colors"
    >ASKEREGN</Link>
  </p>

  <p>
    <Link 
    href="/lineup#dhg"
    className="hover:text-red-700 transition-colors"
    >DØDHEIMSGARD</Link>
  </p>

  <p>
    <Link 
    href="/lineup#mortem"
    className="hover:text-red-700 transition-colors"
    >MORTEM</Link>
  </p>

  <p>
    <Link 
    href="/lineup#avrak"
    className="hover:text-red-700 transition-colors"
    >AVRAK</Link>
  </p>

  <p>
    <Link 
    href="/lineup#abduction"
    className="hover:text-red-700 transition-colors"
    >ABDUCTION</Link>
  </p>

</div>
        </section>

        <section className="mb-24">
          <h2 className="text-3xl font-bold uppercase mb-4">
            About Orgivm Satanicvm
          </h2>

          <p className="text-gray-300 leading-relaxed">
  Once again, we invite you to two days of the darkest and
  blackest metal from Norway and abroad.
</p>

<p className="text-gray-300 leading-relaxed mt-4">
  Orgivm Satanicvm is dedicated to exclusive performances,
  carefully curated lineups and unforgettable concert experiences
  for devoted followers of the underground.
</p>
        </section>

      </div>
    </main>
  );
}