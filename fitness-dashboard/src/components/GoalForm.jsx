import React, { useState } from "react";

const GoalForm = ({ addGoal }) => {
  const [goal, setGoal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addGoal(goal);
    setGoal("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        placeholder="Enter Goal"
      />
      <button>Add Goal</button>
    </form>
  );
};

export default GoalForm;