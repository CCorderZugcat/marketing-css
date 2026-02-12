import React from 'react';
import ZugButton from '../Button/ZugButton';
import './ZugHeader.css';

const ZugHeader = () => {
  return (
    <>
    <header className="block top-0 left-0 z-50 sticky bg-black shadow-md shadow-primary-900">
      <div className="relative lg:flex lg:flex-nowrap lg:justify-center mx-auto lg:w-11/12 2xl:w-9/12 container">
        <nav className="flex flex-wrap p-4 pt-8 pb-8 w-full">
          <a
            href="#"
            className="inline-flex items-center mr-auto text-gray-200 text-3xl logo"
          >
            <img
              src="src/assets/images/brand/zugcat-logo.svg"
              width="120"
              className="mr-8"
              alt="Zugcat Logo"
            />
          </a>
          
          <div
            className="hidden lg:flex lg:items-center lg:space-x-4 space-y-2 lg:space-y-0 w-full lg:w-auto"
            data-name="nav-menu"
          >
            <div className="flex lg:flex-row flex-col">
              <a href="#" className="lg:flex lg:flex-row p-2 text-gray-300 hover:text-secondary-300">
                Home
              </a>
              <a href="#" className="lg:flex lg:flex-row p-2 text-gray-300 hover:text-secondary-300">
                About
              </a>
              <a href="#" className="lg:flex lg:flex-row p-2 text-gray-300 hover:text-secondary-300">
                Services
              </a>
              <a href="#" className="lg:flex lg:flex-row p-2 text-gray-300 hover:text-secondary-300">
                Resources
              </a>
            </div>
            
            <ZugButton buttonText={'Contact Now'} />
            
          </div>

          <button
            className="lg:hidden hover:bg-white px-3 py-2 rounded text-secondary-500 hover:text-secondary-500"
            data-name="nav-toggler"
          >
            <span className="block my-1 border-current border-b-2 w-6"></span>
            <span className="block my-1 border-current border-b-2 w-6"></span>
            <span className="block my-1 border-current border-b-2 w-6"></span>
          </button>
        </nav>
      </div>
    </header>
    </>
  );
};

export default ZugHeader;