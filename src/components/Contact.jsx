import React from "react";
import { MessageSquare, Phone, Clock, MapPin, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="kc-section kc-contact">
      <div className="kc-container">
        <motion.div 
          className="kc-section-header kc-header-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="kc-section-eyebrow" style={{ color: 'var(--orange-light)' }}>Get In Touch</span>
          <h2 style={{ color: 'white' }}>Contact Us</h2>
          <div className="kc-section-line kc-line-orange" />
          <p style={{ color: 'rgba(255,255,255,0.7)' }}>Ready to start your project? Reach out to us for orders and inquiries.</p>
        </motion.div>
        
        <div className="kc-contact-channels">
          <motion.a 
            href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="kc-channel kc-channel-whatsapp"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(37,211,102,0.3)" }}
          >
            <MessageSquare size={32} />
            <div>
              <span>WhatsApp</span>
              <strong>+234 803 322 7792</strong>
              <p>Chat with us for instant product info and pricing.</p>
            </div>
          </motion.a>
          <motion.a 
            href="tel:+2348033227792" className="kc-channel kc-channel-call"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(37,99,235,0.3)" }}
          >
            <Phone size={32} />
            <div>
              <span>Call Us</span>
              <strong>+234 803 322 7792</strong>
              <p>Speak directly with our experts for bulk orders.</p>
            </div>
          </motion.a>
        </div>

        <motion.div 
          className="kc-contact-info-row"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
        >
          <motion.div className="kc-cinfo" variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
            <Clock size={32} color="#f97316" />
            <h4>Opening Hours</h4>
            <p>Mon – Sat: 8AM – 7PM</p>
            <p>Sunday: 1PM – 4PM</p>
          </motion.div>
          <motion.div className="kc-cinfo" variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
            <MapPin size={32} color="#f97316" />
            <h4>Visit Our Store</h4>
            <p>18, Old Oko Oba Road, Orile-Agege,</p>
            <p>Powerline Bus-Stop, Lagos</p>
          </motion.div>
          <motion.div className="kc-cinfo" variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
            <MessageCircle size={32} color="#f97316" />
            <h4>Fast Response</h4>
            <p>We reply to WhatsApp messages within minutes during business hours</p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="kc-order-cta"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h3>Ready to Transform Your Space?</h3>
          <p>
            From premium paints to designer wallpapers, we have everything you need to finish your building project with style and quality.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="kc-btn kc-btn-orange-lg">
            <MessageSquare size={20} /> Start Your Order Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
