import sunny from "./sunny.png";
import { React, useState, useEffect } from "react";
import "./App.css";
import "./App.scss";
import MenuIcon from "@mui/icons-material/Menu";
import axios from "axios";

function App() {
  let [city, cityChange] = useState("London");
  let [today, todayChange] = useState("Sunday 23rd January");
  let [time, timeChange] = useState("");
  let [hh, hhChange] = useState("");
  let [mm, mmChange] = useState("");
  function timer() {
    setInterval(() => {
      let dt = new Date();
      hhChange((hh = dt.getHours()));
      if (hh < 10) {
        hhChange((hh = "0" + hh));
      }

      mmChange((mm = dt.getMinutes()));
      if (mm < 10) {
        mmChange((mm = "0" + mm));
      }

      timeChange(hh + ":" + mm);
    }, 1000);
  }
  useEffect(() => {
    timer();
  });

  return (
    <div className="App">
      <div className="main-container">
        <Nav time={time} />
        <Top city={city} today={today} />
        <Weather />
        <Temp />
        <Footer />
      </div>
    </div>
  );
}

function Nav(props) {
  return (
    <div className="nav-container">
      <div className="hamburger-menu-container">
        <MenuIcon className="ham" />
      </div>
      <div className="time-container">
        <span className="time"> {props.time}</span>
      </div>
    </div>
  );
}

function Top(props) {
  return (
    <div className="top-container">
      <div className="date-container">
        <span className="today"> {props.today}</span>
      </div>

      <div className="city-container">
        <h2
          className="city"
          onClick={() => {
            axios
              .get(
                "http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=dec0e12c272759881360e59f508b538c"
              )
              .then((result) => {
                console.log(Math.floor(result.data.main.temp - 273));
                console.log(result.data);
              })
              .catch(() => {
                console.log("we");
              });
          }}
        >
          {props.city}
        </h2>
      </div>
      <div className="title-container">
        <span className="weather-title">Sunny and Cloud</span>
      </div>
    </div>
  );
}

function Weather() {
  return (
    <div className="weather-container">
      <img className="suuny" src={sunny} alt="" />
    </div>
  );
}

function Temp() {
  return (
    <div className="temperature-container">
      <span className="temp">22 </span>
    </div>
  );
}
function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-container-1"></div>
      <div className="footer-container-2">
        <div className="yesterday dateBox">
          <p>Yesterday</p>
        </div>
        <div className="today dateBox">
          <p>Today</p>
        </div>
        <div className="tomorrow dateBox">
          <p>Tomorrow</p>
        </div>
      </div>
      <div className="blank"></div>
      <div className="footer-container-3">
        <div className="morning-box timetable-box">
          <div className="eachtime">
            <span>10:00</span>
          </div>
          <div className="eachWeather">
            <img src={sunny} alt="" />
          </div>
        </div>
        <div className="lunch-box timetable-box">
          <div className="eachtime">
            <span>12:00</span>
          </div>
          <div className="eachWeather">
            <img src={sunny} alt="" />
          </div>
        </div>
        <div className="half-box timetable-box">
          <div className="eachtime">
            <span>14:00</span>
          </div>
          <div className="eachWeather">
            <img src={sunny} alt="" />
          </div>
        </div>
        <div className="sunset-box timetable-box">
          <div className="eachtime">
            <span>16:00</span>
          </div>
          <div className="eachWeather">
            <img src={sunny} alt="" />
          </div>
        </div>
        <div className="eve-box timetable-box">
          <div className="eachtime">
            <span>18:00</span>
          </div>
          <div className="eachWeather">
            <img src={sunny} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// 기본페이지
// 모달창 열어서 검색기능 추가
// 도시이름으로 검색 하면 날씨 온도, ui, 이름 갖고오기.
//
