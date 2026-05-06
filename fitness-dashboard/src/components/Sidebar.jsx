import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div style={{ width: "200px", background: "#eee", padding: "10px" }}>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/workouts">Workouts</Link></li>
        <li><Link to="/goals">Goals</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;