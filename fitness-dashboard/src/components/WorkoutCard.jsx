import React from "react";

const WorkoutCard = ({ workout = {} }) => {
  const workoutDetails = [
    ["Workout", workout.workoutName ?? "Unknown Workout"],
    ["Category", workout.category ?? "General Fitness"],
    ["Duration", `${workout.duration ?? 0} Minutes`],
    ["Calories", `${workout.calories ?? 0} kcal`],
    ["Difficulty", workout.difficulty ?? "Beginner"],
    ["Trainer", workout.trainer ?? "Self Training"],
    ["Date", workout.date ?? "Not Available"],
    ["Status", workout.status ?? "Pending"],
  ];

  return (
    <article style={styles.card}>
      <header style={styles.header}>
        <div style={styles.icon}>💪</div>

        <div>
          <h2 style={styles.title}>Workout Summary</h2>
          <p style={styles.subtitle}>Your fitness activity</p>
        </div>
      </header>

      <section style={styles.details}>
        {workoutDetails.map(([label, value]) => (
          <div style={styles.row} key={label}>
            <span style={styles.label}>{label}</span>
            <span
              style={{
                ...styles.value,
                ...(label === "Status"
                  ? getStatusStyle(value)
                  : {}),
              }}
            >
              {value}
            </span>
          </div>
        ))}
      </section>

      <footer style={styles.footer}>
        <span>🔥</span>
        <p>Keep tracking your workouts and stay consistent!</p>
      </footer>
    </article>
  );
};

const getStatusStyle = (status) => {
  const normalizedStatus = String(status).toLowerCase();

  if (normalizedStatus === "completed") {
    return {
      color: "#16803c",
      fontWeight: "700",
    };
  }

  if (normalizedStatus === "in progress") {
    return {
      color: "#c56a00",
      fontWeight: "700",
    };
  }

  return {
    color: "#777",
    fontWeight: "600",
  };
};

const styles = {
  card: {
    width: "350px",
    maxWidth: "calc(100% - 32px)",
    margin: "24px auto",
    padding: "22px",
    background: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "16px",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
    fontFamily: "Arial, sans-serif",
    boxSizing: "border-box",
  },

  header: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    paddingBottom: "18px",
    borderBottom: "1px solid #eeeeee",
  },

  icon: {
    width: "48px",
    height: "48px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f3f4f6",
    borderRadius: "12px",
    fontSize: "24px",
  },

  title: {
    margin: 0,
    color: "#1f2937",
    fontSize: "21px",
  },

  subtitle: {
    margin: "4px 0 0",
    color: "#888",
    fontSize: "13px",
  },

  details: {
    marginTop: "18px",
  },

  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "15px",
    padding: "11px 0",
    borderBottom: "1px solid #f1f1f1",
  },

  label: {
    color: "#555",
    fontSize: "14px",
    fontWeight: "600",
  },

  value: {
    color: "#222",
    fontSize: "14px",
    textAlign: "right",
  },

  footer: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginTop: "20px",
    paddingTop: "16px",
    color: "#666",
    fontSize: "13px",
    lineHeight: "1.5",
  },
};

export default WorkoutCard;