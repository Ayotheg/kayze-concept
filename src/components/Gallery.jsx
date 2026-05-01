import React from "react";
import { Search } from "lucide-react";
import { galleryImages } from "../constants";
import { motion } from "framer-motion";

const Gallery = ({ setLightboxImg }) => {
  return (
    <section id="gallery" className="kc-section kc-gallery">
      <div className="kc-container">
        <motion.div 
          className="kc-section-header"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <span className="kc-section-eyebrow">Our Store</span>
          <h2>Gallery</h2>
          <div className="kc-section-line" />
          <p className="kc-section-sub">A glimpse into our well-stocked building materials showroom</p>
        </motion.div>
        
        <motion.div 
          className="kc-gallery-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {galleryImages.map((img, i) => (
            <motion.div 
              key={i} 
              className="kc-gallery-item" 
              onClick={() => setLightboxImg(img)}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={img} alt={`Store gallery ${i + 1}`} />
              <div className="kc-gallery-overlay">
                <Search size={40} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
