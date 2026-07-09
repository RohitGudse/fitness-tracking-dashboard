import React, { useState } from "react";

const initialWorkout = {
  workoutName: "",
  category: "",
  duration: "",
  calories: "",
  date: "",
  trainer: "",
  difficulty: "",
  notes: "",
};

const WorkoutForm = ({ addWorkout }) => {
  const [formData, setFormData] = useState(initialWorkout);
  const [status, setStatus] = useState("");

  const categoryList = [
    "Cardio",
    "Strength",
    "Yoga",
    "Cycling",
    "Running",
    "Swimming",
  ];

  const difficultyList = [
    "Beginner",
    "Intermediate",
    "Advanced",
  ];

  const updateField = ({ target }) => {
    setFormData((current) => ({
      ...current,
      [target.name]: target.value,
    }));
  };

  const validateForm = () => {
    return (
      formData.workoutName.trim() &&
      formData.category &&
      formData.duration
    );
  };

  const submitWorkout = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus("Please complete all mandatory fields.");
      return;
    }

    addWorkout(formData);

    setStatus("Workout saved successfully.");

    setFormData(initialWorkout);
  };

  const clearForm = () => {
    setFormData(initialWorkout);
    setStatus("");
  };

  return (
    <section className="workout-form-container">

      <header>
        <h2>Create Workout</h2>
        <p>
          Record your workouts and monitor your overall fitness performance.
        </p>
      </header>

      {status && <div className="message">{status}</div>}

      <form onSubmit={submitWorkout}>

        <div className="form-group">
          <label>Workout Name</label>
          <input
            type="text"
            name="workoutName"
            value={formData.workoutName}
            placeholder="Workout Name"
            onChange={updateField}
          />
        </div>

        <div className="form-group">
          <label>Category</label>

          <select
            name="category"
            value={formData.category}
            onChange={updateField}
          >
            <option value="">Choose Category</option>

            {categoryList.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Duration</label>

          <input
            type="number"
            name="duration"
            value={formData.duration}
            placeholder="Minutes"
            onChange={updateField}
          />
        </div>

        <div className="form-group">
          <label>Calories</label>

          <input
            type="number"
            name="calories"
            value={formData.calories}
            placeholder="Calories Burned"
            onChange={updateField}
          />
        </div>

        <div className="form-group">
          <label>Date</label>

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={updateField}
          />
        </div>

        <div className="form-group">
          <label>Trainer</label>

          <input
            type="text"
            name="trainer"
            value={formData.trainer}
            placeholder="Trainer Name"
            onChange={updateField}
          />
        </div>

        <div className="form-group">
          <label>Difficulty</label>

          <select
            name="difficulty"
            value={formData.difficulty}
            onChange={updateField}
          >
            <option value="">Choose Difficulty</option>

            {difficultyList.map((level) => (
              <option key={level}>{level}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Notes</label>

          <textarea
            rows={4}
            name="notes"
            value={formData.notes}
            placeholder="Workout Notes..."
            onChange={updateField}
          />
        </div>

        <div className="button-group">
          <button type="submit">Add Workout</button>

          <button
            type="button"
            onClick={clearForm}
          >
            Clear
          </button>
        </div>

      </form>

      <footer className="form-footer">
        <h3>Workout Benefits</h3>

        <ul>
          <li>Track daily workouts</li>
          <li>Monitor calorie consumption</li>
          <li>Improve consistency</li>
          <li>Achieve fitness milestones</li>
          <li>Review overall progress</li>
        </ul>
      </footer>

    </section>
  );
};

export default WorkoutForm;