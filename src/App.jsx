import React, { useState } from "react";
import WeatherCard from "./Components/WeatherCard"; // Import the WeatherCard component
import bgImage from './assets/bg.jpg'; // Import the background image

const App = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = "1edf885ae7f3b4d4d235003257c5b42a"; // Replace with your OpenWeather API key

  const fetchWeatherData = async (city) => {
    setLoading(true); // Start loading
    setError(null); // Clear previous errors
    setWeatherData(null); // Clear previous weather data

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
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Full viewport height
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
      <h1 style={{ color: 'white', fontSize: '36px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
        Weather App
      </h1>

      {/* Input for city and search button */}
      <div style={{ margin: '20px 0', display: 'flex', alignItems: 'center' }}>
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
            borderRadius: "4px",
            border: "1px solid #ccc",
            outline: "none",
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: "10px",
            fontSize: "16px",
            cursor: "pointer",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Search
        </button>
      </div>

      {/* Loading message */}
      {loading && <p style={{ color: 'white' }}>Loading...</p>}

      {/* Error message */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Pass weatherData to WeatherCard component if it's valid */}
      {weatherData && weatherData.main && !error && (
        <WeatherCard weather={weatherData} />
      )}
    </div>
  );
};

export default App;
