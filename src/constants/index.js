// Import store images
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";

// Import Gmaps screenshots
import gmaps1 from "../assets/GMAPS1.jpg";
import gmaps2 from "../assets/GMAPS2.jpg";
import gmaps3 from "../assets/GMAPS3.jpg";
import gmaps4 from "../assets/GMAPS4.jpg";

// ─────────────────────────────────────────────────────────────
// COLOUR CHART IMAGES
// Place these two files in src/assets/:
//   COLOUR_CHART_TEXCOAT.jpg
//   COLOUR_CHART_GLOSS_EMUL.jpg
// ─────────────────────────────────────────────────────────────
import colourTexcoat   from "../assets/chart1.jpg";
import colourGlossEmul from "../assets/chart2.jpg";

// Import logo
import logo from "../assets/kayze_logo.jpg";

export const WHATSAPP_NUMBER = "2348033227792";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const MAPS_URL = "https://maps.app.goo.gl/zxz6Lf25VCo3fwpr6?g_st=ic";

// "Colours" inserted between Brands and Gallery
export const navLinks = [
  "Home",
  "About",
  "Products",
  "Brands",
  "Colours",
  "Gallery",
  "Location",
];

// ─────────────────────────────────────────────────────────────
// IN-STORE PHOTOS (served from /public)
// ─────────────────────────────────────────────────────────────
export const storePhotos = {
  brushesAndPaint: { src: "/new-1.jpg", alt: "Paint brushes, rollers and Finecoat emulsion buckets at the Kayze Concept storefront" },
  concreteNails:   { src: "/new-3.jpg", alt: "Boxes of concrete nails in assorted sizes stocked at Kayze Concept" },
  scrapersBrooms:  { src: "/new-4.jpg", alt: "Wall scrapers and broom handles hanging in the Kayze Concept shop" },
  rollers:         { src: "/new-5.jpg", alt: "Paint rollers hanging at the Kayze Concept shop front on Old Oko Oba Road" },
  brushCloseUp:    { src: "/new-6.jpg", alt: "Close-up of pure-bristle paint brushes in every size" },
  colourBoard:     { src: "/new-7.jpg", alt: "Finecoat emulsion and gloss enamel colour board on display in store" },
  padlocks:        { src: "/new-8.jpg", alt: "Lizam padlocks in assorted sizes on the display board" },
  wallpaperRolls:  { src: img3,         alt: "Box of wallpaper rolls in stock at Kayze Concept" },
  paintStack:      { src: "/paint-new.jpg",      alt: "Stacks of Satin Finish, Acee and Prestige emulsion paint buckets" },
  electrodes:      { src: "/electrode.jpg",      alt: "Boxes of E6013 welding electrodes in stock" },
  finecoatPaint:   { src: "/finecoat_paint.jpg", alt: "Finecoat acrylic emulsion paint buckets" },
  prestigePaint:   { src: "/prestige.jpg",       alt: "Prestige standard emulsion paint buckets" },
  satinPaint:      { src: "/satin.jpg",          alt: "Satin Finish anti-fungal paint buckets" },
  doorHandles:     { src: "/door-key.jpg",       alt: "Esteem and Maximus door handle boxes" },
  flashBand:       { src: "/flash-band.jpg",     alt: "Rolls of aluminium flash band roofing tape" },
  glue:            { src: "/glue.jpg",           alt: "Top Bond adhesive tubs and spray paint cans" },
  bulkNails:       { src: "/naik.jpg",           alt: "Sacks of nails sold in bulk" },
  maskingTape:     { src: "/paper-tape.jpg",     alt: "Rolls of masking and paper tape" },
  handSaws:        { src: "/saw.jpg",            alt: "Target 18-inch hand saws" },
  insecticide:     { src: "/sniper-insec(1).jpg", alt: "Sniper insecticide bottles" },
  sprayPaint:      { src: "/spray-paint.jpg",    alt: "Pico spray paint cans and screwdrivers" },
  prestigeBucket:  { src: "/new-paint.jpg",      alt: "20-litre bucket of Prestige Standard Emulsion paint" },
  finecoatBucket:  { src: "/prs_2.jpg",          alt: "20-litre bucket of Finecoat Acrylic Emulsion in Brilliant White" },
};

// Featured product on each brand card
export const brandFeatures = {
  Finecoat: { photo: "finecoatBucket", name: "Finecoat Acrylic Emulsion", size: "20 L · Brilliant White & more" },
  Prestige: { photo: "prestigeBucket", name: "Prestige Standard Emulsion", size: "20 L · No added lead" },
};

// "Also in stock" rail under the product grid
export const alsoInStock = [
  { photo: "doorHandles", label: "Door handles & locks" },
  { photo: "satinPaint",  label: "Satin finish paint" },
  { photo: "maskingTape", label: "Masking & paper tape" },
  { photo: "flashBand",   label: "Flash band" },
  { photo: "glue",        label: "Glue & adhesives" },
  { photo: "handSaws",    label: "Hand saws" },
  { photo: "sprayPaint",  label: "Spray paint & screwdrivers" },
  { photo: "bulkNails",   label: "Nails in bulk" },
  { photo: "insecticide", label: "Insecticides" },
];

