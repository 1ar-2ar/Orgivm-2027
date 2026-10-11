import Navbar from "../components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">
        <section className="pt-40 pb-20 text-center">
          <h1 className="text-6xl md:text-8xl font-bold tracking-widest">
            ORGIVM VI
          </h1>

          <p className="mt-8 text-2xl uppercase tracking-wider">
            Two Days of the Darkest and Blackest Metal
          </p>

          <p className="mt-4 text-gray-400">
            January 2027 • Parkteatret • Oslo, Norway
          </p>
        </section>
      </main>
    </>
  );
}