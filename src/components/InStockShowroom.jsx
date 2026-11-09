import { useEffect, useRef } from "react";
import { alsoInStock, storePhotos, WHATSAPP_URL } from "../constants";

/* "Showroom" marquee: a slow, continuous glide that stays inside the page
   width. Each card is spotlit by its distance from the centre — full size and
   brightness in the middle, gently dimming and shrinking towards the edges —
   so items drift in and out instead of being cut off by the screen. */
const SPEED = 18;          // px per second — slow, browsing pace
const EDGE_OPACITY = 0.12; // how faint a card gets at the very edge
const EDGE_SCALE = 0.86;   // how small a card gets at the very edge
const SPOTLIGHT = 0.22;    // share of the half-width that stays fully lit

const InStockShowroom = () => {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const paused = useRef(false);

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const items = [...track.querySelectorAll(".kc-showroom-item")];
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let offset = 0;
    let last = performance.now();
    let raf;

    const spotlight = () => {
      const vb = viewport.getBoundingClientRect();
      const centre = vb.left + vb.width / 2;
      const half = vb.width / 2;
      for (const el of items) {
        const r = el.getBoundingClientRect();
        // 0 at the centre → 1 at the viewport edge, with a fully-lit
        // "spotlight" zone in the middle before the slow fall-off begins
        const raw = Math.abs(r.left + r.width / 2 - centre) / half;
        const d = Math.min(1, Math.max(0, (raw - SPOTLIGHT) / (1 - SPOTLIGHT)));
        const ease = d * d * (3 - 2 * d); // smoothstep: long, soft fall-off
        el.style.opacity = String(1 - (1 - EDGE_OPACITY) * ease);
        el.style.transform = `scale(${1 - (1 - EDGE_SCALE) * ease})`;
      }
    };

    const tick = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (!paused.current && !reduceMotion) {
        offset += SPEED * dt;
        const loop = track.scrollWidth / 2; // list is rendered twice
        if (offset >= loop) offset -= loop;
        track.style.transform = `translate3d(${-offset}px,0,0)`;
      }
      spotlight();
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const pause = (v) => () => { paused.current = v; };

  return (
    <div
      className="kc-showroom"
      ref={viewportRef}
      onMouseEnter={pause(true)}
      onMouseLeave={pause(false)}
      onFocus={pause(true)}
      onBlur={pause(false)}
      onTouchStart={pause(true)}
      onTouchEnd={() => setTimeout(() => { paused.current = false; }, 2500)}
    >
      <div className="kc-showroom-track" ref={trackRef}>
        {[0, 1].map((copy) =>
          alsoInStock.map(({ photo, label }) => {
            const ph = storePhotos[photo];
            const dup = copy === 1;
            return (
              <a
                key={`${copy}-${photo}`}
                className="kc-showroom-item"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={dup ? undefined : `Ask about ${label} on WhatsApp`}
                aria-hidden={dup ? "true" : undefined}
                tabIndex={dup ? -1 : undefined}
              >
                <img src={ph.src} alt={dup ? "" : ph.alt} loading="lazy" draggable="false" />
                <span>{label}</span>
              </a>
            );
          })
        )}
      </div>
    </div>
  );
};

export default InStockShowroom;
