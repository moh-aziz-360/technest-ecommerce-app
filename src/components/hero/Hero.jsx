import React, { useState, useEffect } from "react";
import "./Hero.css";

const images = [
  "/public/images/hero.png",
  "/public/images/hero2.png",
  "/public/images/hero5.png",
  "/public/images/hero3.png",
  "/public/images/hero4.png",
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentImage(index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroText = document.querySelector(".hero p");

      heroText.style.transform = `translateY(-${scrollPosition * 0.1}px)`; // Slight upward movement
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="hero">
      <div className="background-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Background ${index}`}
            className={index === currentImage ? "active" : ""}
          />
        ))}
      </div>
      <p>
        Elevate your tech experience with our top-rated laptops and gadgets.
        <br />
        From high-performance machines to essential accessories, we offer
        quality products that exceed expectations.
      </p>
      <div className="dots-container">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentImage ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
