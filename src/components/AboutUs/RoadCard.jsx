import React from "react";

const RoadCard = ({ title, content, height }) => {
  return (
    <div className="flex flex-col justify-start border border-orange-700 rounded-lg">
      <h1>{title}</h1>
    </div>
  );
};

export default RoadCard;
