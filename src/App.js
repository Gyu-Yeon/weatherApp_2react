/* eslint-diabled*/
import { React, useState, useEffect } from "react";
import "./App.css";
import "./App.scss";
import Modal from "./components/Modal";
import Nav from "./components/Nav";
import Top from "./components/Top";
import Weather from "./components/Weather";
import Temp from "./components/Temp";
import Footer from "./components/Footer";
import axios from "axios";
// import Modal from "bootstrap";

function App() {
  const [city, cityChange] = useState("Seoul");
  const [today, todayChange] = useState("");
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
  const [dateNum, dateNumChange] = useState("");
  const [time, timeChange] = useState("");
  const [modal, modalChange] = useState(false);
  const [temp, tempChange] = useState(0);
  const [clickDay, clickDayChange] = useState(["dateBox", "today", "dateBox"]);
  const [input, inputChange] = useState("");
  const [def, defChange] = useState("");
  const [mainContainer, mainContainerChange] = useState("main-container");

  /*functions*/
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

  const dayChange = (num) => {
    if (num === 0) {
      const days = ["today", "dateBox", "dateBox"];
      clickDayChange([...days]);
    }
    if (num === 1) {
      const days = ["dateBox", "today", "dateBox"];
      clickDayChange([...days]);
    }
    if (num === 2) {
      const days = ["dateBox", "dateBox", "today"];
      clickDayChange([...days]);
    }
  };

  const handleModalChange = () => {
    modalChange(!modal);
  };

  const handleInputChange = (e) => {
    inputChange(e.target.value);
  };

  const handleSubmit = (e, input) => {
    e.preventDefault();
    cityChange(input);
    inputChange("");
    modalChange(!modal);
  };

  const timer = () => {
    setInterval(() => {
      let dt = new Date();
      let hour = dt.getHours();
      let minutes = dt.getMinutes();
      if (hour < 10) {
        hour = "0" + hour;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      timeChange(hour + ":" + minutes);
    }, 1000);
  };

  const getWeather = async () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={apiKey}`
      )
      .then((result) => {
        // console.log(Math.floor(result.data.main.temp - 272));
        // console.log(result.data);
        // console.log(result.data.weather[0].main);
        defChange(result.data.weather[0].main);
        tempChange(Math.floor(result.data.main.temp - 272));
      })
      .catch((error) => {
        console.log("fuck");
        console.log(error);
        alert("invalid city name");
        cityChange("Seoul");
      });
  };

  function background() {
    mainContainerChange(def);
  }

  /*useEffect*/
  useEffect(() => {
    timer();
    const remove = () => {
      clearInterval();
    };
    return remove();
  }, []);

  useEffect(() => {
    getWeather();
  }, [city]);

  useEffect(() => {
    background();
  });

  useEffect(() => {
    todayy();
  }, []);

  /*components*/
  return (
    <div className="App">
      <div className={mainContainer}>
        {modal === true ? (
          <Modal
            handleModalChange={handleModalChange}
            handleInputChange={handleInputChange}
            input={input}
            handleSubmit={handleSubmit}
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

export default App;
