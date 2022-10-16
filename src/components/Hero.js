import React from "react";
import heroImage from "../asset/heroImage.png";
const Hero = () => {
  return (
    <div className="hero__container">
      <img src={heroImage} alt="HeroImage" className="hero__img" />
    </div>
  );
};

export default Hero;
