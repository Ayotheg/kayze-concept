import React from "react";
import { Palette, Wallpaper, Wrench, Zap, LayoutGrid, Paintbrush, ArrowUpRight } from "lucide-react";
import { WHATSAPP_URL, products, productPhotos, storePhotos } from "../constants";
import { motion } from "framer-motion";

// Direct icon map — avoids wildcard import resolution issues
const ICON_MAP = {
  Palette,
  Wallpaper,
  Wrench,
  Zap,
  LayoutGrid,
  Paintbrush,
};

// Colour map — converts "from-blue-600" → actual hex
const COLOR_MAP = {
  "from-blue-600":   "#2563eb",
  "from-purple-600": "#9333ea",
  "from-orange-600": "#ea580c",
  "from-yellow-600": "#ca8a04",
  "from-green-600":  "#16a34a",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Products = () => {
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
            const Icon  = ICON_MAP[p.icon];
            const color = COLOR_MAP[p.color.split(" ")[0]] ?? "#2563eb";
            const photo = storePhotos[productPhotos[p.title]];

            return (
              <motion.div key={i} className="kc-product-card" variants={cardVariants}>
                {photo ? (
                  <div className="kc-product-photo">
                    <img src={photo.src} alt={photo.alt} loading="lazy" width="960" height="1280" />
                    {Icon && (
                      <span className="kc-product-photo-badge" style={{ background: color }}>
                        <Icon size={20} color="white" strokeWidth={2} aria-hidden="true" />
                      </span>
                    )}
                  </div>
                ) : (
                  <div
                    className="kc-product-icon-wrap"
                    style={{ background: `${color}18` }}
                  >
                    {Icon
                      ? <Icon size={64} color={color} strokeWidth={1.5} className="kc-product-icon" />
                      : <span style={{ fontSize: "3rem" }}>📦</span>
                    }
                  </div>
                )}
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="kc-product-cta"
                >
                  <span>Order via WhatsApp</span>
                  <ArrowUpRight size={18} aria-hidden="true" />
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