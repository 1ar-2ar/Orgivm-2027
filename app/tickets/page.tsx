import Link from "next/link";

export default function TicketsPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <section className="mb-16 text-center">

        <section className="py-24">
          <h1 className="text-3xl md:text-4xl font-bold uppercase">
            Tickets to Orgivm Satanicvm 2027
          </h1>
        </section>

         <p className="text-white font-semibold mt-4 uppercase tracking-wider">
  Secure your place at Orgivm Satanicvm VI today.
</p>

        <Link
          href="https://www.ticketmaster.no/search?q=orgivm+satanicvm"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block
            mt-8
            border
            border-red-700
            bg-red-700/20
            hover:bg-red-700
            text-white
            text-xl
            font-bold
            uppercase
            tracking-[0.2em]
            px-12
            py-6
            rounded-lg
            transition-all
            duration-300
          "
        >
          BUY TICKETS
        </Link>

<div className="max-w-3xl mx-auto mt-16 text-center">

  <div className="w-32 h-px bg-red-700 mx-auto mt-12 mb-12"></div>

  <p className="text-gray-300">
    Eight exclusive performances.
  </p>

  <p className="text-gray-300 mt-4">
    Two days of carefully curated Black Metal.
  </p>

  <p className="text-gray-300 mt-4">
    Parkteatret, Oslo · 8-9 January 2027.
  </p>

  <p className="text-white font-semibold mt-8 uppercase tracking-wider">
  Tickets Are Still Available
</p>


</div>

<div className="mt-8 space-y-2">
  <p className="text-white font-medium">
    Festival Pass · <span className="text-green-500">1671</span> NOK
  </p>

  <p className="text-white font-medium">
    Friday Pass · <span className="text-green-500">944</span> NOK
  </p>

  <p className="text-white font-medium">
    Saturday Pass · <span className="text-green-500">944</span> NOK
  </p>
</div>

      </section>
    </main>
  );
}