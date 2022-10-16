import React from "react";

const FeaturesCard = ({ feature }) => {
  return (
    <div className="features__card px-0 py-2 my-4">
      <div className="card">
        <div className="card-body d-flex flex-column align-items-start mb-4">
          <img src={feature.img} alt="cardImage" className="mb-4" />
          <div>
            <h5 className="card-subtitle mb-2 text-black fw-semibold">
              {feature.title}
            </h5>
          </div>
          <p className="card-text text-muted">{feature.description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
