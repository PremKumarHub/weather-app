import React, { useState } from "react";
import WeatherCard from "./WeatherCard";  // Import the WeatherCard component

const App = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = "1edf885ae7f3b4d4d235003257c5b42a"; // Replace with your OpenWeather API key

  const fetchWeatherData = async (city) => {
    setLoading(true); // Start loading
    setError(null);   // Clear previous errors
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.statusText}`);
      }

      const data = await response.json();
      if (data && data.main) {
        setWeatherData(data);
      } else {
        setError("No weather data found for the specified city.");
      }
    } catch (error) {
      setError("Failed to fetch weather data: " + error.message);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleSearch = () => {
    if (city.trim()) {
      fetchWeatherData(city);
    } else {
      setError("City name cannot be empty.");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }} className="container">
      <h1>Weather App</h1>

      {/* Input for city */}
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
        style={{
          padding: "10px",
          fontSize: "16px",
          marginRight: "10px",
          width: "200px",
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: "10px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Search
      </button>

      {/* Loading message */}
      {loading && <p>Loading...</p>}

      {/* Error message */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Pass weatherData to WeatherCard component */}
      {weatherData && weatherData.main && (
        <WeatherCard weather={weatherData} />
      )}
    </div>
  );
};

export default App;
