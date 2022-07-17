import React from "react";
import { Weather } from "../Weather/Weather";
import "./TopContainer.css";

const TopContainer = () => {
  let greet;
  const user = localStorage.getItem("userName");
  const time = new Date();
  const hour = time.getHours();
  if (hour < 5 || hour >= 22) {
    greet = "Good Night";
  } else if (hour < 12) {
    greet = "Good Morning";
  } else if (hour < 17) {
    greet = "Good Afternoon";
  } else if (hour < 22) {
    greet = "Good Evening";
  }
  return (
    <div className="top-container">
      <div className="greeting">
        <h3>
          {greet}, {user}
        </h3>
      </div>
      <div className="weather"><Weather/></div>
    </div>
  );
};

export default TopContainer;
