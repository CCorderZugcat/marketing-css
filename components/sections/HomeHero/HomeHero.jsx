import React from 'react';
import ZugButton from '../../global/Button/ZugButton';

const HeroSection = () => {
  return (
    <section className="relative bg-primary-950 lg:p-0 lg:w-full lg:h-screen overflow-hidden">
      {/* Background Image Container */}
      <div className="block lg:absolute relative inset-0 lg:flex lg:mb-0 lg:border-0 lg:rounded-none rounded-t-none w-full lg:h-full overflow-hidden">
        <img
          src="src/assets/images/hero-cat-and-mouse.png"
          className="w-full h-full lg:object-cover"
          alt="Cat with green eyes pouncing a mouse on a damaging a circuit board"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative lg:flex mx-auto px-6 lg:pb-24 lg:w-11/12 2xl:w-9/12 container">
        <div className="flex flex-wrap space-y-6 lg:py-20 xl:py-32 pt-12 pb-24">
          <div className="w-full lg:w-6/12">
            <h1 className="mb-6 font-brand font-bold text-primary-300 text-3xl lg:text-5xl">
              Affordable Cybersecurity for Startups & Medium Businesses
            </h1>
            <p className="mb-6 sm:pr-12 text-gray-100 md:text-lg">
              Defend your digital assets with enterprise-grade cybersecurity framework, 
              minus the overhead and cost of a full IT department.
            </p>
            <ZugButton buttonText={'Contact Now'} />
          </div>

          <div className="hidden justify-center px-4 w-full lg:w-6/12">
            <img 
              src="assets/images/brand/logo-icon.png" 
              className="inline-block" 
              alt="Logo Icon"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;