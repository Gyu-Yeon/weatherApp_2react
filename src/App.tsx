/* eslint-diabled*/
import { useState } from "react";
import React from "react";
import "./App.css";
import Nav from "./components/Nav.tsx";
import Top from "./components/Top.tsx";
import Weather from "./components/Weather.tsx";
import Temp from "./components/Temp.tsx";
import SearchBox from "./components/SearchBox.tsx";
import { City, Def, Temp as Temperature } from "./types/types.ts";

export default function App() {
  const [city, cityChange] = useState<City>("Seoul");
  const [temp, tempChange] = useState<Temperature>(0);
  const [def, defChange] = useState<Def>("");

  /*components*/

  return (
    <div className={def === "" ? "main-container" : def}>
      <Nav />
      <Top city={city} def={def} />
      <Weather def={def} />
      <Temp temp={temp} />
      <SearchBox
        city={city}
        cityChange={cityChange}
        tempChange={tempChange}
        defChange={defChange}
      />
    </div>
  );
}
