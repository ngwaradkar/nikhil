import Navbar from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { TrustStrip } from "./components/sections/TrustStrip";
import { WhoIHelp } from "./components/sections/WhoIHelp";
import { WhatIAutomate } from "./components/sections/WhatIAutomate";
import BusinessImpact from "./components/sections/BusinessImpact";
import InteractiveCaseStudies from "./components/sections/InteractiveCaseStudies";
import ExcelShowcase from "./components/sections/ExcelShowcase";
import StreamlitShowcase from "./components/sections/StreamlitShowcase";
import Experience from "./components/sections/Experience";
import HowIWork from "./components/sections/HowIWork";
import Testimonials from "./components/sections/Testimonials";
import WhyNikhil from "./components/sections/WhyNikhil";
import PricingGuide from "./components/sections/PricingGuide";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F1F5F9] selection:bg-[#3B82F6] selection:text-white font-sans antialiased overflow-x-hidden">
      <Navbar />
      <main>
        {/* 1. Client-Focused Hero with Real Results Metric Cards */}
        <Hero />

        {/* 2. Enterprise Trust Strip */}
        <TrustStrip />

        {/* 3. The Problems I Solve */}
        <WhoIHelp />

        {/* 4. What I Automate (4 Core Services) */}
        <WhatIAutomate />

        {/* 5. Featured Case Studies (Before / What I Built / After / Impact) */}
        <InteractiveCaseStudies />

        {/* 6. Excel Automation Pipeline Architecture */}
        <ExcelShowcase />

        {/* 7. Streamlit Web Operations Applications */}
        <StreamlitShowcase />

        {/* 8. Before vs After Transformation Story */}
        <BusinessImpact />

        {/* 9. 5-Step Collaborative Process */}
        <HowIWork />

        {/* 10. Client Testimonials & Social Proof */}
        <Testimonials />

        {/* 11. Why Nikhil? (Operations Specialist Who Codes) */}
        <WhyNikhil />

        {/* 12. Verified Industry Experience & Credentials */}
        <Experience />

        {/* 13. Transparent Pricing & Project Scopes */}
        <PricingGuide />

        {/* 14. "Send Me Your Workflow" & WhatsApp Lead Generation */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
