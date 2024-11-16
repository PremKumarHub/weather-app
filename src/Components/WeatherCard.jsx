import React from "react";

function WeatherCard({ weather }) {
  return (
    <div className="weather-card" style={{ padding: "15px", border: "1px solid #ccc", borderRadius: "8px", marginTop: "20px" }}>
      <h2>{weather.name}</h2>
      <p>{weather.weather[0].description}</p>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
    </div>
  );
}

export default WeatherCard;
