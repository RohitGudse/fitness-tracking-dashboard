import React from "react";
import PropTypes from "prop-types";

/**
 * StatsCard Component
 * -------------------
 * Reusable dashboard card for displaying statistics.
 *
 * Props:
 * title      -> Card Heading
 * value      -> Main Value
 * icon       -> Emoji/Icon
 * bgColor    -> Background Color
 * textColor  -> Text Color
 */

const StatsCard = ({
  title,
  value,
  icon,
  bgColor,
  textColor,
}) => {
  const cardStyle = {
    backgroundColor: bgColor,
    color: textColor,
    borderRadius: "12px",
    padding: "20px",
    width: "250px",
    minHeight: "150px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    transition: "0.3s ease",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const titleStyle = {
    fontSize: "18px",
    fontWeight: "600",
    margin: "0",
    opacity: "0.8",
  };

  const valueStyle = {
    fontSize: "36px",
    fontWeight: "bold",
    margin: "10px 0",
  };

  const iconStyle = {
    fontSize: "35px",
    textAlign: "right",
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      <div style={iconStyle}>{icon}</div>

      <div>
        <h4 style={titleStyle}>{title}</h4>
        <h2 style={valueStyle}>{value}</h2>
      </div>
    </div>
  );
};

StatsCard.defaultProps = {
  title: "Statistics",
  value: "0",
  icon: "📊",
  bgColor: "#ffffff",
  textColor: "#333333",
};

StatsCard.propTypes = {
  title: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  icon: PropTypes.node,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default StatsCard;