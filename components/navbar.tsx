import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-black/30 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-8 py-6">
        
       <Link href="/">
        <h1 className="mb-4 text-center text-2xl font-bold tracking-[0.15em] text-white">
          ORGIVM VI
        </h1>
        </Link>

         <div className="flex justify-center gap-8 uppercase text-lg tracking-widest text-white">
          <Link href="/lineup">Lineup</Link>
          <Link href="/info">Info</Link>
          <Link href="/tickets">Tickets</Link>
          <Link href="/merch">Merch</Link>
        </div>

      </div>
    </nav>
  );
}