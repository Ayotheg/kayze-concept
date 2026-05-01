import React from "react";
import { MessageSquare } from "lucide-react";
import { WHATSAPP_URL } from "../constants";

const FloatingWhatsApp = () => {
  return (
    <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="kc-float-wa" aria-label="WhatsApp">
      <MessageSquare size={28} />
    </a>
  );
};

export default FloatingWhatsApp;
