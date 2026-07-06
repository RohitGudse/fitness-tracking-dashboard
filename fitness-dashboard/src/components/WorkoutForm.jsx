import React, { useState } from "react";

const WorkoutForm = ({ addWorkout }) => {
  const [workout, setWorkout] = useState({
    workoutName: "",
    category: "",
    duration: "",
    calories: "",
    date: "",
    trainer: "",
    difficulty: "",
    notes: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setWorkout((prevWorkout) => ({
      ...prevWorkout,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      workout.workoutName === "" ||
      workout.category === "" ||
      workout.duration === ""
    ) {
      setMessage("Please fill in all required fields.");
      return;
    }

    addWorkout(workout);

    setMessage("Workout added successfully!");

    setWorkout({
      workoutName: "",
      category: "",
      duration: "",
      calories: "",
      date: "",
      trainer: "",
      difficulty: "",
      notes: "",
    });
  };

  const handleReset = () => {
    setWorkout({
      workoutName: "",
      category: "",
      duration: "",
      calories: "",
      date: "",
      trainer: "",
      difficulty: "",
      notes: "",
    });

    setMessage("");
  };

  return (
    <div className="workout-form-container">
      <h2>Add New Workout</h2>

      <p>
        Fill in the workout details below to keep track of your fitness
        activities and monitor your daily progress.
      </p>

      {message && <p className="message">{message}</p>}

      <form onSubmit={handleSubmit}>
        {/* Workout Name */}
        <div className="form-group">
          <label>Workout Name</label>

          <input
            type="text"
            name="workoutName"
            placeholder="Enter workout name"
            value={workout.workoutName}
            onChange={handleChange}
          />
        </div>

        {/* Category */}
        <div className="form-group">
          <label>Workout Category</label>

          <select
            name="category"
            value={workout.category}
            onChange={handleChange}
          >
            <option value="">Select Category</option>
            <option value="Cardio">Cardio</option>
            <option value="Strength">Strength Training</option>
            <option value="Yoga">Yoga</option>
            <option value="Cycling">Cycling</option>
            <option value="Running">Running</option>
            <option value="Swimming">Swimming</option>
          </select>
        </div>

        {/* Duration */}
        <div className="form-group">
          <label>Duration (Minutes)</label>

          <input
            type="number"
            name="duration"
            placeholder="Example: 60"
            value={workout.duration}
            onChange={handleChange}
          />
        </div>

        {/* Calories */}
        <div className="form-group">
          <label>Calories Burned</label>

          <input
            type="number"
            name="calories"
            placeholder="Example: 500"
            value={workout.calories}
            onChange={handleChange}
          />
        </div>

        {/* Date */}
        <div className="form-group">
          <label>Workout Date</label>

          <input
            type="date"
            name="date"
            value={workout.date}
            onChange={handleChange}
          />
        </div>

        {/* Trainer */}
        <div className="form-group">
          <label>Trainer Name</label>

          <input
            type="text"
            name="trainer"
            placeholder="Enter trainer name"
            value={workout.trainer}
            onChange={handleChange}
          />
        </div>

        {/* Difficulty */}
        <div className="form-group">
          <label>Difficulty Level</label>

          <select
            name="difficulty"
            value={workout.difficulty}
            onChange={handleChange}
          >
            <option value="">Select Difficulty</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>

        {/* Notes */}
        <div className="form-group">
          <label>Workout Notes</label>

          <textarea
            name="notes"
            rows="5"
            placeholder="Write additional notes about your workout..."
            value={workout.notes}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="button-group">
          <button type="submit">
            Save Workout
          </button>

          <button
            type="button"
            onClick={handleReset}
          >
            Reset Form
          </button>
        </div>
      </form>

      <div className="form-footer">
        <h3>Benefits of Tracking Workouts</h3>

        <ul>
          <li>✔ Track your daily exercise routine.</li>
          <li>✔ Monitor calories burned.</li>
          <li>✔ Improve workout consistency.</li>
          <li>✔ Set and achieve fitness goals.</li>
          <li>✔ Analyze your weekly and monthly progress.</li>
        </ul>
      </div>
    </div>
  );
};

export default WorkoutForm;