import React from 'react';
import './css/Notification.css';
function Notification() {
  return (
    <div className="container">
      <h1>Position Relative & Absolute Task</h1>
      
      <div className="profile-card">
        <div className="notification-badge">3</div>
        <img 
          src={"https://wallpapercave.com/wp/wp7151807.jpg"} 
          alt="Profile" 
          className="profile-image"
        />
        <h3>John Doe</h3>
        <p>Web Developer</p>
      </div>

    </div>
  );
}

export default Notification;