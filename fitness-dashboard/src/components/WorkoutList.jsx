import React, { useState } from "react";
import WorkoutForm from "./WorkoutForm";
import WorkoutCard from "./WorkoutCard";

const WorkoutList = () => {
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  };

  return (
    <div>
      <h2>Workout Logs</h2>
      <WorkoutForm addWorkout={addWorkout} />
      {workouts.map((w, i) => (
        <WorkoutCard key={i} workout={w} />
      ))}
    </div>
  );
};

export default WorkoutList;