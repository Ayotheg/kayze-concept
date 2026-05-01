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

// Import logo
import logo from "../assets/kayze_logo.jpg";

export const WHATSAPP_NUMBER = "2348033227792";
export const WHATSAPP_URL = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=Hello%20Kayze%20Concept!%20I%20would%20like%20to%20make%20an%20inquiry.`;
export const MAPS_URL = "https://maps.app.goo.gl/zxz6Lf25VCo3fwpr6?g_st=ic";

export const navLinks = ["Home", "About", "Products", "Brands", "Gallery", "Location", "Contact"];

export const products = [
  {
    icon: "Palette",
    title: "Paints",
    desc: "Premium interior and exterior paints from top brands including Finecoat and Prestige. Available in all finishes.",
    color: "from-blue-600 to-blue-400",
  },
  {
    icon: "Blinds",
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
    icon: "PlugZap",
    title: "Electrodes",
    desc: "High-quality welding electrodes for professional and industrial use.",
    color: "from-yellow-600 to-yellow-400",
  },
  {
    icon: "LayoutGrid",
    title: "Building Accessories",
    desc: "Complete range of finishing materials and building accessories for every project.",
    color: "from-green-600 to-green-400",
  },
];

export const whyUs = [
  { icon: "ShieldCheck", title: "Trusted Supplier", desc: "Years of experience serving Lagos with reliable and authentic building materials." },
  { icon: "CheckCircle", title: "Quality Products", desc: "Only genuine products from authorized manufacturers and trusted brands." },
  { icon: "CircleDollarSign", title: "Affordable Pricing", desc: "Competitive prices with great value for money on all our products." },
  { icon: "Box", title: "Bulk Orders Available", desc: "Special rates and discounts for contractors and large-scale projects." },
  { icon: "MessageSquare", title: "Fast Customer Support", desc: "Quick response via WhatsApp and phone for all your inquiries." },
  { icon: "MapPin", title: "Convenient Location", desc: "Easy to find at Orile-Agege, Powerline Bus-Stop with ample parking." },
];

export const galleryImages = [img1, img2, img3, img4, img5, img6, img7];
export const heroImages = [img1, img2, img3, img4, img5, img6, img7];
export const gmapsImages = [gmaps1, gmaps2, gmaps3, gmaps4];
