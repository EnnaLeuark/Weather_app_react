import React from "react";
import "./WeatherData.css";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import WeatherTemp from "./WeatherTemp";

export default function WeatherData(props) {
  return (
    <div className="weatherInfo">
      <div className="CityFrame">
        <div className="cityName">
          <p>{props.data.city}</p>
        </div>
      </div>
      <div className="currentWeather">
        <div className="row">
          <div className="col-4">
            <div className="currentTemp">
              <div className="row">
                <div className="col-7">
                  <div className="degreeTemp">
                    <WeatherTemp celsius={props.data.temperature} />
                  </div>
                </div>
              </div>
            </div>
            <div className="currentTimeDate">
              <p className="lastUpdated">last updated:</p>
              <div>
                <i className="far fa-calendar-alt"></i>
                <span className="currentDate">
                  {""}
                  <FormattedDate date={props.data.date} />
                </span>
              </div>
              <div className="dayTime">
                <i className="far fa-clock"></i>
                <span className="currentTime">
                  {" "}
                  <FormattedTime time={props.data.time} />
                </span>
              </div>
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
              <li className="currentDescription">{props.data.description}</li>

              <li className="currentMinMax">xx °/ xx °</li>
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
                  <li> xx °C</li>
                  <li>{props.data.humidity} %</li>
                  <li>{props.data.wind} km/h</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
