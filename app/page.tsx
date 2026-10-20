import VideoBackground from "../components/VideoBackground";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LineupPreview from "../components/LineupPreview";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <VideoBackground />
      <Navbar />
      <Hero />
      <LineupPreview />

      <Footer />
    </>
  );
}