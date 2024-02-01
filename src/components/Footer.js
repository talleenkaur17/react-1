import React from 'react';
import apple from './../../assets/download-button-apple.webp';
import playstore from './../../assets/download-button-playstore.webp';

const Footer = () => {
  return (
    <footer className="bg-neutral-200 text-black p-2">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0 ">
            <h3 className="text-2xl font-bold mb-4">Foodiez</h3>
            <p>Your go-to place for delicious food!</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Explore</h3>
            <ul>
              <li>Home</li>
              <li>Menu</li>
              <li>Specials</li>
              <li>Order Now</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <ul>
              <li>Contact Us</li>
              <li>Support</li>
              <li>Feedback</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
            <h3 className="text-l font-bold mb-4">Download Our App</h3>
            <div className="absolute">
          
              <img src={playstore} alt="Get it on Google Play" className='w-30 h-10 mb-2' />
              <img src={apple} alt="Get it on Apple Store" className='w-30 h-10' />

            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-600 mt-8 pt-4 text-align: center">
        <p className="text-sm">
          © 2024 Foodiez. All rights reserved. | Privacy Policy | Terms of Service
        </p>
      </div>
    </footer>
  );
};

export default Footer;
