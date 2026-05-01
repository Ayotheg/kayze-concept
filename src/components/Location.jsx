import React from "react";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import { MAPS_URL } from "../constants";
import { motion } from "framer-motion";

const Location = () => {
  return (
    <section id="location" className="kc-section kc-location">
      <div className="kc-container">
        <motion.div 
          className="kc-section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="kc-section-eyebrow">Visit Us</span>
          <h2>Find Our Store</h2>
          <div className="kc-section-line" />
          <p className="kc-section-sub">Experience our full range of premium building materials in person</p>
        </motion.div>
        
        <div className="kc-location-grid">
          <motion.div 
            className="kc-location-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="kc-location-card">
              <div className="kc-location-card-header">
                <MapPin size={28} color="white" />
                <h3>Our Location</h3>
              </div>
              <p>18, Old Oko Oba Road, Orile-Agege</p>
              <p>Powerline Bus-Stop, Opposite Bokku Mart</p>
              <p>Lagos, Nigeria</p>
              <a href={MAPS_URL} target="_blank" rel="noreferrer" className="kc-btn kc-btn-outline kc-btn-sm">
                <Navigation size={16} /> Get Directions
              </a>
            </div>
            <div className="kc-hours-card">
              <div className="kc-hours-header">
                <Clock size={24} color="#ea580c" />
                <h3>Store Hours</h3>
              </div>
              <div className="kc-hours-row">
                <span>Monday – Saturday</span>
                <strong className="kc-orange">8:00 AM – 7:00 PM</strong>
              </div>
              <div className="kc-hours-row">
                <span>Sunday</span>
                <strong className="kc-orange">1:00 PM – 4:00 PM</strong>
              </div>
              <div className="kc-hours-phone">
                <Phone size={24} color="#ea580c" />
                <div>
                  <span>Contact Line</span>
                  <a href={`tel:+2348033227792`}>+234 803 322 7792</a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="kc-map-wrap"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <iframe
              title="Kayze Concept Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.1!2d3.2938!3d6.5927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d6b!2s18%20Old%20Oko%20Oba%20Road%2C%20Orile-Agege%2C%20Lagos!5e0!3m2!1sen!2sng!4v1"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a href={MAPS_URL} target="_blank" rel="noreferrer" className="kc-map-open-btn">
              <MapPin size={16} /> Open in Google Maps
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
