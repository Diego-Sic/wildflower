import React, { useState, useEffect } from "react";
import flower1 from "./flower1.png";

const ScrollComponent = ({ textOne, textTwo }) => {
  const [showFlowerOne, setShowFlowerOne] = useState(false);
  const [showFlowerTwo, setShowFlowerTwo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > window.innerHeight * 0.3) setShowFlowerOne(true);
      if (scrollY > window.innerHeight * 1.3) setShowFlowerTwo(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-900 w-full">
      {/* Section 1 - Text Group & Flowers */}
      <div className="h-screen flex items-center justify-center text-center relative">
        {/* Left Flower - Floating Animation */}
        <img
          src={flower1}
          alt="Flower One"
          className={`absolute left-5 w-32 transition-all duration-1000 floating ${
            showFlowerOne
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-5"
          }`}
        />

        {/* Text Wrapper */}
        <div className="flex flex-col items-center bg-goldwild rounded-md w-[800px] p-4">
          <div className="text-3xl font-bold text-brownwild text-outline">
            {textOne}
          </div>
          <div className="text-2xl font-semibold mt-2 text-greenwild text-outline">
            {textTwo}
          </div>
        </div>

        {/* Right Flower - Floating Animation */}
        <img
          src={flower1}
          alt="Flower Two"
          className={`absolute right-5 w-32 transition-all duration-1000 floating ${
            showFlowerOne
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-5"
          }`}
        />
      </div>
    </div>
  );
};

export default ScrollComponent;
