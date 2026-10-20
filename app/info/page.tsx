export default function InfoPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32">
      <div className="max-w-5xl mx-auto px-8">

        <h1 className="text-5xl md:text-7xl font-bold uppercase mb-12">
          Festival Info
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
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold uppercase mb-4">
            Date & Time
          </h2>

          <p className="text-gray-300">
            8-9 January 2027
          </p>

          <p className="text-gray-300">
            Doors open: 18:00
          </p>

          <p className="text-gray-300">
            Age limit: 18+
          </p>
        </section>

<section className="mb-16">
  <h2 className="text-3xl font-bold uppercase mb-4">
    Tickets
  </h2>

  <a
    href="https://www.ticketmaster.no/"
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

          <div className="text-gray-300 uppercase">
             <p>ULVESANGER</p>
             <p>NORDJEVEL</p>
             <p>FEN</p>
             <p>ASKEREGN</p>
             <p>DØDHEIMSGARD</p>
             <p>MORTEM</p>
             <p>AVRAK</p>
             <p>ABDUCTION</p>

          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-3xl font-bold uppercase mb-4">
            About Orgivm Satanicvm
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Once again, we invite you to two days of the darkest and blackest
            metal from Norway and abroad, guaranteeing another weekend of
            unique and exclusive concert experiences.
          </p>
        </section>

      </div>
    </main>
  );
}