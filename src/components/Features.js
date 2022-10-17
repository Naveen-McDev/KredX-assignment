import React from "react";
import { features } from "../resources/featuresData";
import FeaturesCard from "./FeaturesCard";

const Features = () => {
  return (
    <div className="features__container">
      {/* section title */}
      <div className="features__title">
        <h1>
          Why <span>KredX</span> For
        </h1>
        <h1>Invoice Discounting?</h1>
      </div>
      {/* listing the fetures of the brand */}
      <div className="col-12 row d-flex justify-content-between features__details">
        {features &&
          features.map((feature) => <FeaturesCard feature={feature} />)}
      </div>
    </div>
  );
};

export default Features;
