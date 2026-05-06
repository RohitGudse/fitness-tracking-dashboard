import React, { useState } from "react";

const DarkModeToggle = () => {
  const [dark, setDark] = useState(false);

  return (
    <button onClick={() => setDark(!dark)}>
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;