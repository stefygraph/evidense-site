import AlignmentBackground from "./components/AlignmentBackground";
import Briefing from "./components/Briefing";
import Contact from "./components/Contact";
import Contrast from "./components/Contrast";
import DecisionSprint from "./components/DecisionSprint";
import Domains from "./components/Domains";
import Footer from "./components/Footer";
import FourSituations from "./components/FourSituations";
import Founder from "./components/Founder";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Method from "./components/Method";
import ScrollDepth from "./components/ScrollDepth";
import VisibilityNotRevenue from "./components/VisibilityNotRevenue";

// Homepage. Section order and copy follow the handover note:
// 1 Hero, 2 Visibility is not revenue, 3 Contrast, 4 Decision Sprint,
// 5 Four situations, 6 Founder, 7 Domains, 8 Method, 9 Briefing,
// 10 Contact.
export default function Home() {
  return (
    <main className="relative min-h-screen selection:bg-[var(--color-moss)] selection:text-white">
      <AlignmentBackground />
      <ScrollDepth />

      <div className="relative z-10">
        <Header />
        <Hero />
        <VisibilityNotRevenue />
        <Contrast />
        <DecisionSprint />
        <FourSituations />
        <Founder />
        <Domains />
        <Method />
        <Briefing />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
