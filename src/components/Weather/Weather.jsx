import axios from "axios";
import React, { useEffect, useState } from "react";
import './Weather.css'

export const Weather = () => {
  let latitude, longitude;
  const APIKey = import.meta.env.VITE_WEATHER_KEY;
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [weatherData, setweatherData] = useState();
  const weatherAPIUrl = `https://api.weatherapi.com/v1/current.json?key=${APIKey}&q=${position.latitude},${position.longitude}`;
  const savePositionToState = (position) => {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    setPosition({ latitude, longitude });
  };

  const getWeather = async () => {
    try {
      window.navigator.geolocation.getCurrentPosition(savePositionToState);
      const { data } = await axios.get(weatherAPIUrl);
      setweatherData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeather();
  }, [position.latitude, position.longitude]);

  return (
    <div className="weather-container">
      <img src={weatherData?.current.condition.icon} alt="weather-icon" />
      <div>
        <p>{weatherData?.current.temp_c} &deg;</p>
        <p>
          {weatherData?.location.name}, {weatherData?.location.country}
        </p>
      </div>
    </div>
  );
};