export const products = [
  {
    icon: "Palette",
    title: "Paints",
    desc: "Premium interior and exterior paints from top brands including Finecoat and Prestige. Available in all finishes.",
    color: "from-blue-600 to-blue-400",
  },
  {
    icon: "Wallpaper",
    title: "Wallpapers",
    desc: "Wide selection of modern and classic wallpaper designs for every style and budget.",
    color: "from-purple-600 to-purple-400",
  },
  {
    icon: "Wrench",
    title: "Nails",
    desc: "Durable construction nails in various sizes for all building applications.",
    color: "from-orange-600 to-orange-400",
  },
  {
    icon: "Zap",
    title: "Electrodes",
    desc: "High-quality welding electrodes for professional and industrial use.",
    color: "from-yellow-600 to-yellow-400",
  },
  {
    icon: "LayoutGrid",
    title: "Building Accessories",
    desc: "Padlocks, fittings and a complete range of finishing materials and accessories for every project.",
    color: "from-green-600 to-green-400",
  },
  {
    icon: "Paintbrush",
    title: "Painting Tools",
    desc: "Pure-bristle brushes, rollers, scrapers and trays — everything to get paint on the wall cleanly.",
    color: "from-blue-600 to-blue-400",
  },
];

// Product card photos, keyed by product title. Products without a
// photo fall back to their icon.
export const productPhotos = {
  "Paints":               "paintStack",
  "Electrodes":           "electrodes",
  "Wallpapers":           "wallpaperRolls",
  "Nails":                "concreteNails",
  "Building Accessories": "padlocks",
  "Painting Tools":       "brushCloseUp",
};

export const whyUs = [
  { icon: "ShieldCheck", title: "Trusted Supplier", desc: "Years of experience serving Lagos with reliable and authentic building materials." },
  { icon: "CheckCircle", title: "Quality Products", desc: "Only genuine products from authorized manufacturers and trusted brands." },
  { icon: "CircleDollarSign", title: "Affordable Pricing", desc: "Competitive prices with great value for money on all our products." },
  { icon: "Box", title: "Bulk Orders Available", desc: "Special rates and discounts for contractors and large-scale projects." },
  { icon: "MessageSquare", title: "Fast Customer Support", desc: "Quick response via WhatsApp and phone for all your inquiries." },
  { icon: "MapPin", title: "Convenient Location", desc: "Easy to find at Orile-Agege, Powerline Bus-Stop with ample parking." },
];

// Real customer reviews, sourced from our Google Business Profile.
// Keep this in sync with the aggregateRating in index.html's JSON-LD —
// when you add a new review here, update ratingValue / reviewCount there too.
export const testimonials = [
  { name: "Omoniyi Ayoola Sultan", rating: 5, text: "Great Customer Experience! Quality products too, I'd definitely recommend them" },
];

export const gmapsImages  = [gmaps1, gmaps2, gmaps3, gmaps4];

// Hero background slideshow (very faint, decorative)
export const heroImages = [
  storePhotos.rollers.src,
  storePhotos.brushCloseUp.src,
  storePhotos.scrapersBrooms.src,
  storePhotos.brushesAndPaint.src,
];

// Gallery — portrait in-store shots ("tall", 2 rows) mixed with landscape
// showroom photos. Ordered in blocks that tile a 4-column grid exactly:
//   [T, S, S, T, S, S] → 2 rows   ·   [T, T, T, T] → 2 rows
const p = storePhotos;
const room = (src) => ({ src, alt: "Kayze Concept showroom" });
export const galleryImages = [
  // rows 1–2
  { ...p.brushesAndPaint, tall: true }, room(img1), room(img2),
  { ...p.concreteNails, tall: true },   room(img3), room(img4),
  // rows 3–4 — the paint buckets, front and centre
  { ...p.brushCloseUp, tall: true }, { ...p.prestigeBucket, tall: true },
  { ...p.finecoatBucket, tall: true }, { ...p.padlocks, tall: true },
  // rows 5–6
  { ...p.colourBoard, tall: true },   room(img5), room(img6),
  { ...p.scrapersBrooms, tall: true }, room(img7), { ...p.rollers },
];

// Colour chart pages — Prestige Paint official colour cards
// Colour cards, grouped by brand: the booklet cover + its inside pages
export const colourCards = [
  {
    brand: "Prestige",
    tone: "orange",
    tagline: "…quality speaks",
    intro: "Prestige's official colour card — gloss, emulsion and textured finishes for interiors and exteriors.",
    cover: { src: "/prestige_chart(1).jpg", alt: "Front cover of the Prestige Paints colour card" },
    pages: [
      {
        src: colourGlossEmul,
        label: "Gloss & Emulsion",
        description: "Interior & exterior gloss and emulsion shades — blues, greens, reds, neutrals and more.",
      },
      {
        src: colourTexcoat,
        label: "Flex & Textured Finish",
        description: "Textured and flexible coat colours — ideal for exterior walls and feature surfaces.",
      },
    ],
  },
  {
    brand: "Finecoat",
    tone: "blue",
    tagline: "Fine quality at a fine price",
    intro: "Finecoat / Shield colour card — smooth emulsions, gloss enamels and heavy-duty textured finishes.",
    cover: { src: "/finecoat_chart(1).jpg", alt: "Front cover of the Finecoat and Shield Paints colour card" },
    pages: [
      {
        src: "/finecoat_inner_chart_2.jpg",
        label: "Emulsion & Gloss Enamel",
        description: "42 shades from Off-White and Sunflower to Midnight Blue and Chocolate, each with its colour code.",
      },
      {
        src: "/finecoat_inner_chart.jpg",
        label: "Finetex Textured Finish",
        description: "Heavy-duty acrylic textured finish (FT 17 range) — earthy reds, greens, greys and sand tones.",
      },
    ],
  },
];