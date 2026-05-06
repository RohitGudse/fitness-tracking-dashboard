import React from "react";

const WorkoutCard = ({ workout }) => {
  return (
    <div style={{ border: "1px solid #ccc", margin: "10px" }}>
      <h3>{workout.name}</h3>
      <p>{workout.duration} mins</p>
    </div>
  );
};

export default WorkoutCard;