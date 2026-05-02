import React from "react";
import { Award, MessageSquare, MapPin, Clock, Users, ShieldCheck } from "lucide-react";
import { WHATSAPP_URL, heroImages, MAPS_URL } from "../constants";
import { motion } from "framer-motion";

const Hero = ({ heroIdx, scrollTo }) => {
  const mainHeroImg = heroImages[0];

  const contentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1, x: 0,
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1], staggerChildren: 0.2 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="home"
      className="kc-hero"
      aria-label="Kayze Concept — Quality Building Materials in Lagos"
    >
      {/* Background slideshow — decorative, hidden from screen readers */}
      <div className="kc-hero-bg" aria-hidden="true">
        {heroImages.slice(1).map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            role="presentation"
            className={`kc-hero-slide${i === heroIdx ? " active" : ""}`}
            loading="lazy"
          />
        ))}
        <div className="kc-hero-overlay" />
      </div>

      <div className="kc-hero-container">
        <motion.div
          className="kc-hero-content"
          variants={contentVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="kc-hero-badge" variants={itemVariants} aria-label="Authorization badge">
            <span aria-hidden="true"><Award size={14} /></span>
            Authorized Finecoat &amp; Prestige Distributor
          </motion.div>

          {/* H1 — the single most important on-page SEO element */}
          <motion.h1 className="kc-hero-title" variants={itemVariants}>
            Quality Building <br />
            <span className="kc-accent">Materials</span> You <br />
            Can Trust
          </motion.h1>

          <motion.p className="kc-hero-desc" variants={itemVariants}>
            Your premium destination for high-quality paints, designer wallpapers,
            nails, electrodes, and complete building finishing materials in Lagos, Nigeria.
          </motion.p>

          <motion.div className="kc-hero-btns" variants={itemVariants}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="kc-btn kc-btn-whatsapp"
              aria-label="Order building materials on WhatsApp — +234 803 322 7792"
            >
              <MessageSquare size={20} aria-hidden="true" />
              Order on WhatsApp
            </a>
            <button
              onClick={() => scrollTo("products")}
              className="kc-btn kc-btn-outline"
              aria-label="Browse our product catalogue"
            >
              Explore Products
            </button>
          </motion.div>

          {/* Trust stats */}
          <motion.div className="kc-hero-stats" variants={itemVariants} aria-label="Business highlights">
            <div className="kc-stat">
              <strong>10+</strong>
              <span><Clock size={12} aria-hidden="true" style={{ display: "inline", marginRight: "4px" }} />Years Trusted</span>
            </div>
            <div className="kc-stat">
              <strong>5k+</strong>
              <span><Users size={12} aria-hidden="true" style={{ display: "inline", marginRight: "4px" }} />Happy Clients</span>
            </div>
            <div className="kc-stat">
              <strong>100%</strong>
              <span><ShieldCheck size={12} aria-hidden="true" style={{ display: "inline", marginRight: "4px" }} />Genuine</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Hero image */}
        <motion.div
          className="kc-hero-visual"
          initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
          animate={{ opacity: 1, scale: 1, rotateY: -5 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <img
            src={mainHeroImg}
            alt="Inside Kayze Concept's building materials store in Orile-Agege, Lagos"
            className="kc-hero-main-img"
            width="560"
            height="420"
            loading="eager"
            fetchpriority="high"
          />
          <motion.div
            className="kc-hero-floating-card"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            aria-label="Store address"
          >
            <MapPin size={28} color="#ea580c" strokeWidth={2.5} aria-hidden="true" />
            <div>
              <span className="kc-address-label">Visit Our Store</span>
              <strong>18, Old Oko Oba Road, Agege</strong>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="kc-directions-link"
                aria-label="Get directions to Kayze Concept on Google Maps"
              >
                Get Directions →
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;