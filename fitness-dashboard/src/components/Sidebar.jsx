import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    {
      id: 1,
      title: "Dashboard",
      path: "/",
      icon: "📊",
    },
    {
      id: 2,
      title: "Workouts",
      path: "/workouts",
      icon: "🏋️",
    },
    {
      id: 3,
      title: "Goals",
      path: "/goals",
      icon: "🎯",
    },
    {
      id: 4,
      title: "Profile",
      path: "/profile",
      icon: "👤",
    },
    {
      id: 5,
      title: "Progress",
      path: "/progress",
      icon: "📈",
    },
    {
      id: 6,
      title: "Schedule",
      path: "/schedule",
      icon: "📅",
    },
    {
      id: 7,
      title: "Settings",
      path: "/settings",
      icon: "⚙️",
    },
  ];

  return (
    <aside
      style={{
        width: "240px",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: "20px 15px",
        boxSizing: "border-box",
        borderRight: "1px solid #ddd",
      }}
    >
      {/* Sidebar Header */}
      <div
        style={{
          marginBottom: "30px",
          padding: "10px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: "22px",
            color: "#222",
          }}
        >
          Fitness App
        </h2>

        <p
          style={{
            margin: "6px 0 0",
            fontSize: "13px",
            color: "#777",
          }}
        >
          Stay Fit & Healthy
        </p>
      </div>

      {/* Navigation Menu */}
      <nav>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
        >
          {menuItems.map((item) => (
            <li
              key={item.id}
              style={{
                marginBottom: "8px",
              }}
            >
              <NavLink
                to={item.path}
                style={({ isActive }) => ({
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "12px 15px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontSize: "15px",
                  fontWeight: isActive ? "600" : "400",
                  color: isActive ? "#ffffff" : "#333333",
                  backgroundColor: isActive ? "#007bff" : "transparent",
                  transition: "0.3s ease",
                })}
              >
                <span
                  style={{
                    width: "25px",
                    textAlign: "center",
                  }}
                >
                  {item.icon}
                </span>

                <span>{item.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Sidebar Footer */}
      <div
        style={{
          marginTop: "40px",
          padding: "15px",
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          border: "1px solid #ddd",
          textAlign: "center",
        }}
      >
        <p
          style={{
            margin: "0 0 8px",
            fontSize: "14px",
            fontWeight: "600",
          }}
        >
          Keep Going! 💪
        </p>

        <p
          style={{
            margin: 0,
            fontSize: "12px",
            color: "#777",
            lineHeight: "1.5",
          }}
        >
          Track your workouts and achieve your fitness goals.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;