import React from "react";

const FeaturesCard = ({ feature }) => {
  return (
    <div className="card p-5">
      <div className="card-body">
        <img src={feature.img} alt="cardImage" className="mb-4" />
        <div>
          <h5 className="card-subtitle mb-2 text-black fw-semibold">
            {feature.title}
          </h5>
        </div>
        <p className="card-text text-muted">{feature.description}</p>
      </div>
    </div>
  );
};

export default FeaturesCard;
