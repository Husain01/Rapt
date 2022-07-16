import React, { useEffect, useState } from "react";
import './CenterContainer.css';

export const CenterContainer = () => {
  const [time, setTime] = useState(new Date())
    useEffect(() => {
      const timer = setInterval(() => {
        setTime(new Date())
      },1000);
      return () => {
        clearInterval(timer)
      }
    }, [])
    const hour = time.getHours();
    const minute = time.getMinutes();
    const minutes = minute / 10 < 1 ? `0${minute}` : minute;
  
  return (
    <div className="center-container">
      <div className="time">
        <h1>{hour}:{minutes}</h1>
      </div>
      <div className="focus">
        <h2>What is your main focus today?</h2>
        <input type="text" className=" focus-input"/>
        <div className="focus-border"></div>
      </div>
    </div>
  );
};
