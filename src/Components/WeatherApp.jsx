import React, { useState } from "react";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  // Step 3: Add the fetchWeatherData function here
  const fetchWeatherData = async (city) => {
    const BASE_URL = "http://api.worldweatheronline.com/premium/v1/weather.ashx";
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;  // This pulls the API key from the .env file
  
    const url = `${BASE_URL}?key=${API_KEY}&q=${city}&format=json`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch weather data.");
      }
      const data = await response.json();
      setWeather(data.data.current_condition[0]); // Set the weather data
    } catch (error) {
      console.error(error);
    }
  };
  

  const handleSearch = () => {
    if (city) {
      fetchWeatherData(city); // Call the API when the user clicks "Search"
    }
  };

  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {weather && (
        <div>
          <h2>Weather in {city}</h2>
          <p>Temperature: {weather.temp_C}°C</p>
          <p>Condition: {weather.weatherDesc[0].value}</p>
          <p>Humidity: {weather.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
