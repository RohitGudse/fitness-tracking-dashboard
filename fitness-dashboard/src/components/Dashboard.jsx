import React from "react";
import ProgressChart from "./ProgressChart";
import CaloriesChart from "./CaloriesChart";
import StatsCard from "./StatsCard";

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <StatsCard title="Total Workouts" value="45" />
      <StatsCard title="Calories Burned" value="12000" />

      <ProgressChart />
      <CaloriesChart />
    </div>
  );
};

export default Dashboard;