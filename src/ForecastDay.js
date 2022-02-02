import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function min() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function max() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return days[day];
  }

  return (
    <div>
      <p className="forecastDay">{day()}</p>
      <WeatherIcon code={props.data.weather[0].icon} size={44} />
      <p className="forecastMin-maxTemp">
        {min()}/ {max()}
      </p>
    </div>
  );
}
