import React from "react";
import aboutImage from "./../../assets/ice-cream-image.avif";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div id="about" className="bg-gray-100 py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
        <div id="about-left" className="lg:w-1/2 mb-8 lg:mb-0">
          <img src={aboutImage} alt="About Foodiez" className="rounded-lg shadow-lg max-w-full h-auto" />
        </div>

        <div id="about-right" className="lg:w-1/2 lg:ml-8">
          <h1 className="text-4xl font-bold text-orange-600 mb-4">
            About Foodiez
          </h1>
          <p className="text-gray-700 leading-loose mb-6">
            Welcome to Foodiez – where delicious moments are just a click away!
            We're not just a food delivery app; we're your passport to culinary
            delights. With a curated selection of top-notch local eateries, we
            bring quality and convenience to your table. Explore diverse
            cuisines, enjoy easy ordering, and savor swift deliveries. Your
            culinary journey begins here – welcome to Foodiez, where every meal
            is a celebration!
          </p>
          <button className="bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-400">
            Discover More <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>

     
    </div>
  );
};

export default About;
