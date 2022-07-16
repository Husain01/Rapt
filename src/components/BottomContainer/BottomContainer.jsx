import React, { useEffect, useState } from "react";
import "./BottomContainer.css";
import axios from "axios";

export const BottomContainer = () => {
  const [quote, setQuote] = useState("");
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const getQuote = async () => {
    try {
      const { data } = await axios.get("https://zenquotes.io/api/random");
      console.log(data[0]);
      setQuote(data[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="bottom-container">
      <div className="quote"onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <h4 className="quote-text">“{quote.q}”</h4>
        <p className="quote-author"> ~ {quote.a}</p>
      </div>
    </div>
  );
};
