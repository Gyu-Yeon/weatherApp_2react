import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState, memo } from "react";
import React from "react";

const Nav = memo(() => {
  const [time, timeChange] = useState("");

  useEffect(() => {
    const tick = () => {
      let dt = new Date();
      let hour: string | number = dt.getHours();
      let minutes: string | number = dt.getMinutes();
      if (hour < 10) {
        hour = "0" + hour;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      timeChange(hour + ":" + minutes);
    };
    const intervalId = setInterval(tick, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="nav-container">
      <div className="hamburger-menu-container">
        <MenuIcon className="ham" />
      </div>
      <div className="time-container">
        <span className="time"> {time}</span>
      </div>
    </div>
  );
});

export default Nav;
