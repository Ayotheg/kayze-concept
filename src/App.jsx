import { useState, useEffect, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar           from "./components/Navbar";
import Hero             from "./components/Hero";
import About            from "./components/About";
import Products         from "./components/Products";
import Brands           from "./components/Brands";
import ColourChart      from "./components/Colourchart";
import WhyChooseUs      from "./components/WhyChooseUs";
import Gallery          from "./components/Gallery";
import Location         from "./components/Location";
import Contact          from "./components/Contact";
import Footer           from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Lightbox         from "./components/Lightbox";
import NotFound         from "./components/NotFound";
import { Analytics }    from "@vercel/analytics/react";

import { heroImages } from "./constants";

// ── Dynamic page titles per section ──────────────────────────
const SECTION_META = {
  home:     {
    title: "Kayze Concept | Building Materials Lagos — Paints, Wallpapers, Nails & Electrodes",
    desc:  "Kayze Concept is Lagos' trusted building materials merchant at Orile-Agege. Authorized distributor of Finecoat & Prestige paints. Call +234 803 322 7792.",
  },
  about:    {
    title: "About Us | Kayze Concept — 10+ Years Serving Lagos",
    desc:  "Kayze Concept has served Lagos homeowners, contractors and builders for over 10 years. Authorized Finecoat & Prestige paint distributor at Orile-Agege.",
  },
  products: {
    title: "Our Products | Paints, Wallpapers, Nails & More — Kayze Concept Lagos",
    desc:  "Shop premium paints, wallpapers, construction nails, welding electrodes and building accessories at Kayze Concept, Orile-Agege, Lagos.",
  },
  brands:   {
    title: "Finecoat & Prestige Paint Distributor Lagos | Kayze Concept",
    desc:  "Kayze Concept is an authorized distributor of Finecoat and Prestige paints in Lagos. 100% genuine products with manufacturer warranty.",
  },
  colours:  {
    title: "Paint Colour Chart — Prestige Gloss, Emulsion & Textured Finishes | Kayze Concept",
    desc:  "Browse the official Prestige Paint colour chart — gloss, emulsion and textured finishes. Order any shade via WhatsApp from Kayze Concept, Lagos.",
  },
  gallery:  {
    title: "Store Gallery | Kayze Concept Building Materials Lagos",
    desc:  "Take a look inside Kayze Concept's well-stocked building materials store at 18 Old Oko Oba Road, Orile-Agege, Lagos.",
  },
  location: {
    title: "Find Us | Kayze Concept — 18 Old Oko Oba Road, Orile-Agege, Lagos",
    desc:  "Visit Kayze Concept at 18 Old Oko Oba Road, Powerline Bus-Stop, Orile-Agege, Lagos. Open Mon–Sat 8AM–7PM, Sun 1PM–4PM. Call +234 803 322 7792.",
  },
  contact:  {
    title: "Contact Kayze Concept | Order Building Materials via WhatsApp, Lagos",
    desc:  "Order building materials from Kayze Concept via WhatsApp (+234 803 322 7792) or visit our store in Orile-Agege, Lagos. Fast response guaranteed.",
  },
};

function updateMeta(section) {
  const meta = SECTION_META[section] || SECTION_META.home;
  document.title = meta.title;
  const descTag = document.querySelector('meta[name="description"]');
  if (descTag) descTag.setAttribute("content", meta.desc);
}

// ── Main homepage component ───────────────────────────────────
function HomePage() {
  const [menuOpen,      setMenuOpen]      = useState(false);
  const [scrolled,      setScrolled]      = useState(false);
  const [heroIdx,       setHeroIdx]       = useState(0);
  const [lightboxImg,   setLightboxImg]   = useState(null);
  const [activeSection, setActiveSection] = useState("home");

  // Scroll listener — active section + page title
  useEffect(() => {
    const sections = Object.keys(SECTION_META);
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      }
      if (current !== activeSection) {
        setActiveSection(current);
        updateMeta(current);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [activeSection]);

  // Hero slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIdx((i) => (i + 1) % heroImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Smooth scroll
  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }, []);

  return (
    <div className="kc-root">
      <a href="#main-content" className="kc-skip-link">Skip to main content</a>

      <Navbar
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrollTo={scrollTo}
        activeSection={activeSection}
      />

      <main id="main-content">
        <Hero         heroIdx={heroIdx} scrollTo={scrollTo} />
        <About />
        <Products />
        <Brands />
        <ColourChart  setLightboxImg={setLightboxImg} />
        <WhyChooseUs />
        <Gallery      setLightboxImg={setLightboxImg} />
        <Location />
        <Contact />
      </main>

      <Footer scrollTo={scrollTo} />
      <FloatingWhatsApp />
      <Lightbox lightboxImg={lightboxImg} setLightboxImg={setLightboxImg} />
    </div>
  );
}

// ── Root with router ─────────────────────────────────────────
export default function App() {
  return (
    <BrowserRouter>
      <Analytics />
      <Routes>
        <Route path="/"   element={<HomePage />} />
        <Route path="*"   element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}