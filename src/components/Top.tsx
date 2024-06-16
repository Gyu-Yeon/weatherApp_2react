import { memo, useEffect, useState } from "react";
import { TopProps } from "../types/types";
import React from "react";

const week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const month = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Top = memo(({ city, def }: TopProps) => {
  const [today, todayChange] = useState("");
  const [dateNum, dateNumChange] = useState("");

  function todayy() {
    let d = new Date();
    let thisMonth = month[d.getMonth()];
    let thisWeek = week[d.getDay()];
    let thisDate = d.getDate();
    if (thisDate === 1 || thisDate === 21 || thisDate === 31) {
      dateNumChange("st");
    } else if (thisDate === 2 || thisDate === 22) {
      dateNumChange("nd");
    } else if (thisDate === 3) {
      dateNumChange("rd");
    } else {
      dateNumChange("th");
    }
    todayChange(`${thisWeek}   ${thisDate}${dateNum}   ${thisMonth}`);
  }

  useEffect(() => {
    todayy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="top-container">
      <div className="date-container">
        <span className="today"> {today}</span>
      </div>

      <div className="city-container">
        <h2 className="city">{city}</h2>
      </div>
      <div className="title-container">
        <span className="weather-title">{def}</span>
      </div>
    </div>
  );
});

export default Top;
