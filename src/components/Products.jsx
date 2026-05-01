import React from "react";
import * as LucideIcons from "lucide-react";
import { WHATSAPP_URL, products } from "../constants";
import { motion } from "framer-motion";

const Products = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="products" className="kc-section kc-products">
      <div className="kc-container">
        <motion.div 
          className="kc-section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="kc-section-eyebrow">Our Catalog</span>
          <h2>Our Products</h2>
          <div className="kc-section-line" />
          <p className="kc-section-sub">Quality building materials for every project need</p>
        </motion.div>
        
        <motion.div 
          className="kc-products-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {products.map((p, i) => {
            const Icon = LucideIcons[p.icon];
            return (
              <motion.div key={i} className="kc-product-card" variants={cardVariants}>
                <div className={`kc-product-icon-wrap bg-gradient-to-br ${p.color}`}>
                  <Icon className="kc-product-icon" size={64} color="white" />
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="kc-product-cta">
                  Order via WhatsApp →
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
