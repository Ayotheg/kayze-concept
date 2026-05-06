import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, MessageSquare, ArrowLeft, Home } from "lucide-react";
import { WHATSAPP_URL } from "../constants";
import logo from "../assets/kayze_logo.jpg";

const NotFound = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(10);

  // Auto-redirect to home after 10 seconds
  useEffect(() => {
    if (count === 0) { navigate("/"); return; }
    const t = setTimeout(() => setCount((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [count, navigate]);

  return (
    <div className="kc-404-root">

      {/* Minimal nav */}
      <nav className="kc-404-nav">
        <div className="kc-404-nav-inner">
          <div className="kc-404-logo" onClick={() => navigate("/")}>
            <img src={logo} alt="Kayze Concept" />
            <div>
              <span>Kayze Concept</span>
              <small>Building Materials</small>
            </div>
          </div>
        </div>
      </nav>

      <main className="kc-404-main">

        {/* Animated background blobs */}
        <div className="kc-404-blob kc-404-blob-1" aria-hidden="true" />
        <div className="kc-404-blob kc-404-blob-2" aria-hidden="true" />

        <div className="kc-404-card">

          {/* Big 404 */}
          <div className="kc-404-number" aria-hidden="true">
            <span>4</span>
            <span className="kc-404-zero">
              <img src={logo} alt="" />
            </span>
            <span>4</span>
          </div>

          <h1 className="kc-404-title">Page Not Found</h1>
          <p className="kc-404-desc">
            Looks like this page got lost on the way to the store. The page you're
            looking for doesn't exist or may have been moved.
          </p>

          {/* Countdown */}
          <div className="kc-404-countdown">
            <div
              className="kc-404-progress"
              style={{ width: `${(count / 10) * 100}%` }}
            />
            <span>Redirecting you home in <strong>{count}s</strong></span>
          </div>

          {/* CTAs */}
          <div className="kc-404-btns">
            <button
              className="kc-404-btn kc-404-btn-primary"
              onClick={() => navigate("/")}
            >
              <Home size={18} /> Go to Homepage
            </button>
            <button
              className="kc-404-btn kc-404-btn-ghost"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft size={18} /> Go Back
            </button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="kc-404-btn kc-404-btn-whatsapp"
            >
              <MessageSquare size={18} /> WhatsApp Us
            </a>
          </div>

          {/* Quick links */}
          <div className="kc-404-links">
            <p>Or jump to a section:</p>
            <div className="kc-404-anchors">
              {["Products", "Colours", "Brands", "Location", "Contact"].map((s) => (
                <a key={s} href={`/#${s.toLowerCase()}`} className="kc-404-anchor">
                  {s}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Address strip */}
        <div className="kc-404-address">
          <MapPin size={16} />
          <span>18, Old Oko Oba Road, Powerline Bus-Stop, Orile-Agege, Lagos</span>
        </div>

      </main>
    </div>
  );
};

export default NotFound;