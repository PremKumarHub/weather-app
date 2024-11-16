/* const BASE_URL = "http://api.worldweatheronline.com/premium/v1/weather.ashx";
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const fetchWeatherData = async (city) => {
  const url = `${BASE_URL}?key=${API_KEY}&q=${city}&format=json`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch weather data.");
    }
    const data = await response.json();
    return data.data.current_condition[0]; // Return weather data
  } catch (error) {
    console.error(error);
    throw error;
  }
};
 */