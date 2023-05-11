import React from "react";
import "../css/Connect.css";

const Connects = () => {
  return (
    <div className="connect-container">
      <div>
        <h2 className="connect-title">Connect</h2>
        <ul className="connect-list">
          <li>Blog</li>
          <li>LinkedIn</li>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
      </div>
      <div>
        <h2 className="connect-title">Programs</h2>
        <ul className="connect-list">
          <li>School of Groups</li>
          <li>Tell Your Story</li>
          <li>PC Clinic</li>
        </ul>
      </div>
    </div>
  );
};

export default Connects;
