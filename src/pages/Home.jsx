import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";

function Home() {
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = (data) => {
    setWeatherData(data);
  };

  return (
    <div className="home">
      <h1>Weather App</h1>
      <SearchBar onSearch={handleSearch} />
      {weatherData && <WeatherCard weather={weatherData} />}
    </div>
  );
}

export default Home;
