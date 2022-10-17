import React from "react";

const AchievmentsCard = ({ achievement }) => {
  // receving the selected acheivement data through props from the parent component
  return (
    <div className="achievements__card px-0 py-2 my-4">
      <div className="card">
        <div className="card-body px-0 d-flex flex-column align-items-start mb-4 ">
          {/* achievement title */}
          <div>
            <h3 className="card-subtitle mb-2 text-white fw-light">
              {achievement.title}
            </h3>
          </div>
          {/* acheivement description */}
          <p className="card-text">{achievement.description}</p>
        </div>
      </div>
    </div>
  );
};

export default AchievmentsCard;
