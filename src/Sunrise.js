import React from "react";
import "./Sunrise.css";

export default function Sunrise() {
  return (
    <>
      <div className="sunIcons">
        <div className="sunrise">
          <img
            src="images/sunrise.svg"
            className="sunIcon"
            alt="sunrise icon"
          />
          <br />
          <span id="sunriseTime">xx:xx</span>
        </div>
        <div className="sunset">
          <img src="images/sunrise.svg" className="sunIcon" alt="sunset icon" />
          <br />
          <span id="sunsetTime">xx:xx</span>
        </div>
      </div>
    </>
  );
}
