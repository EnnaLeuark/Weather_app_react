import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <p>
        This project was coded by Anne Krauel and is {""}
        <a
          href="https://github.com/EnnaLeuark/weather_app"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub
        </a>
        {""} and hosted on {""}
        <a
          href="https://infallible-tereshkova-0fcc2d.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify.
        </a>
      </p>
    </div>
  );
}
