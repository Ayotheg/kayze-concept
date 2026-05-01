import React from "react";
import { Phone, MapPin } from "lucide-react";
import logo from "../assets/kayze_logo.jpg";
import { navLinks, MAPS_URL } from "../constants";

const Footer = ({ scrollTo }) => {
  return (
    <footer className="kc-footer">
      <div className="kc-container">
        <div className="kc-footer-grid">
          <div className="kc-footer-brand">
            <div className="kc-footer-logo">
              <img src={logo} alt="Kayze Concept" />
              <div>
                <span>Kayze Concept</span>
                <small>Building Materials</small>
              </div>
            </div>
            <p>Your trusted partner for quality paints, wallpapers, nails, electrodes, and building materials in Lagos since 2014.</p>
          </div>
          <div className="kc-footer-col">
            <h4>Explore</h4>
            <ul>
              {navLinks.map((l) => (
                <li key={l}>
                  <button onClick={() => scrollTo(l.toLowerCase())}>{l}</button>
                </li>
              ))}
            </ul>
          </div>
          <div className="kc-footer-col">
            <h4>Contact</h4>
            <p>
              <Phone size={16} style={{ display: 'inline', marginRight: '8px' }} /> 
              <a href="tel:+2348033227792">+234 803 322 7792</a>
            </p>
            <p>
              <MapPin size={16} style={{ display: 'inline', marginRight: '8px' }} /> 
              18, Old Oko Oba Road, Agege, Lagos
            </p>
            <a href={MAPS_URL} target="_blank" rel="noreferrer" style={{ fontSize: '0.85rem', color: 'var(--orange-light)' }}>
              Open in Google Maps →
            </a>
          </div>
          <div className="kc-footer-col">
            <h4>Hours</h4>
            <p>
              <strong>Mon – Sat</strong>
              <br />
              8:00 AM – 7:00 PM
            </p>
            <p>
              <strong>Sunday</strong>
              <br />
              1:00 PM – 4:00 PM
            </p>
          </div>
        </div>
        <div className="kc-footer-bottom">
          <p>© 2026 Kayze Concept. All rights reserved.</p>
          <p>
            Partnering with <span className="kc-brand-finecoat">Finecoat</span> &amp; <span className="kc-brand-prestige">Prestige</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
