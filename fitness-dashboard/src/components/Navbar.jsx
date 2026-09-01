import React from "react";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />

      <main>
        <h1>Welcome to Your Fitness Dashboard</h1>
        <p>Track your workouts, progress, and daily fitness goals.</p>
      </main>
    </div>
  );
};

export default App;