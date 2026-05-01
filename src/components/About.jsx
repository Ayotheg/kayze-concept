import React from "react";
import { Award, Users, TrendingUp, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
    }
  };

  return (
    <section id="about" className="kc-section kc-about">
      <div className="kc-container">
        <motion.div 
          className="kc-about-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="kc-about-text" variants={itemVariants}>
            <span className="kc-section-eyebrow">Since 2014</span>
            <h2>Who We Are</h2>
            <div className="kc-section-line" style={{ margin: "0 0 24px 0" }} />
            <p>
              Kayze Concept is a leading building materials merchant serving homeowners, contractors, painters, builders, and businesses across Lagos. We specialize in providing premium quality paints, wallpapers, nails, electrodes, and complete building finishing materials.
            </p>
            <p>
              As a major authorized distributor for <strong className="kc-brand-finecoat">Finecoat</strong> and <strong className="kc-brand-prestige">Prestige</strong> paint brands, we ensure that every product meets the highest standards of quality and durability.
            </p>
            <p>Whether you're working on a residential project, commercial building, or industrial facility, Kayze Concept has the materials and expertise to help you succeed.</p>
          </motion.div>
          <motion.div className="kc-about-stats" variants={containerVariants}>
            <motion.div className="kc-astat kc-astat-blue" variants={itemVariants}>
              <Award className="kc-astat-icon" size={32} color="#2563eb" />
              <strong>10+</strong>
              <span>Years Experience</span>
            </motion.div>
            <motion.div className="kc-astat kc-astat-orange" variants={itemVariants}>
              <Users className="kc-astat-icon" size={32} color="#ea580c" />
              <strong>5k+</strong>
              <span>Happy Clients</span>
            </motion.div>
            <motion.div className="kc-astat kc-astat-green" variants={itemVariants}>
              <TrendingUp className="kc-astat-icon" size={32} color="#16a34a" />
              <strong>500+</strong>
              <span>Product Range</span>
            </motion.div>
            <motion.div className="kc-astat kc-astat-purple" variants={itemVariants}>
              <ShieldCheck className="kc-astat-icon" size={32} color="#9333ea" />
              <strong>100%</strong>
              <span>Authentic</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
