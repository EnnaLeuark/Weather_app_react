import React from "react";
import "./Sunrise.css";

export default function Sunrise(props) {
  function formatTime(timestamp) {
    let time = new Date(timestamp);
    let hours = time.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }

    let minutes = time.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    return (
      <span>
        {hours}:{minutes}
      </span>
    );
  }

  return (
    <div>
      <div className="sunIcons">
        <div className="sunrise">
          <img
            src="images/sunrise.svg"
            className="sunIcon"
            alt="sunrise icon"
          />
          <br />
          <span> {formatTime(props.data.sunRise)}</span>
        </div>
        <div className="sunset">
          <img src="images/sunrise.svg" className="sunIcon" alt="sunset icon" />
          <br />
          <span>{formatTime(props.data.sunSet)}</span>
        </div>
      </div>
    </div>
  );
}
