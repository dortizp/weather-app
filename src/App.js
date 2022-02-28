import "./App.css";

const api = {
  key: "32f6fa4808fbd4854dd581b7d40b707d",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  return (
    <div className="app warm">
      <main>
        <div className="search-box">
          <input className="search-bar" placeholder="Search..." />
        </div>
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
