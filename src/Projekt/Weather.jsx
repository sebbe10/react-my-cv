import { useState } from "react";

import searchImg from "../assets/search.png";

function Weather() {
  const [search, setSearch] = useState("");

  const [weather, setWeather] = useState({});

  const [error, setError] = useState(null);

  const api = {
    key: "1e19d0a4bd135f3eda8274c7ed9ee82d",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const searchButton = () => {
    if (search.trim() !== "") {
      fetch(`${api.base}weather?q=${search}&units=mercit&APPID=${api.key}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Denna stad finns inte");
          }
          return res.json();
        })
        .then((result) => {
          setWeather(result);
          setError(null);
        })
        .catch((error) => {
          console.error("Error", error.message);
          setWeather({});
          setError("Denna stad finns inte");
        });
    } else {
      setWeather({});

      setError("Fyll i en stad");
    }
  };

  return (
    <>
      <div className="weatherHeight">
        <div className="container">
          <div className="inputAndButton">
            <input
              className="searchInput"
              type="text"
              placeholder="Enter a city..."
              onChange={(e) => setSearch(e.target.value)}
            />

            {/* <button className="searchBtn" onClick={searchButton}>
              Sök
            </button> */}
            <img
              className="searchImg"
              src={searchImg}
              alt=""
              onClick={searchButton}
            />
          </div>

          {error && (
            <div className="error" style={{ color: "red", marginTop: "10px" }}>
              {error}
            </div>
          )}
          {weather.main && (
            <div className="layoutWeather">
              <p>Name: {weather.name}</p>
              <p>{(weather.main.temp - 273.15).toFixed(2)} °C</p>
              <p>{weather.weather[0].main}</p>
              <p>{weather.weather[0].description}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Weather;
