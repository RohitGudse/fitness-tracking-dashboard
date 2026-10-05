import React from "react";

const Notification = ({ message }) => {
  const notificationMessage = message || "You have a new notification.";

  return (
    <section className="notification">
      <span className="notification-icon">🔔</span>
      <p className="notification-message">{notificationMessage}</p>
    </section>
  );
};

export default Notification;