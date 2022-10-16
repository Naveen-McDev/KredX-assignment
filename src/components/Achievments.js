import React from "react";
import { achievements } from "../resources/achievementData";
import AchievmentsCard from "./AchievmentsCard";

const Achievments = () => {
  return (
    <div className="achievements__container">
      <div className="achievements__title">
        <h3>HELPING BUSINESS OWNERS SINCE 2015</h3>
      </div>
      <div className="achievement__details col-12 row d-flex justify-content-between">
        {achievements &&
          achievements.map((achievement) => (
            <AchievmentsCard achievement={achievement} />
          ))}
      </div>
    </div>
  );
};

export default Achievments;
