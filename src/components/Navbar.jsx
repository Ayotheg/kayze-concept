import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageSquare, Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";
import logo from "../assets/kayze_logo.jpg";
import { navLinks, WHATSAPP_URL } from "../constants";

const EASE = [0.22, 1, 0.36, 1];
const panelVariants = {
  hidden:  { opacity: 0, y: -10, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.32, ease: EASE, staggerChildren: 0.035, delayChildren: 0.06 } },
  exit:    { opacity: 0, y: -8, scale: 0.98, transition: { duration: 0.18 } },
};
const linkVariants = {
  hidden:  { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: EASE } },
};

const Navbar = ({ scrolled, menuOpen, setMenuOpen, scrollTo, activeSection }) => {
  // Lock page scroll + close on Escape while the mobile menu is open
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen, setMenuOpen]);

  return (
    <>
    <nav
      className={`kc-nav${scrolled ? " scrolled" : ""}${menuOpen ? " menu-open" : ""}`}
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

        {/* Desktop nav links */}
        <ul className="kc-nav-links" aria-label="Site sections">
          {navLinks.map((link) => {
            const id = link.toLowerCase();
            const isActive = activeSection === id;
            return (
              <li key={link}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`kc-nav-link${isActive ? " active" : ""}`}
                  aria-current={isActive ? "true" : undefined}
                >
                  {link}
                </button>
              </li>
            );
          })}
        </ul>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer noopener"
          className="kc-nav-cta"
          aria-label="Order on WhatsApp"
        >
          <span className="kc-nav-cta-dot" aria-hidden="true" />
          Order now
        </a>

        {/* Mobile menu button — two bars that morph into an X */}
        <button
          className={`kc-menu-btn${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="kc-mobile-menu"
        >
          <span className="kc-menu-btn-bar" />
          <span className="kc-menu-btn-bar" />
        </button>
      </div>
    </nav>

      {/* Mobile dropdown — rendered outside <nav> because the nav's
          backdrop-filter would otherwise trap position:fixed children */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="backdrop"
            className="kc-mobile-backdrop"
            onClick={() => setMenuOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            aria-hidden="true"
          />
        )}
        {menuOpen && (
          <motion.div
            key="panel"
            id="kc-mobile-menu"
            className="kc-mobile-menu"
            role="dialog"
            aria-label="Site menu"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ul className="kc-mobile-links">
              {navLinks.map((link, i) => {
                const id = link.toLowerCase();
                const isActive = activeSection === id;
                return (
                  <motion.li key={link} variants={linkVariants}>
                    <button
                      onClick={() => scrollTo(id)}
                      className={`kc-mobile-link${isActive ? " active" : ""}`}
                      aria-current={isActive ? "true" : undefined}
                    >
                      <span className="kc-mobile-link-num">{String(i + 1).padStart(2, "0")}</span>
                      <span className="kc-mobile-link-text">{link}</span>
                      <ArrowUpRight size={18} className="kc-mobile-link-arrow" aria-hidden="true" />
                    </button>
                  </motion.li>
                );
              })}
            </ul>

            <motion.div className="kc-mobile-menu-footer" variants={linkVariants}>
              <div className="kc-mobile-menu-actions">
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer noopener" className="kc-btn kc-btn-whatsapp">
                  <MessageSquare size={18} aria-hidden="true" /> Order on WhatsApp
                </a>
                <a href="tel:+2348033227792" className="kc-btn kc-mobile-call" aria-label="Call +234 803 322 7792">
                  <Phone size={18} aria-hidden="true" /> Call
                </a>
              </div>
              <div className="kc-mobile-menu-meta">
                <span><MapPin size={14} aria-hidden="true" /> 18 Old Oko Oba Road, Orile-Agege</span>
                <span><Clock size={14} aria-hidden="true" /> Mon–Sat 8AM–7PM · Sun 1PM–4PM</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
