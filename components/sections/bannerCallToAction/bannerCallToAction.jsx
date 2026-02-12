import React from 'react';
import ZugButton from '../../global/Button/ZugButton';
import './bannerCallToAction.css';

const BannerCTA = ({ title, buttonText, onBtnClick, theme }) => {

  return (
    <section className="relative flex justify-center p-6 w-full h-full overflow-hidden banner-cta">
      <div className="relative grid mx-auto px-4 container">
        <h3 className="mb-6 font-bold text-gray-950 text-3xl lg:text-4xl text-center uppercase">
          {title || "Contact Us"}
        </h3>
        <ZugButton onBtnClick={onBtnClick} buttonText={buttonText} theme={"purple"} />
      </div>
    </section>
  );
};

export default BannerCTA;