import React from "react";
import "./WeatherData.css";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";

export default function WeatherData(props) {
  return (
    <div>
      <div className="CityFrame">
        <div className="cityName">
          <p>{props.data.city}, DE</p>
        </div>
      </div>
      <div className="currentWeather">
        <div className="row">
          <div className="col-4">
            <div className="currentTemp">
              <div className="row">
                <div className="col-7">
                  <span id="degreeTemp">5 °C</span>
                </div>
              </div>
            </div>
            <div className="currentTimeDate">
              <p className="lastUpdated">last updated:</p>
              <p>
                <i className="far fa-calendar-alt"></i>
                <span className="currentDate">
                  {""}
                  <FormattedDate date={props.data.date} />
                </span>
              </p>
              <p className="dayTime">
                <i className="far fa-clock"></i>
                <span className="currentTime">
                  {" "}
                  <FormattedTime time={props.data.time} />
                </span>
              </p>
            </div>
          </div>
          <div className="col-4 todayData half-circle">
            <ul className="todayData">
              <li>
                <img
                  className="currentIcon"
                  id="currentIcon"
                  src="images/sunny.svg"
                  alt="weather icon"
                />
              </li>
              <li id="currentDescription">slightly cloudy</li>

              <li>
                <span className="currentMinMax">
                  <span id="currentTemp_min">7°</span>/
                  <span id="currentTemp_max">11°</span>
                </span>
              </li>
            </ul>
          </div>
          <div className="col-4">
            <div className="row">
              <div className="col-6 additionalData_text">
                <ul>
                  <li>Feels like:</li>
                  <li>Humidity:</li>
                  <li>Windspeed:</li>
                </ul>
              </div>
              <div className="col-6 additionalData_values">
                <ul>
                  <li>
                    <span id="feelsLike">30 °C</span>
                  </li>
                  <li>
                    <span id="humidity">45 %</span>
                  </li>
                  <li>
                    <span id="windspeed">37 km/h</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
