import React, { useEffect, useState } from "react";
import {MdEdit, MdClear} from 'react-icons/md';
import "./CenterContainer.css";

export const CenterContainer = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const hour = time.getHours();
  const minute = time.getMinutes();
  const minutes = minute / 10 < 1 ? `0${minute}` : minute;

  const [focusText, setFocusText] = useState('');
  const [checked, setChecked] = useState(false);
  const [focus, setFocus] = useState(localStorage.getItem("focusText"));

  const focusHandler = () => {
    localStorage.setItem("focusText", focusText);
    setFocus(localStorage.getItem("focusText"));
  }

  const editHandler = () => {
    setFocus("");
    setChecked(false);
  }

  const deleteHandler = () => {
    localStorage.removeItem("focusText");
    setFocus('');
    setFocusText('');
  }

  useEffect(() => {
    setFocusText(localStorage.getItem("focusText"))
  
  }, [])
  

  return (
    <div className="center-container">
      <div className="time">
        <h1>
          {hour}:{minutes}
        </h1>
      </div>
      <div className="focus">
        <h2>What is your main focus today?</h2>
        {focus ? (
          <div className="focus-field">
            <input type="checkbox" className="focus-checkbox" onChange={() => setChecked(!checked)}/>
            <p className={"focus-text " + (checked ? "checked" : "")} >{focus}</p>
          <div className="icon-container">

            <MdEdit className="icon" onClick={editHandler}/>
            <MdClear className="icon" onClick={deleteHandler}/>
          </div>
          </div>
        ) : (
          <>
          <input type="text" className=" focus-input" value={focusText}
          onChange={(e) => setFocusText(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" ? focusHandler() : ""} />
          <div className="focus-border"></div>
          </>
        )}
      </div>
    </div>
  );
};
