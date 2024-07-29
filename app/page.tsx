import HeroSection from "./components/HeroSection";
import Contact from "./components/Contact";
import HireMe from "./components/HireMe";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <HireMe />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
