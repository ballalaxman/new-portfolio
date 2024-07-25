import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Contact from "./components/Contact";
import HireMe from "./components/HireMe";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <HireMe />
      <Experience />
      <Contact />
    </main>
  );
}
