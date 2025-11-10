import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";

const App = () => {
  return (
    <div className="bg-[#070C1C] min-h-screen text-white font-sans scroll-smooth">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Services />
      <ContactUs />
    </div>
  );
};

export default App;
