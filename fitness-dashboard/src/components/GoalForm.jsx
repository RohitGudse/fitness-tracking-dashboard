// =============================================
// File: src/components/GoalForm.jsx
// Description: Goal Input Form Component
// =============================================

import React, { useState } from "react";
import "./GoalForm.css";

const GoalForm = ({ addGoal }) => {
  // -----------------------------
  // States
  // -----------------------------
  const [goal, setGoal] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // -----------------------------
  // Handle Input Change
  // -----------------------------
  const handleChange = (event) => {
    setGoal(event.target.value);

    if (error) {
      setError("");
    }

    if (success) {
      setSuccess("");
    }
  };

  // -----------------------------
  // Handle Form Submit
  // -----------------------------
  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedGoal = goal.trim();

    if (trimmedGoal === "") {
      setError("Please enter your goal.");
      return;
    }

    if (trimmedGoal.length < 3) {
      setError("Goal should contain at least 3 characters.");
      return;
    }

    addGoal(trimmedGoal);

    setSuccess("Goal added successfully!");

    setGoal("");
  };

  return (
    <div className="goal-form-container">

      <h2 className="title">
        Add New Goal
      </h2>

      <form onSubmit={handleSubmit}>

        <div className="input-group">

          <label htmlFor="goal">
            Goal Name
          </label>

          <input
            id="goal"
            type="text"
            placeholder="Example : Learn React in 30 Days"
            value={goal}
            onChange={handleChange}
            maxLength={100}
          />

        </div>

        <div className="character-count">
          {goal.length}/100 Characters
        </div>

        {error && (
          <p className="error-message">
            {error}
          </p>
        )}

        {success && (
          <p className="success-message">
            {success}
          </p>
        )}

        <button
          type="submit"
          disabled={goal.trim() === ""}
        >
          Add Goal
        </button>

      </form>

    </div>
  );
};

export default GoalForm;