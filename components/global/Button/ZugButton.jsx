import React from "react";

// 1. Define your theme variations in a lookup object
const BUTTON_THEMES = {
  default: `
    inline-block relative bg-cta-500 hover:bg-primary-600 bg-linear-to-b 
    from-cta-500 via-cta-500 hover:bg-none shadow-black shadow-md hover:shadow-cta-700 
    hover:shadow-md px-6 py-2 border-2 border-gray-950 hover:border-cta-500 
    rounded-full font-bold text-black hover:text-cta-500 uppercase 
    to-primary-accent-500 btn-cta btn-glass cta
  `,
  purple: `
    inline-block bg-primary-600 hover:bg-green-500 hover:bg-linear-to-b 
    from-cta-500 via-cta-500 shadow-gray-950/45 shadow-xs hover:shadow-gray-950/30 
    hover:shadow-md mx-auto px-6 py-2 border-2 border-cta-300 hover:border-2 
    hover:border-primary-600 rounded-full font-bold hover:text-black uppercase 
    text-primary-accent-500 to-primary-accent-500 btn-glass
  `
};

const ZugButton = ({ onBtnClick, buttonText, theme = "default" }) => {
  // 2. Select the style based on the prop, fallback to default if key doesn't exist
  
  const selectedStyle = BUTTON_THEMES[theme] || BUTTON_THEMES.default;

  return (
    <a 
      href="#" 
      onClick={(e) => {
        e.preventDefault(); // Prevents page jump on click
        onBtnClick?.(e);
      }} 
      className={selectedStyle.trim().replace(/\s+/g, ' ')} // Cleans up template literal whitespace
    >
      {buttonText || "Request Now"}
    </a>
  );
};

export default ZugButton;