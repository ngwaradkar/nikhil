import Navbar from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { TrustStrip } from "./components/sections/TrustStrip";
import { WhatIAutomate } from "./components/sections/WhatIAutomate";
import BusinessImpact from "./components/sections/BusinessImpact";
import InteractiveCaseStudies from "./components/sections/InteractiveCaseStudies";
import ExcelShowcase from "./components/sections/ExcelShowcase";
import Experience from "./components/sections/Experience";
import HowIWork from "./components/sections/HowIWork";
import Skills from "./components/sections/Skills";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#0A0E17] text-[#F1F5F9] selection:bg-[#3B82F6] selection:text-white font-sans antialiased overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <WhatIAutomate />
        <BusinessImpact />
        <InteractiveCaseStudies />
        <ExcelShowcase />
        <Experience />
        <HowIWork />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
