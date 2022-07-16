import React, { useState } from "react";
import "./Welcome.css";

export const Welcome = () => {
  const [userName, setUserName] = useState();
  const setUsernameHandler = (e) => {
    localStorage.setItem("userName", userName);
    window.location.reload(false);
  };
  return (
    <div className="welcome-main">
      <h1 className="welcome-text">Hi, What is your name?</h1>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setUserName(e.target.value)}
        className="input welcome-input"
      />
      <button onClick={setUsernameHandler}>
        <div class="svg-wrapper-1">
          <div class="svg-wrapper">
            <i class="fas fa-angle-double-right"></i>
          </div>
        </div>
        <span>Next</span>
      </button>
    </div>
  );
};
