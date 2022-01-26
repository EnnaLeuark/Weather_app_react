import React from "react";

import "./Sunrise.css";

export default function Sunrise(props) {
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
          <span>
            {" "}
            xx:xx
            {/* <FormattedSunrise time={props.data.sunRise} /> */}
          </span>
        </div>
        <div className="sunset">
          <img src="images/sunrise.svg" className="sunIcon" alt="sunset icon" />
          <br />
          <span>
            xx:xx
            {/* <FormattedSunrise time={props.data.sunSet} /> */}
          </span>
        </div>
      </div>
    </>
  );
}
