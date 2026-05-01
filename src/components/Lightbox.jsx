import React from "react";

const Lightbox = ({ lightboxImg, setLightboxImg }) => {
  if (!lightboxImg) return null;

  return (
    <div className="kc-lightbox" onClick={() => setLightboxImg(null)}>
      <button className="kc-lightbox-close">✕</button>
      <img src={lightboxImg} alt="Gallery" onClick={(e) => e.stopPropagation()} />
    </div>
  );
};

export default Lightbox;
