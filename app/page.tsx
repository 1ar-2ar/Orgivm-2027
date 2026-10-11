import VideoBackground from "../components/VideoBackground";
import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import LineupPreview from "../components/LineupPreview";

export default function Home() {
  return (
    <>
      <VideoBackground />
      <Navbar />
      <Hero />
      <LineupPreview />
    </>
  );
}