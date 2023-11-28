import React from "react";
import "../App.css";

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src="https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg"
        alt="/"
      />
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen"></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div className="md:left-[10%] max0w0[1100px] m-auto absolute p-4">
          <p>All Inclusive</p>
          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">
            Private Beaches & Gateaways
          </h1>
          <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">
            Immerse yourself in mind-bending adventures. <br /> Explore surreal
            landscapes and vibrant cultures. <br /> Experience - Where every journey is scheduled!
            <br /> Experience your unforgettable trip!
          </p>
          <button className="w-48 font-bold bg-gradient-to-r from-sky-500 to-indigo-500 hover:border-black hover:shadow-2xl text-black">Reserve Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
