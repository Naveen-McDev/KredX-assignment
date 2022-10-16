import React from "react";
import heroImage from "../asset/heroImage.png";
import FormCard from "./FormCard";
const Hero = () => {
  return (
    <div className="hero__container">
      <img src={heroImage} alt="HeroImage" className="hero__img" />
      <div className="hero__form">
        <FormCard />
      </div>
    </div>
  );
};

export default Hero;
