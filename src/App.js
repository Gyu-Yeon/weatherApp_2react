/* eslint-diabled*/
import sunny from "./sunny.png";
import { React, useState, useEffect } from "react";
import "./App.css";
import "./App.scss";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import CloudTwoToneIcon from "@mui/icons-material/CloudTwoTone";
import axios from "axios";

function App() {
  let [city, cityChange] = useState("Seoul");
  let [today, todayChange] = useState("Sunday 23rd January");
  let [time, timeChange] = useState("");
  let [hh, hhChange] = useState("");
  let [mm, mmChange] = useState("");
  let [modal, modalChange] = useState("false");
  let [temp, tempChange] = useState(0);
  let [clickDay, clickDayChange] = useState(["dateBox", "today", "dateBox"]);
  let [input, inputChange] = useState("");
  let [def, defChange] = useState("");
  // let [mainContainer, mainContainerChange] = ["main-container"];

  function dayChange(num) {
    if (num === 0) {
      let days = ["today", "dateBox", "dateBox"];
      clickDayChange([...days]);
    }
    if (num === 1) {
      let days = ["dateBox", "today", "dateBox"];
      clickDayChange([...days]);
    }
    if (num === 2) {
      let days = ["dateBox", "dateBox", "today"];
      clickDayChange([...days]);
    }
  }

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
  }, []);

  // useEffect(() => {
  //   if (hh > 18 && hh < 9) {
  //     mainContainerChange(["main-container-night"]);
  //   }
  //   if (hh < 18 && hh > 9) {
  //     mainContainerChange(["main-container"]);
  //   }
  // }, []);

  function getWeather() {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dec0e12c272759881360e59f508b538c`
      )
      .then((result) => {
        console.log(Math.floor(result.data.main.temp - 272));
        console.log(result.data);
        console.log(result.data.weather[0].main);
        defChange(result.data.weather[0].main);
        tempChange(Math.floor(result.data.main.temp - 272));
      })
      .catch(() => {
        console.log("fuck");
        alert("invalid");
      });
  }

  useEffect(() => {
    getWeather();
  }, [city]);

  return (
    <div className="App">
      <div className="main-container">
        {modal === true ? (
          <Modal
            modalChange={modalChange}
            modal={modal}
            inputChange={inputChange}
            input={input}
            cityChange={cityChange}
          />
        ) : null}
        <Nav time={time} modal={modal} modalChange={modalChange} />
        <Top city={city} today={today} def={def} />
        <Weather def={def} />
        <Temp temp={temp} />
        <Footer
          clickDay={clickDay}
          clickDayChange={clickDayChange}
          dayChange={dayChange}
        />
      </div>
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <CloseIcon
        className="close"
        onClick={() => {
          props.modalChange(!props.modal);
        }}
      />

      <TextField
        id="filled-basic"
        label="City"
        variant="filled"
        className="write"
        onChange={(e) => {
          props.inputChange(e.target.value);
        }}
      />
      <Button
        variant="contained"
        color="success"
        className="change"
        onClick={() => {
          props.cityChange(props.input);
        }}
      >
        Change
      </Button>
    </div>
  );
}

function Nav(props) {
  return (
    <div className="nav-container">
      <div
        className="hamburger-menu-container"
        onClick={() => {
          props.modalChange(true);
        }}
      >
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
        <h2 className="city">{props.city}</h2>
      </div>
      <div className="title-container">
        <span className="weather-title">{props.def}</span>
      </div>
    </div>
  );
}

function Weather(props) {
  return (
    <div className="weather-container">
      {props.def === "Clouds" ? <CloudQueueIcon className="sunny" /> : null}
      {props.def === "Clear" ? (
        <LightModeOutlinedIcon className="sunny" />
      ) : null}
      {props.def === "Snow" ? <AcUnitIcon className="sunny" /> : null}
      {props.def === "Haze" ? <CloudTwoToneIcon className="sunny" /> : null}
    </div>
  );
}

function Temp(props) {
  return (
    <div className="temperature-container">
      <span className="temp">{props.temp}° </span>
    </div>
  );
}
function Footer(props) {
  return (
    <div className="footer-container">
      <div className="footer-container-1"></div>
      <div className="footer-container-2">
        <div className={props.clickDay[0]}>
          <p
            onClick={(e) => {
              props.dayChange(0);
            }}
          >
            Yesterday
          </p>
        </div>
        <div className={props.clickDay[1]}>
          <p
            onClick={(e) => {
              props.dayChange(1);
            }}
          >
            Today
          </p>
        </div>
        <div className={props.clickDay[2]}>
          <p
            onClick={(e) => {
              props.dayChange(2);
            }}
          >
            Tomorrow
          </p>
        </div>
      </div>
      <div className="blank"></div>
      <div className="footer-container-3">
        <div className="morning-box timetable-box">
          <div className="eachtime">
            <span>10:00</span>
          </div>
          <div className="eachWeather">
            <LightModeOutlinedIcon className="sun" />
          </div>
        </div>
        <div className="lunch-box timetable-box">
          <div className="eachtime">
            <span>12:00</span>
          </div>
          <div className="eachWeather">
            <LightModeOutlinedIcon className="sun" />
          </div>
        </div>
        <div className="half-box timetable-box">
          <div className="eachtime">
            <span>14:00</span>
          </div>
          <div className="eachWeather">
            <LightModeOutlinedIcon className="sun" />
          </div>
        </div>
        <div className="sunset-box timetable-box">
          <div className="eachtime">
            <span>16:00</span>
          </div>
          <div className="eachWeather">
            <LightModeOutlinedIcon className="sun" />
          </div>
        </div>
        <div className="eve-box timetable-box">
          <div className="eachtime">
            <span>18:00</span>
          </div>
          <div className="eachWeather">
            <LightModeOutlinedIcon className="sun" />
          </div>
        </div>
      </div>
      <div className="footer-container4">
        <div className="eachTimeWeather1 wbox">
          <span>18°</span>
        </div>
        <div className="eachTimeWeather2 wbox">
          <span>18°</span>
        </div>
        <div className="eachTimeWeather3 wbox">
          <span>18°</span>
        </div>
        <div className="eachTimeWeather4 wbox">
          <span>18°</span>
        </div>
        <div className="eachTimeWeather5 wbox">
          <span>18°</span>
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
