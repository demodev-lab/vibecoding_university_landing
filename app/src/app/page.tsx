import Nav from "./components/sections/Nav";
import Hero from "./components/sections/Hero";
import Trial from "./components/sections/Trial";
import Timer from "./components/sections/Timer";
import Curriculum from "./components/sections/Curriculum";
import Camp from "./components/sections/Camp";
import Footer from "./components/sections/Footer";

export default function Home() {
  return (
    <div className="bg-bg text-ink">
      <Nav />
      <Hero />
      <Trial />
      <Timer />
      <Curriculum />
      <Camp />
      <Footer />
    </div>
  );
}
