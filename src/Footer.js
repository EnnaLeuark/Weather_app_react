import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <p>
        This project was coded by Anne Frenz and is {""}
        <a
          href="https://github.com/EnnaLeuark/Weather_app_react"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub
        </a>
        {""} and hosted on {""}
        <a
          href="https://gracious-snyder-10d72c.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify.
        </a>
      </p>
    </div>
  );
}
