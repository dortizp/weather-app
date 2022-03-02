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

  const getWeather = () => {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then((response) => response.json())
      .then((data) => {
        // setWeather(data.weather[0].description);
        setWeather(data.main.temp);
        console.log(data);
        // console.log(data.weather[0].description);
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
        {query !== "undefined" ? <span>{query}</span> : ""}
        {weather !== "" ? <span>{weather}</span> : ""}
        <div className="location-box">
          <div className="country">Nigeria, NG</div>
          <div className="date">Saturday 11 November 2021</div>
        </div>
        <div className="weather-box">
          <div className="temperature">29°C</div>
          <div className="weather">Clouds</div>
        </div>
      </main>
    </div>
  );
}

export default App;
