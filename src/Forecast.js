import React from "react";

export default function Forecast() {
  return (
    <div className="weatherForecast" id="forecast">
      <div className="row">
        <div className="col-2">
          <p className="forecastDay">Mon</p>
          <img
            className="forecastIcon"
            src="images/clouds.svg"
            alt="cloudy icon"
          />
          <span className="forecast-Temp_min">8°</span>/
          <span className="forecast-Temp_max">15°</span>
        </div>
        <div className="col-2">
          <p className="forecastDay">Tue</p>
          <img
            src="images/drizzelrain.svg"
            alt="rain icon"
            className="forecastIcon"
          />
          <p className="forecastMin-maxTemp">6°C/11°C</p>
        </div>
        <div className="col-2">
          <p className="forecastDay">Wed</p>
          <img src="images/sunny.svg" alt="sun icon" className="forecastIcon" />
          <p className="forecastMin-maxTemp">10°C/16°C</p>
        </div>
        <div className="col-2">
          <p className="forecastDay">Thu</p>
          <img
            src="images/sun_rain.svg"
            alt="sun icon"
            className="forecastIcon"
          />
          <p className="forecastMin-maxTemp">12°C/18°C</p>
        </div>
        <div className="col-2">
          <p className="forecastDay">Fri</p>
          <img
            src="images/clouds.svg"
            alt="sun icon"
            className="forecastIcon"
          />
          <p className="forecastMin-maxTemp">11°C/14°C</p>
        </div>
        <div className="col-2">
          <p className="forecastDay">Sat</p>
          <img
            src="images/rain.svg"
            alt="cloud icon"
            className="forecastIcon"
          />
          <p className="forecastMin-maxTemp">9°C/13°C</p>
        </div>
      </div>
    </div>
  );
}
