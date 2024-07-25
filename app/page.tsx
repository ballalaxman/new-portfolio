import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <Contact />
    </main>
  );
}
