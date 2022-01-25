import React from "react";

export default function FormattedDate() {
  let now = new Date();
  let day = now.getUTCDate();
  if (day < 10) {
    day = `0${day}`;
  }
  let months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  let monthNumber = months[now.getMonth()];
  let year = now.getFullYear();

  return (
    <div>
      {day}.{monthNumber}.{year}
    </div>
  );
}
