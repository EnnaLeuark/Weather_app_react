import React, { useState } from "react";
import WeatherData from "./WeatherData";
import Sunrise from "./Sunrise";
import Forecast from "./Forecast";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
      feels_like: response.data.main.feels_like,
      tempMin: Math.round(response.data.main.temp_min),
      tempMax: Math.round(response.data.main.temp_max),
      /* sunRise: response.data.sys.sunrise * 1000,
      sunSet: response.data.sys.sunset * 1000, */
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "689f4f9c85431deeb4c8640074154109";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="citySearch">
        <div className="row">
          <div className="col-12">
            <div className="input-group citySearch">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Weather in"
                  autoComplete="on"
                  onChange={updateCity}
                />
              </form>
              <button className="btn btn-outline-secondary" type="button">
                Search
              </button>
              <button
                className="btn btn-outline-secondary"
                id="currentLocationButton"
                type="button"
              >
                <i className="fas fa-location-arrow"></i>
              </button>
            </div>
            <WeatherData data={weatherData} />
            <Sunrise data={weatherData} />
            <Forecast coordinates={weatherData.coordinates} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
