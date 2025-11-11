import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SapServices from "./components/SapServices";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import ITSolutions from "./components/ITSolutions";
import InternalProducts from "./components/InternalProducts";
import Testimonials from "./components/Testimonials";

// Pages
import About from "./pages/About";

const LandingPage = () => (
  <>

    <section id="home"><HeroSection /></section>

    <section id="sap"><SapServices /></section>

    <section id="it-solutions"><ITSolutions /></section>

    <section id="products"><InternalProducts /></section>

    <section id="testimonials"><Testimonials /></section>

    {/* <section id="services"><Services /></section> */}

    <section id="contact"><ContactUs /></section>

    <Footer />
  </>
);

const App = () => {
  return (
    <Router>
      <Navbar />


      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
