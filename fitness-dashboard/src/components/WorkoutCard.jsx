import React from "react";

const WorkoutCard = ({ workout }) => {
  const {
    workoutName = "Unknown Workout",
    category = "General Fitness",
    duration = 0,
    calories = 0,
    difficulty = "Beginner",
    trainer = "Self Training",
    date = "Not Available",
    status = "Pending",
  } = workout;

  const cardStyle = {
    width: "350px",
    backgroundColor: "#ffffff",
    border: "1px solid #dcdcdc",
    borderRadius: "12px",
    padding: "20px",
    margin: "20px auto",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
    transition: "0.3s",
  };

  const titleStyle = {
    color: "#222",
    marginBottom: "15px",
    textAlign: "center",
  };

  const infoStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "12px",
    fontSize: "15px",
  };

  const footerStyle = {
    marginTop: "20px",
    borderTop: "1px solid #ddd",
    paddingTop: "15px",
    textAlign: "center",
    color: "#666",
    fontSize: "14px",
  };

  return (
    <div style={cardStyle}>
      <h2 style={titleStyle}>🏋 Workout Summary</h2>

      <div style={infoStyle}>
        <strong>Workout</strong>
        <span>{workoutName}</span>
      </div>

      <div style={infoStyle}>
        <strong>Category</strong>
        <span>{category}</span>
      </div>

      <div style={infoStyle}>
        <strong>Duration</strong>
        <span>{duration} Minutes</span>
      </div>

      <div style={infoStyle}>
        <strong>Calories</strong>
        <span>{calories} kcal</span>
      </div>

      <div style={infoStyle}>
        <strong>Difficulty</strong>
        <span>{difficulty}</span>
      </div>

      <div style={infoStyle}>
        <strong>Trainer</strong>
        <span>{trainer}</span>
      </div>

      <div style={infoStyle}>
        <strong>Date</strong>
        <span>{date}</span>
      </div>

      <div style={infoStyle}>
        <strong>Status</strong>
        <span>{status}</span>
      </div>

      <div style={footerStyle}>
        💪 Keep tracking your workouts regularly to stay fit and healthy.
      </div>
    </div>
  );
};

export default WorkoutCard;