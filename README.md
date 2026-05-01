# Kayze Concept Website

A modern, responsive React website for Kayze Concept - Building Materials, Lagos.

## Setup Instructions

### 1. Install dependencies
```bash
npm install
```

### 2. Add your assets
Place these files inside `src/assets/`:
- `kayze_logo.jpg` — Your KC logo
- All 15 store screenshots: `Screenshot_2026-05-01_045018.png` through `Screenshot_2026-05-01_045343.png`

### 3. Run the development server
```bash
npm run dev
```

### 4. Build for production
```bash
npm run build
```

---

## Sections Included
- **Hero** — Animated slideshow, headline, WhatsApp CTA, stats, address card
- **About** — Company intro, stats grid (10+ yrs, 5000+ clients, 500+ products, 100% genuine)
- **Products** — 5 product categories (Paints, Wallpapers, Nails, Electrodes, Building Accessories)
- **Brands** — Finecoat & Prestige authorized distributor cards
- **Why Choose Us** — 6 trust signals
- **Gallery** — 9-image grid with lightbox viewer
- **Location** — Address card + Google Maps embed + Opening hours
- **Contact** — WhatsApp + Call channels, info cards, CTA
- **Footer** — Full links, contact, hours
- **Floating WhatsApp** — Animated sticky button

## Customization
- **WhatsApp number**: Change `WHATSAPP_NUMBER` constant in `App.jsx`
- **Colors**: Edit CSS variables in `App.css` (`:root` block)
- **Products**: Edit the `products` array in `App.jsx`
- **Gallery images**: Update the `galleryImages` array in `App.jsx`