import axios from "axios";

const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/all";

const getAllCountries = () => {
  return axios.get(baseUrl).then((response) => response.data);
};

const getCapitalWeather = (latlng) => {
  const API_KEY = import.meta.env.VITE_WEATHER_KEY;
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latlng[0]}&lon=${latlng[1]}&appid=${API_KEY}&units=metric`;
  return axios.get(weatherUrl).then((response) => response.data);
};

export default { getAllCountries, getCapitalWeather };
