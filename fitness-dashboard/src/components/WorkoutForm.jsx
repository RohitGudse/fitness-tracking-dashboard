import React, { useState } from "react";

const WorkoutForm = ({ addWorkout }) => {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addWorkout({ name, duration });
    setName("");
    setDuration("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Workout Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Duration"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default WorkoutForm;