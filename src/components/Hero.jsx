import React from "react";
import { Award, MessageSquare, MapPin, Clock, Users, ShieldCheck } from "lucide-react";
import { WHATSAPP_URL, heroImages, MAPS_URL } from "../constants";
import { motion } from "framer-motion";

const Hero = ({ heroIdx, scrollTo }) => {
  const mainHeroImg = heroImages[0];

  const contentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1], staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="home" className="kc-hero">
      <div className="kc-hero-bg">
        {heroImages.slice(1).map((img, i) => (
          <img key={i} src={img} alt="" className={`kc-hero-slide${i === heroIdx ? " active" : ""}`} />
        ))}
        <div className="kc-hero-overlay" />
      </div>

      <motion.div 
        className="kc-hero-content"
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="kc-hero-badge" variants={itemVariants}>
          <span><Award size={14} /></span> Authorized Finecoat &amp; Prestige Distributor
        </motion.div>
        <motion.h1 className="kc-hero-title" variants={itemVariants}>
          Quality Building <br />
          <span className="kc-accent">Materials</span> You <br />
          Can Trust
        </motion.h1>
        <motion.p className="kc-hero-desc" variants={itemVariants}>
          Your premium destination for high-quality paints, designer wallpapers, and durable building accessories in Lagos.
        </motion.p>
        <motion.div className="kc-hero-btns" variants={itemVariants}>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="kc-btn kc-btn-whatsapp">
            <MessageSquare size={20} />
            Order on WhatsApp
          </a>
          <button onClick={() => scrollTo("products")} className="kc-btn kc-btn-outline">
            Explore Products
          </button>
        </motion.div>
        <motion.div className="kc-hero-stats" variants={itemVariants}>
          <div className="kc-stat">
            <strong>10+</strong>
            <span><Clock size={12} style={{ display: 'inline', marginRight: '4px' }} /> Years Trusted</span>
          </div>
          <div className="kc-stat">
            <strong>5k+</strong>
            <span><Users size={12} style={{ display: 'inline', marginRight: '4px' }} /> Happy Clients</span>
          </div>
          <div className="kc-stat">
            <strong>100%</strong>
            <span><ShieldCheck size={12} style={{ display: 'inline', marginRight: '4px' }} /> Genuine</span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="kc-hero-images"
        initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
        animate={{ opacity: 1, scale: 1, rotateY: -5 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        <div className="kc-hero-img-grid">
          {heroImages.slice(0, 4).map((img, i) => (
            <div key={i} className={`kc-hero-thumb ${i === heroIdx % 4 ? 'active' : ''}`}>
              <img src={img} alt="Hero thumbnail" />
            </div>
          ))}
        </div>

        <motion.div 
          className="kc-hero-address-card"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <MapPin size={28} color="#ea580c" strokeWidth={2.5} />
          <div>
            <span className="kc-address-label">Visit Our Store</span>
            <strong>18, Old Oko Oba Road, Agege</strong>
            <a href={MAPS_URL} target="_blank" rel="noreferrer" className="kc-directions-link">
              Get Directions →
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
