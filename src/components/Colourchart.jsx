import { useRef, useState } from "react";
import { ZoomIn, MessageSquare, ChevronLeft, ChevronRight, Hand } from "lucide-react";
import { motion } from "framer-motion";
import { colourCards, WHATSAPP_URL } from "../constants";

/* One brand's colour card: a swipeable booklet that starts on the front
   cover and pages through to the inside charts. Native scroll-snap does the
   swiping on touch; arrows + dots drive it on desktop. */
const ColourBook = ({ card, setLightboxImg, delay }) => {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);

  const slides = [
    { src: card.cover.src, alt: card.cover.alt, label: "Front cover", isCover: true },
    ...card.pages.map((p) => ({ src: p.src, alt: `${card.brand} ${p.label} colour chart`, label: p.label, description: p.description })),
  ];

  const goTo = (i) => {
    const el = trackRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(slides.length - 1, i));
    el.scrollTo({ left: clamped * el.clientWidth, behavior: "smooth" });
  };

  const onScroll = () => {
    const el = trackRef.current;
    if (el) setIndex(Math.round(el.scrollLeft / el.clientWidth));
  };

  const current = slides[index] ?? slides[0];

  return (
    <motion.article
      className={`kc-book kc-book-${card.tone}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
    >
      <header className="kc-book-head">
        <div>
          <h3>{card.brand}</h3>
          <em>{card.tagline}</em>
        </div>
        <span className="kc-book-count" aria-live="polite">
          {index + 1} / {slides.length}
        </span>
      </header>

      <div className="kc-book-stage">
        <div
          className="kc-book-track"
          ref={trackRef}
          onScroll={onScroll}
          role="region"
          aria-roledescription="carousel"
          aria-label={`${card.brand} colour card`}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") goTo(index + 1);
            if (e.key === "ArrowLeft") goTo(index - 1);
          }}
        >
          {slides.map((s, i) => (
            <button
              key={s.src}
              className={`kc-book-slide${s.isCover ? " is-cover" : ""}`}
              onClick={() => setLightboxImg(s.src)}
              aria-label={`${s.label} — tap to zoom`}
              aria-hidden={i !== index ? "true" : undefined}
              tabIndex={i === index ? 0 : -1}
            >
              <img src={s.src} alt={s.alt} loading="lazy" draggable="false" />
              <span className="kc-book-zoom" aria-hidden="true"><ZoomIn size={16} /></span>
            </button>
          ))}
        </div>

        {index === 0 && (
          <span className="kc-book-hint" aria-hidden="true">
            <Hand size={14} /> Swipe
          </span>
        )}

        <button className="kc-book-arrow prev" onClick={() => goTo(index - 1)} disabled={index === 0} aria-label="Previous page">
          <ChevronLeft size={20} />
        </button>
        <button className="kc-book-arrow next" onClick={() => goTo(index + 1)} disabled={index === slides.length - 1} aria-label="Next page">
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="kc-book-dots" role="tablist" aria-label="Pages">
        {slides.map((s, i) => (
          <button
            key={s.src}
            role="tab"
            aria-selected={i === index}
            aria-label={s.label}
            className={i === index ? "active" : ""}
            onClick={() => goTo(i)}
          />
        ))}
      </div>

      <div className="kc-book-caption">
        <strong>{current.label}</strong>
        <p>{current.isCover ? card.intro : current.description}</p>
        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer noopener" className="kc-book-order" aria-label={`Order a ${card.brand} colour on WhatsApp`}>
          <MessageSquare size={16} aria-hidden="true" />
          <span className="long">Order a {card.brand} colour</span>
          <span className="short">Order</span>
        </a>
      </div>
    </motion.article>
  );
};

const ColourChart = ({ setLightboxImg }) => {
  return (
    <section id="colours" className="kc-section kc-colours">
      <div className="kc-container">

        <motion.div
          className="kc-section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="kc-section-eyebrow">Colour Cards</span>
          <h2>Official Colour Charts</h2>
          <div className="kc-section-line" />
          <p className="kc-section-sub">
            Swipe through the Prestige and Finecoat colour cards, from the front
            cover to every page. Tap a page to zoom in on the colour codes.
          </p>
        </motion.div>

        <div className="kc-colour-tip">
          <span className="kc-colour-tip-icon">💡</span>
          <p>
            Found your colour? Note the <strong>code and name</strong> (e.g.{" "}
            <em>0013 Midnight Blue</em>) then{" "}
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              WhatsApp us
            </a>{" "}
            and we'll confirm stock and pricing right away.
          </p>
        </div>

        <div className="kc-books">
          {colourCards.map((card, i) => (
            <ColourBook key={card.brand} card={card} setLightboxImg={setLightboxImg} delay={i * 0.12} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ColourChart;
