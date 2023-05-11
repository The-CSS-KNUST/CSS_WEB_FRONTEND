import React from "react";
import "../css/Newsletter.css";

const Newsletter = () => {
  return (
    <div className="nl-container">
      <h1 className="nl-title">Subscribe to our newsletter</h1>
      <div className="nl-input-container">
        <input
          type="email"
          placeholder="Enter your email"
          className="nl-input"
        />
        <button className="nl-button">Read now</button>
      </div>
    </div>
  );
};

export default Newsletter;
