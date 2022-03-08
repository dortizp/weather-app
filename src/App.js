import "./App.css";
import { useState } from "react";
import { SearchBar } from "./components/SearchBar";

const api = {
  key: "32f6fa4808fbd4854dd581b7d40b707d",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState("");
  const [temperature, setTemperature] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const getWeather = () => {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then((response) => response.json())
      .then((data) => {
        setTemperature(data.main.temp);
        setWeather(data.weather[0].main);
        setCity(data.name);
        setCountry(data.sys.country);
        console.log(data);
        setQuery("");
      });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      getWeather();
    }
  };

  return (
    <div className="app warm">
      <main>
        <div className="search-box">
          <SearchBar
            propQuery={query}
            propSetQuery={setQuery}
            propSearch={handleKeyPress}
          />
        </div>
        <div className="location-box">
          {city !== "undefined" ? (
            <div className="country">
              {city}, {country}
            </div>
          ) : (
            ""
          )}
          <div className="date">Saturday 11 November 2021</div>
        </div>
        <div className="weather-box">
          <div className="temperature">{Math.round(temperature)}°C</div>
          <div className="weather">{weather}</div>
        </div>
      </main>
    </div>
  );
}

export default App;
