import { MessageSquare, Navigation } from "lucide-react";
import { motion } from "framer-motion";
import { WHATSAPP_URL, MAPS_URL, storePhotos } from "../constants";

// Full-bleed photo band between "Why Choose Us" and the reviews —
// the shop front at golden hour, with a short visit/order prompt.
const StoreBanner = () => {
  const strip = [storePhotos.brushCloseUp, storePhotos.concreteNails, storePhotos.padlocks];

  return (
    <section className="kc-store-banner" aria-label="Visit or order from our store">
      <img
        src={storePhotos.rollers.src}
        alt=""
        role="presentation"
        className="kc-store-banner-bg"
        loading="lazy"
      />
      <div className="kc-store-banner-overlay" aria-hidden="true" />

      <div className="kc-container kc-store-banner-inner">
        <motion.div
          className="kc-store-banner-text"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="kc-section-eyebrow">On Old Oko Oba Road</span>
          <h2>From the first coat to the final lock</h2>
          <p>
            Brushes, rollers, nails, padlocks and every shade of paint — all under one
            roof at Powerline Bus-Stop. Drop by, or send us your list on WhatsApp and
            we'll have it ready.
          </p>
          <div className="kc-store-banner-btns">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer noopener" className="kc-btn kc-btn-whatsapp">
              <MessageSquare size={18} aria-hidden="true" /> Send your list
            </a>
            <a href={MAPS_URL} target="_blank" rel="noreferrer noopener" className="kc-btn kc-btn-outline">
              <Navigation size={18} aria-hidden="true" /> Get directions
            </a>
          </div>
        </motion.div>

        <div className="kc-store-banner-strip" aria-hidden="true">
          {strip.map((ph, i) => (
            <motion.img
              key={ph.src}
              src={ph.src}
              alt=""
              loading="lazy"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * i + 0.2, duration: 0.6 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoreBanner;
