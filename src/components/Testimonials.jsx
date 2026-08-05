import React from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { testimonials } from "../constants";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Testimonials = () => {
  const avgRating =
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;

  return (
    <section id="testimonials" className="kc-section kc-testimonials">
      <div className="kc-container">
        <motion.div
          className="kc-section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="kc-section-eyebrow">Customer Reviews</span>
          <h2>What Our Customers Say</h2>
          <div className="kc-section-line" />
          <div className="kc-testimonials-rating">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={20}
                fill={i < Math.round(avgRating) ? "#f59e0b" : "none"}
                color="#f59e0b"
              />
            ))}
            <span>
              {avgRating.toFixed(1)} out of 5 &middot; {testimonials.length}{" "}
              {testimonials.length === 1 ? "review" : "reviews"} on Google
            </span>
          </div>
        </motion.div>

        <motion.div
          className="kc-testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.map((t, i) => (
            <motion.div key={i} className="kc-testimonial-card" variants={itemVariants}>
              <Quote size={24} color="#2563eb" className="kc-testimonial-quote-icon" />
              <div className="kc-testimonial-stars">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={16} fill={s < t.rating ? "#f59e0b" : "none"} color="#f59e0b" />
                ))}
              </div>
              <p className="kc-testimonial-text">"{t.text}"</p>
              <div className="kc-testimonial-author">
                <span className="kc-testimonial-name">{t.name}</span>
                <span className="kc-testimonial-source">Google Review</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
