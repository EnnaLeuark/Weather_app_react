import React from "react";
import "./Sunrise.css";

export default function Sunrise() {
  return (
    <>
      <div className="sunrise">
        <img src="images/sunrise.svg" className="sunIcon" alt="sunrise icon" />
        <br />
        <span id="sunriseTime">05:43</span>
      </div>
      <div className="sunset">
        <img src="images/sunrise.svg" className="sunIcon" alt="sunset icon" />
        <br />
        <span id="sunsetTime">21:51</span>
      </div>
    </>
  );
}
