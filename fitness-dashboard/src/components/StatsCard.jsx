import React from "react";

const StatsCard = ({ title, value }) => {
  return (
    <div style={{ background: "#ddd", padding: "10px", margin: "10px" }}>
      <h4>{title}</h4>
      <h2>{value}</h2>
    </div>
  );
};

export default StatsCard;