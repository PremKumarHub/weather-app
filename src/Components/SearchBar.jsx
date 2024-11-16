import React, { useState } from "react";

const SearchBar = ({ fetchWeatherData }) => {
  const [city, setCity] = useState("");

  const handleSearch = async () => {
    if (city) {
      // Make sure you use the correct function passed via props
      await fetchWeatherData(city); 
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
