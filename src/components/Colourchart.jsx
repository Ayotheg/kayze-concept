import React from "react";
import { ZoomIn, MessageSquare, Palette } from "lucide-react";
import { colourChartImages, WHATSAPP_URL } from "../constants";
import { motion } from "framer-motion";

const ColourChart = ({ setLightboxImg }) => {
  return (
    <section id="colours" className="kc-section kc-colours">
      <div className="kc-container">

        {/* Section header */}
        <motion.div
          className="kc-section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="kc-section-eyebrow">Prestige Paints</span>
          <h2>Official Colour Charts</h2>
          <div className="kc-section-line" />
          <p className="kc-section-sub">
            Browse our full range of available paint colours. Tap any chart to
            zoom in — every shade comes with its colour code for easy ordering.
          </p>
        </motion.div>

        {/* Tip banner */}
        <motion.div
          className="kc-colour-tip"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <span className="kc-colour-tip-icon">💡</span>
          <p>
            Found your colour? Note the <strong>code and name</strong> (e.g.{" "}
            <em>0013 Midnight Blue</em>) then{" "}
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              WhatsApp us
            </a>{" "}
            and we'll confirm stock and pricing right away.
          </p>
        </motion.div>

        {/* Chart grid */}
        <div className="kc-colour-grid">
          {colourChartImages.map((chart, i) => (
            <motion.div
              key={i}
              className="kc-colour-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setLightboxImg(chart.src)}
            >
              {/* Image */}
              <div className="kc-colour-img-wrap">
                <img src={chart.src} alt={chart.brand + " " + chart.label + " colour chart"} />
                <div className="kc-colour-overlay">
                  <ZoomIn size={44} strokeWidth={1.8} />
                  <span>Tap to zoom &amp; browse colours</span>
                </div>
                <div className="kc-colour-page-badge">
                  <Palette size={12} /> {chart.badge}
                </div>
              </div>

              {/* Card footer */}
              <div className="kc-colour-label">
                <div className="kc-colour-label-main">
                  <strong>{chart.label}</strong>
                  <span className="kc-colour-zoom-hint">
                    <ZoomIn size={14} /> Tap to zoom
                  </span>
                </div>
                <p className="kc-colour-label-desc">{chart.description}</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="kc-colour-order-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  <MessageSquare size={14} /> Order this colour
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="kc-colour-cta"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="kc-colour-cta-text">
            <h3>Need a shade that's not on the chart?</h3>
            <p>
              Additional colours are available on demand. We can also produce
              customised shades to your specification — just ask us.
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="kc-btn kc-btn-whatsapp"
          >
            <MessageSquare size={18} />
            Ask About a Colour
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default ColourChart;