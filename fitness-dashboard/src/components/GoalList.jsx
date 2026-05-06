import React, { useState } from "react";
import GoalForm from "./GoalForm";

const GoalList = () => {
  const [goals, setGoals] = useState([]);

  const addGoal = (goal) => {
    setGoals([...goals, goal]);
  };

  return (
    <div>
      <h2>Goals</h2>
      <GoalForm addGoal={addGoal} />
      <ul>
        {goals.map((g, i) => (
          <li key={i}>{g}</li>
        ))}
      </ul>
    </div>
  );
};

export default GoalList;