import React from "react";

const Profile = () => {
  const user = {
    name: "Rohit Sharma",
    role: "Fitness Enthusiast",
    email: "rohit@example.com",
    phone: "+91 9876543210",
    city: "Mumbai",
    age: 24,
    membership: "Premium",
    joined: "January 2025",
    height: "175 cm",
    weight: "72 kg",
  };

  const skills = [
    "Strength Training",
    "Cardio",
    "Yoga",
    "Running",
    "Swimming",
    "Cycling",
  ];

  const achievements = [
    "Completed 100 Workouts",
    "Burned 50,000 Calories",
    "Maintained 30-Day Workout Streak",
    "Finished Half Marathon",
  ];

  const activities = [
    {
      workout: "Morning Cardio",
      duration: "45 Minutes",
      calories: 420,
    },
    {
      workout: "Chest Workout",
      duration: "60 Minutes",
      calories: 550,
    },
    {
      workout: "Yoga Session",
      duration: "35 Minutes",
      calories: 180,
    },
  ];

  return (
    <div className="profile-page">

      <header className="profile-header">
        <h1>User Profile</h1>
        <p>
          Manage your fitness information, achievements, workout history,
          and personal goals.
        </p>
      </header>

      <section className="profile-card">
        <h2>Personal Information</h2>

        <div className="profile-info">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Role:</strong> {user.role}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>City:</strong> {user.city}</p>
          <p><strong>Age:</strong> {user.age}</p>
          <p><strong>Membership:</strong> {user.membership}</p>
          <p><strong>Joined:</strong> {user.joined}</p>
          <p><strong>Height:</strong> {user.height}</p>
          <p><strong>Weight:</strong> {user.weight}</p>
        </div>
      </section>

      <section className="profile-card">
        <h2>Fitness Statistics</h2>

        <div className="stats-grid">
          <div className="stat-box">
            <h3>128</h3>
            <p>Total Workouts</p>
          </div>

          <div className="stat-box">
            <h3>19,500</h3>
            <p>Calories Burned</p>
          </div>

          <div className="stat-box">
            <h3>320</h3>
            <p>Workout Hours</p>
          </div>

          <div className="stat-box">
            <h3>45</h3>
            <p>Workout Streak</p>
          </div>
        </div>
      </section>

      <section className="profile-card">
        <h2>Fitness Skills</h2>

        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="profile-card">
        <h2>Achievements</h2>

        <ul>
          {achievements.map((achievement, index) => (
            <li key={index}>🏆 {achievement}</li>
          ))}
        </ul>
      </section>

      <section className="profile-card">
        <h2>Recent Activities</h2>

        {activities.map((activity, index) => (
          <div className="activity-card" key={index}>
            <h3>{activity.workout}</h3>
            <p>Duration : {activity.duration}</p>
            <p>Calories : {activity.calories}</p>
          </div>
        ))}
      </section>

      <section className="profile-card">
        <h2>Fitness Goals</h2>

        <ul>
          <li>✅ Exercise 5 days every week</li>
          <li>✅ Burn 2500 calories weekly</li>
          <li>✅ Complete 150 workouts this year</li>
          <li>✅ Improve endurance and strength</li>
          <li>✅ Maintain a healthy lifestyle</li>
        </ul>
      </section>

    </div>
  );
};

export default Profile;