import React, { useState } from "react";

const App = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const API_KEY = '4c34d03e6db64477b39154256241511';  // Make sure to replace this with your actual API key

  const fetchWeatherData = async (city) => {
    try {
      const response = await fetch(`http://api.worldweatheronline.com/premium/v1/weather.ashx?key=${API_KEY}&q=${city}&format=json`);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.log("Failed to fetch weather data:", error);
    }
  };

  const handleSearch = () => {
    if (city) {
      fetchWeatherData(city);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={handleSearch}>Search</button>

      {weatherData && (
        <div>
          <h2>{weatherData.data.request[0].query}</h2>
          <p>Temperature: {weatherData.data.current_condition[0].temp_C}°C</p>
        </div>
      )}
    </div>
  );
};

export default App;
