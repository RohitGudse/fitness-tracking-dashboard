import React, { useState } from "react";
import GoalForm from "./GoalForm";

const GoalList = () => {
  const [goals, setGoals] = useState([]);

  // Add a new goal to the list
  const handleAddGoal = (newGoal) => {
    if (!newGoal || newGoal.trim() === "") {
      return;
    }

    setGoals((previousGoals) => [
      ...previousGoals,
      newGoal.trim(),
    ]);
  };

  // Remove a goal from the list
  const handleDeleteGoal = (goalIndex) => {
    setGoals((previousGoals) =>
      previousGoals.filter((_, index) => index !== goalIndex)
    );
  };

  return (
    <section className="goal-container">
      <div className="goal-header">
        <h2>My Goals</h2>

        <p>
          Add, view, and manage your personal goals from one place.
        </p>
      </div>

      <div className="goal-form-wrapper">
        <GoalForm addGoal={handleAddGoal} />
      </div>

      <div className="goal-list-wrapper">
        {goals.length === 0 ? (
          <div className="empty-goal-message">
            <h3>No Goals Added</h3>
            <p>
              Start by adding your first goal using the form above.
            </p>
          </div>
        ) : (
          <>
            <h3>Goal List</h3>

            <ul className="goal-list">
              {goals.map((goal, index) => (
                <li className="goal-item" key={`${goal}-${index}`}>
                  <div className="goal-content">
                    <span className="goal-number">
                      {index + 1}.
                    </span>

                    <span className="goal-text">
                      {goal}
                    </span>
                  </div>

                  <button
                    type="button"
                    className="delete-goal-button"
                    onClick={() => handleDeleteGoal(index)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      {goals.length > 0 && (
        <div className="goal-summary">
          <strong>Total Goals:</strong> {goals.length}
        </div>
      )}
    </section>
  );
};

export default GoalList;