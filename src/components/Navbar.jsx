import React from "react";
import logo from "../assets/kayze_logo.jpg";
import { navLinks } from "../constants";

const Navbar = ({ scrolled, menuOpen, setMenuOpen, scrollTo }) => {
  return (
    <nav className={`kc-nav${scrolled ? " scrolled" : ""}`}>
      <div className="kc-nav-inner">
        <div className="kc-logo" onClick={() => scrollTo("home")}>
          <img src={logo} alt="Kayze Concept Logo" className="kc-logo-img" />
          <div>
            <span className="kc-logo-name">Kayze Concept</span>
            <span className="kc-logo-sub">Building Materials</span>
          </div>
        </div>
        <ul className={`kc-nav-links${menuOpen ? " open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link}>
              <button onClick={() => scrollTo(link.toLowerCase())} className="kc-nav-link">
                {link}
              </button>
            </li>
          ))}
        </ul>
        <button className="kc-hamburger" onClick={() => setMenuOpen((v) => !v)} aria-label="Menu">
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
