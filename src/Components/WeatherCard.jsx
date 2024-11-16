import React from "react";


function WeatherCard({ weather }) {
  return (
    <div className="weather-card">
      <h2>{weather.name}</h2>
      <p className="weather-description">{weather.weather[0].description}</p>
      <p className="temp">Temperature: {weather.main.temp}°C</p>
      <p className="humidity">Humidity: {weather.main.humidity}%</p>
      <p className="wind-speed">Wind Speed: {weather.wind.speed} m/s</p>
    </div>
  );
}

export default WeatherCard;
