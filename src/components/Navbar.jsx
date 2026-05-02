import React from "react";
import logo from "../assets/kayze_logo.jpg";
import { navLinks } from "../constants";

const Navbar = ({ scrolled, menuOpen, setMenuOpen, scrollTo, activeSection }) => {
  return (
    <nav
      className={`kc-nav${scrolled ? " scrolled" : ""}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="kc-nav-inner">
        {/* Logo — landmark for screen readers & crawlers */}
        <div
          className="kc-logo"
          onClick={() => scrollTo("home")}
          role="link"
          tabIndex={0}
          aria-label="Kayze Concept — go to homepage"
          onKeyDown={(e) => e.key === "Enter" && scrollTo("home")}
        >
          <img
            src={logo}
            alt="Kayze Concept logo"
            className="kc-logo-img"
            width="44"
            height="44"
          />
          <div>
            <span className="kc-logo-name">Kayze Concept</span>
            <span className="kc-logo-sub">Building Materials</span>
          </div>
        </div>

        {/* Nav links */}
        <ul
          className={`kc-nav-links${menuOpen ? " open" : ""}`}
          role="menubar"
          aria-label="Site sections"
        >
          {navLinks.map((link) => {
            const id = link.toLowerCase();
            const isActive = activeSection === id;
            return (
              <li key={link} role="none">
                <button
                  onClick={() => scrollTo(id)}
                  className={`kc-nav-link${isActive ? " active" : ""}`}
                  role="menuitem"
                  aria-current={isActive ? "true" : undefined}
                  aria-label={`Go to ${link} section`}
                >
                  {link}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          className={`kc-hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="kc-nav-links"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;