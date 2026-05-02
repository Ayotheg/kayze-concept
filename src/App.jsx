import { useState, useEffect } from "react";
import "./App.css";

import Navbar         from "./components/Navbar";
import Hero           from "./components/Hero";
import About          from "./components/About";
import Products       from "./components/Products";
import Brands         from "./components/Brands";
import ColourChart    from "./components/ColourChart";
import WhyChooseUs    from "./components/WhyChooseUs";
import Gallery        from "./components/Gallery";
import Location       from "./components/Location";
import Contact        from "./components/Contact";
import Footer         from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Lightbox       from "./components/Lightbox";

import { heroImages } from "./constants";

export default function App() {
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [scrolled,   setScrolled]    = useState(false);
  const [heroIdx,    setHeroIdx]     = useState(0);
  const [lightboxImg, setLightboxImg] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIdx((i) => (i + 1) % heroImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="kc-root">
      <Navbar scrolled={scrolled} menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollTo={scrollTo} />
      <Hero           heroIdx={heroIdx} scrollTo={scrollTo} />
      <About />
      <Products />
      <Brands />
      <ColourChart    setLightboxImg={setLightboxImg} />
      <WhyChooseUs />
      <Gallery        setLightboxImg={setLightboxImg} />
      <Lightbox       lightboxImg={lightboxImg} setLightboxImg={setLightboxImg} />
      <Location />
      <Contact />
      <Footer         scrollTo={scrollTo} />
      <FloatingWhatsApp />
    </div>
  );
}