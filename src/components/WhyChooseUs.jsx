import React from "react";
import { ShieldCheck, CheckCircle, CircleDollarSign, Box, MessageSquare, MapPin } from "lucide-react";
import { whyUs } from "../constants";
import { motion } from "framer-motion";

const ICON_MAP = {
  ShieldCheck,
  CheckCircle,
  CircleDollarSign,
  Box,
  MessageSquare,
  MapPin,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const WhyChooseUs = () => {
  return (
    <section id="why" className="kc-section kc-why">
      <div className="kc-container">
        <motion.div
          className="kc-section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="kc-section-eyebrow">Our Values</span>
          <h2>Why Choose Kayze Concept?</h2>
          <div className="kc-section-line" />
          <p className="kc-section-sub">Your satisfaction is our priority. Here's what sets us apart</p>
        </motion.div>

        <motion.div
          className="kc-why-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {whyUs.map((w, i) => {
            const Icon = ICON_MAP[w.icon];
            return (
              <motion.div key={i} className="kc-why-card" variants={itemVariants}>
                <div className="kc-why-icon">
                  {Icon
                    ? <Icon size={28} color="#2563eb" />
                    : <span>✅</span>
                  }
                </div>
                <div className="kc-why-content">
                  <h4>{w.title}</h4>
                  <p>{w.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;