import React from 'react';

const ZugFooter = () => {
  return (
    <footer className="bg-gray-950 lg:px-12 pt-16">
      <div className="relative mx-auto lg:mx-auto px-4 container">
        <div className="flex flex-wrap -mx-4">
          {/* Brand and Contact Section */}
          <div className="p-4 w-full md:w-4/12">
            <a
              href="#"
              className="inline-flex items-center mb-6 font-serif font-bold text-primary-500 text-3xl hover:text-opacity-75 leading-none"
            >
              <img
                src="src/assets/images/brand/zugcat-logo.svg"
                width="150"
                className="mr-2"
                alt="Zugcat Logo"
              />
            </a>
            <p className="text-primary-300">Snoqualmie, WA USA</p>
            <div className="mb-6">
              <br />
              <a
                href="tel:(425) 470-3643"
                className="text-secondary-500 hover:text-primary-300 decoration-dotted underline"
              >
                (425) 470-3643
              </a>
              <br />
              <a
                href="mailto:info@zugcat.com"
                className="text-secondary-500 hover:text-primary-300 decoration-dotted underline"
              >
                info@zugcat.com
              </a>
              <br />
            </div>
          </div>

          {/* About Links */}
          <div className="p-4 w-full sm:w-6/12 md:w-4/12 xl:w-2/12">
            <h2 className="mb-8 font-bold text-primary-300 text-lg uppercase">About</h2>
            <ul>
              <li className="mb-4">
                <a href="#" className="text-gray-100 hover:text-secondary-500 hover:underline">
                  Get a Quote
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-gray-100 hover:text-secondary-500 hover:underline">
                  Our Mascot (Zug)
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="p-4 w-full sm:w-6/12 md:w-4/12 xl:w-2/12">
            <h2 className="mb-8 font-bold text-primary-300 text-lg uppercase">Services</h2>
            <ul>
              <li className="mb-4">
                <a href="#" className="text-gray-100 hover:text-secondary-500 hover:underline">
                  Quillon Roadmap
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-gray-100 hover:text-secondary-500 hover:underline">
                  Cybersecurity Strategy
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-gray-100 hover:text-secondary-500 hover:underline">
                  Cybersecurity Policies
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-gray-100 hover:text-secondary-500 hover:underline">
                  Cybersecurity Tools
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-gray-100 hover:text-secondary-500 hover:underline">
                  Risk Analysis
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe and Social Section */}
          <div className="p-4 w-full md:w-4/12 xl:w-4/12">
            <h2 className="mb-8 font-bold text-primary-300 text-lg uppercase">Subscribe</h2>
            <p className="mb-4">
              Subscribe to our newsletter and get exclusive updates directly in your inbox.
            </p>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="flex items-center bg-white mb-6 p-1 border-2 border-gray-400 overflow-hidden">
                <input
                  className="flex-1 p-2 border-primary-600 outline-none w-full font-light text-gray-600 appearance-none"
                  placeholder="Enter email..."
                  type="email"
                />
                <button
                  type="submit"
                  className="inline-block bg-primary-500 hover:bg-primary-700 px-6 py-2 font-medium text-white text-center uppercase"
                  aria-label="submit"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="inline-block w-4 h-4">
                    <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" />
                  </svg>
                </button>
              </div>
            </form>

            <h2 className="mb-4 font-bold text-primary-300 text-lg uppercase">Get Social</h2>
            <div className="inline-flex flex-wrap space-x-3">
              {/* Facebook */}
              <a href="#" aria-label="facebook" className="hover:text-primary-500">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-300 hover:text-secondary-500">
                  <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
                </svg>
              </a>
              {/* Twitter */}
              <a href="#" aria-label="twitter" className="hover:text-primary-500">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-300 hover:text-secondary-500">
                  <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
                </svg>
              </a>
              {/* Instagram, LinkedIn, YouTube SVGs would follow the same pattern... */}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-4">
          <hr className="opacity-25 mb-4" />
          <div className="flex flex-wrap items-center -mx-4">
            <div className="md:flex-1 px-4 py-2 w-full">
              <p className="text-gray-500">&copy; 2026. All Rights Reserved - Zugcat</p>
            </div>
            <div className="px-4 py-2 w-full sm:w-auto text-gray-500">
              <a href="#" className="text-gray-100 hover:text-secondary-500">
                Privacy Policy
              </a>{" "}
              |{" "}
              <a href="#" className="text-gray-100 hover:text-secondary-500">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ZugFooter;