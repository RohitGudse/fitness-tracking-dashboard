import React from "react";
import ProgressChart from "./ProgressChart";
import CaloriesChart from "./CaloriesChart";
import StatsCard from "./StatsCard";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Dashboard Header */}
      <header className="dashboard-header">
        <h1>Fitness Dashboard</h1>
        <p>
          Welcome back! Here you can monitor your fitness journey, track your
          workout performance, view calorie statistics, and analyze your
          progress over time.
        </p>
      </header>

      {/* Statistics Section */}
      <section className="statistics-section">
        <h2>Workout Summary</h2>

        <div className="stats-grid">
          <StatsCard
            title="Total Workouts"
            value="45"
          />

          <StatsCard
            title="Calories Burned"
            value="12,000 kcal"
          />

          <StatsCard
            title="Hours Exercised"
            value="82 hrs"
          />

          <StatsCard
            title="Average Workout"
            value="1 hr 20 min"
          />

          <StatsCard
            title="Weekly Goal"
            value="5 / 7 Days"
          />

          <StatsCard
            title="Current Streak"
            value="18 Days"
          />
        </div>
      </section>

      {/* Charts Section */}
      <section className="charts-section">
        <h2>Performance Analytics</h2>

        <div className="chart-wrapper">
          <div className="chart-card">
            <h3>Workout Progress</h3>
            <p>
              This chart displays your workout consistency and overall
              improvement throughout the week and month.
            </p>
            <ProgressChart />
          </div>

          <div className="chart-card">
            <h3>Calories Burned</h3>
            <p>
              Track your daily calorie burn and compare your performance with
              previous workout sessions.
            </p>
            <CaloriesChart />
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="goals-section">
        <h2>Fitness Goals</h2>

        <ul>
          <li>✅ Complete 5 workouts every week.</li>
          <li>✅ Burn at least 15,000 calories this month.</li>
          <li>✅ Exercise for a minimum of 60 minutes daily.</li>
          <li>✅ Improve workout consistency.</li>
          <li>✅ Increase strength and endurance.</li>
        </ul>
      </section>

      {/* Recent Activity */}
      <section className="activity-section">
        <h2>Recent Activity</h2>

        <div className="activity-card">
          <p>
            <strong>Monday:</strong> Completed Full Body Workout - 620 kcal
            burned.
          </p>

          <p>
            <strong>Tuesday:</strong> Cardio Session - 480 kcal burned.
          </p>

          <p>
            <strong>Wednesday:</strong> Strength Training - 710 kcal burned.
          </p>

          <p>
            <strong>Thursday:</strong> Yoga & Stretching - 290 kcal burned.
          </p>

          <p>
            <strong>Friday:</strong> HIIT Workout - 850 kcal burned.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="dashboard-footer">
        <p>
          Keep going! Every workout brings you one step closer to your fitness
          goals. Stay consistent, stay healthy, and keep improving.
        </p>
      </footer>
    </div>
  );
};

export default Dashboard;