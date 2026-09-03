import React from "react";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const dashboardStats = [
    {
      id: 1,
      title: "Total Workouts",
      value: "24",
      description: "Workouts completed",
    },
    {
      id: 2,
      title: "Calories Burned",
      value: "8,450",
      description: "Calories this month",
    },
    {
      id: 3,
      title: "Active Days",
      value: "18",
      description: "Days this month",
    },
    {
      id: 4,
      title: "Current Streak",
      value: "7 Days",
      description: "Keep going!",
    },
  ];

  const quickActions = [
    "Start Workout",
    "View Progress",
    "Set Fitness Goal",
  ];

  return (
    <div className="fitness-dashboard">

      {/* Navigation */}
      <Navbar />

      {/* Main Dashboard */}
      <main className="dashboard-main">

        {/* Welcome Section */}
        <section className="welcome-section">
          <div>
            <h1>Welcome to Your Fitness Dashboard</h1>

            <p>
              Track your workouts, monitor your progress, and stay
              consistent with your daily fitness goals.
            </p>
          </div>

          <button className="profile-button">
            My Profile
          </button>
        </section>

        {/* Statistics Section */}
        <section className="stats-section">
          <div className="section-heading">
            <h2>Fitness Overview</h2>
            <p>Here is your current fitness activity.</p>
          </div>

          <div className="stats-grid">
            {dashboardStats.map((stat) => (
              <div className="stat-card" key={stat.id}>
                <h3>{stat.title}</h3>

                <strong>{stat.value}</strong>

                <p>{stat.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="quick-actions-section">
          <div className="section-heading">
            <h2>Quick Actions</h2>
            <p>Manage your fitness activities quickly.</p>
          </div>

          <div className="action-list">
            {quickActions.map((action, index) => (
              <button
                className="action-button"
                key={index}
              >
                {action}
              </button>
            ))}
          </div>
        </section>

        {/* Today's Goal */}
        <section className="goal-section">
          <div className="goal-content">
            <h2>Today's Fitness Goal</h2>

            <p>
              Complete at least 30 minutes of physical activity
              today and keep your fitness streak active.
            </p>

            <button className="goal-button">
              Start Today's Goal
            </button>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="dashboard-footer">
        <p>
          © 2026 Fitness Dashboard. Stay healthy and keep moving!
        </p>
      </footer>

    </div>
  );
};

export default App;