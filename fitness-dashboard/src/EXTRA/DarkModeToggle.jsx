
import React, { useState } from "react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((previousMode) => !previousMode);
  };

  const themeStyles = {
    backgroundColor: isDarkMode ? "#1e293b" : "#f8fafc",
    color: isDarkMode ? "#ffffff" : "#1e293b",
    minHeight: "250px",
    padding: "30px",
    textAlign: "center",
    borderRadius: "12px",
    transition: "all 0.4s ease",
  };

  return (
    <div style={themeStyles}>
      <h2>{isDarkMode ? "🌙 Dark Theme" : "☀️ Light Theme"}</h2>

      <p>
        {isDarkMode
          ? "You are currently using dark mode."
          : "You are currently using light mode."}
      </p>

      <button
        onClick={toggleTheme}
        style={{
          padding: "12px 24px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
          backgroundColor: isDarkMode ? "#facc15" : "#2563eb",
          color: isDarkMode ? "#1e293b" : "#ffffff",
        }}
      >
        {isDarkMode ? "Switch to Light ☀️" : "Switch to Dark 🌙"}
      </button>
    </div>
  );
};

export default DarkModeToggle;
