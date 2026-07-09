import React, { useState } from "react";
import WorkoutForm from "./WorkoutForm";
import WorkoutCard from "./WorkoutCard";

const WorkoutList = () => {
  // Store all workout records
  const [workoutList, setWorkoutList] = useState([]);

  // Add a new workout
  const handleAddWorkout = (newWorkout) => {
    const workoutData = {
      id: Date.now(),
      workoutName: newWorkout.workoutName,
      category: newWorkout.category,
      duration: newWorkout.duration,
      createdAt: new Date().toLocaleString(),
    };

    setWorkoutList((previousWorkoutList) => {
      return [...previousWorkoutList, workoutData];
    });
  };

  // Total workout count
  const totalWorkout = workoutList.length;

  // Check if workout exists
  const hasWorkout = totalWorkout > 0;

  return (
    <div
      style={{
        width: "90%",
        maxWidth: "900px",
        margin: "30px auto",
        padding: "20px",
        backgroundColor: "#f7f7f7",
        borderRadius: "10px",
        boxShadow: "0px 2px 8px rgba(0,0,0,0.2)",
      }}
    >
      <header
        style={{
          textAlign: "center",
          marginBottom: "25px",
        }}
      >
        <h1>Workout Management System</h1>

        <p>
          Add your daily workout details and keep track of your fitness
          activities.
        </p>

        <h3>Total Workouts : {totalWorkout}</h3>
      </header>

      <section
        style={{
          marginBottom: "30px",
        }}
      >
        <WorkoutForm addWorkout={handleAddWorkout} />
      </section>

      <section>
        <h2>Workout History</h2>

        {!hasWorkout ? (
          <div
            style={{
              padding: "20px",
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <h3>No Workout Available</h3>

            <p>
              Start adding your workout records to see them displayed here.
            </p>
          </div>
        ) : (
          workoutList.map((workoutItem) => {
            return (
              <WorkoutCard
                key={workoutItem.id}
                workout={workoutItem}
              />
            );
          })
        )}
      </section>
    </div>
  );
};

export default WorkoutList;