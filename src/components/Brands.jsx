import React from "react";
import { Award, CheckCircle2, ShieldCheck, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { storePhotos, brandFeatures, WHATSAPP_URL } from "../constants";

/* "Popular pick" strip at the foot of each brand card */
const BrandFeature = ({ brand, setLightboxImg }) => {
  const f = brandFeatures[brand];
  const ph = storePhotos[f.photo];
  return (
    <div className="kc-brand-feature">
      <button
        className="kc-brand-feature-img"
        onClick={() => setLightboxImg?.(ph.src)}
        aria-label={`Zoom: ${ph.alt}`}
      >
        <img src={ph.src} alt={ph.alt} loading="lazy" />
      </button>
      <div className="kc-brand-feature-text">
        <span>Popular pick</span>
        <strong>{f.name}</strong>
        <small>{f.size}</small>
      </div>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer noopener"
        className="kc-brand-feature-cta"
        aria-label={`Ask the price of ${f.name} on WhatsApp`}
      >
        Ask price <ArrowUpRight size={15} aria-hidden="true" />
      </a>
    </div>
  );
};

const Brands = ({ setLightboxImg }) => {
  return (
    <section id="brands" className="kc-section kc-brands">
      <div className="kc-container">
        <motion.div 
          className="kc-section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="kc-section-eyebrow">Partnership</span>
          <h2>Authorized Distributor</h2>
          <div className="kc-section-line" />
          <p className="kc-section-sub">Official distributor of premium Nigerian paint brands</p>
        </motion.div>
        
        <div className="kc-brands-grid">
          <motion.div 
            className="kc-brand-card kc-brand-finecoat-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <img className="kc-brand-photo" src={storePhotos.finecoatPaint.src} alt="" role="presentation" loading="lazy" />
            <div className="kc-brand-header">
              <Award className="kc-brand-badge" size={32} />
              <h3>Finecoat</h3>
            </div>
            <p>Premium quality paints known for durability, excellent coverage, and beautiful finishes.</p>
            <ul>
              <li><CheckCircle2 size={16} /> Long-lasting protection</li>
              <li><CheckCircle2 size={16} /> Wide color selection</li>
              <li><CheckCircle2 size={16} /> Eco-friendly formulations</li>
            </ul>
            <BrandFeature brand="Finecoat" setLightboxImg={setLightboxImg} />
          </motion.div>
          
          <motion.div 
            className="kc-brand-card kc-brand-prestige-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <img className="kc-brand-photo" src={storePhotos.prestigePaint.src} alt="" role="presentation" loading="lazy" />
            <div className="kc-brand-header">
              <Award className="kc-brand-badge" size={32} />
              <h3>Prestige</h3>
            </div>
            <p>Superior paint brand delivering exceptional quality for residential and commercial projects.</p>
            <ul>
              <li><CheckCircle2 size={16} /> Professional grade quality</li>
              <li><CheckCircle2 size={16} /> Weather resistant</li>
              <li><CheckCircle2 size={16} /> Easy application</li>
            </ul>
            <BrandFeature brand="Prestige" setLightboxImg={setLightboxImg} />
          </motion.div>
        </div>
        
        <motion.div 
          className="kc-brands-guarantee"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <span className="kc-brands-guarantee-icon" aria-hidden="true">
            <ShieldCheck size={26} />
          </span>
          <div>
            <strong>Authenticity Guaranteed</strong>
            <p>We supply 100% genuine Finecoat and Prestige paints directly from the manufacturer.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;
