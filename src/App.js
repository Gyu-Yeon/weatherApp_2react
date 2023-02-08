/* eslint-diabled*/
import { React, useState, useEffect, useReducer } from "react";
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

// function reducer(state, action) {}

function App() {
  // const [state, dispatch] = useReducer(reducer);
  let [city, cityChange] = useState("Seoul");
  let [today, todayChange] = useState("");
  let [week, weekChange] = useState([
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]);
  let [month, monthChange] = useState([
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
  ]);
  let [dateNum, dateNumChange] = useState("");
  let [time, timeChange] = useState("");
  let [hh, hhChange] = useState("");
  let [mm, mmChange] = useState("");
  let [modal, modalChange] = useState(false);
  let [temp, tempChange] = useState(0);
  let [clickDay, clickDayChange] = useState(["dateBox", "today", "dateBox"]);
  let [input, inputChange] = useState("");
  let [def, defChange] = useState("");
  let [mainContainer, mainContainerChange] = useState("main-container");

  // functions
  function todayy() {
    let d = new Date();
    let thisMonth = month[d.getMonth()];
    let thisWeek = week[d.getDay()];
    let thisDate = d.getDate();
    if (thisDate === 1 || thisDate === 21 || thisDate === 31) {
      dateNum = "st";
    } else if (thisDate === 2 || thisDate === 22) {
      dateNum = "nd";
    } else if (thisDate === 3) {
      dateNum = "rd";
    } else {
      dateNum = "th";
    }
    todayChange(`${thisWeek}   ${thisDate}${dateNum}   ${thisMonth}`);
  }
  const dayChange = (num) => {
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
  };

  const getWeather = async () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={apiKEY}`
      )
      .then((result) => {
        // console.log(Math.floor(result.data.main.temp - 272));
        // console.log(result.data);
        // console.log(result.data.weather[0].main);
        defChange(result.data.weather[0].main);
        tempChange(Math.floor(result.data.main.temp - 272));
      })
      .catch(() => {
        console.log("fuck");
        alert("invalid city name");
        cityChange("Seoul");
      });
  };

  function background() {
    mainContainerChange(def);
  }

  //useEffect
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

  //components
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
