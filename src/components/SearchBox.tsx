import React from "react";
import { memo, useCallback, useEffect, useState } from "react";

import axios from "axios";
import Button from "@mui/material/Button";

import { SearchBoxProps } from "../types/types";

const SearchBox = ({ defChange, tempChange, cityChange }: SearchBoxProps) => {
  const [input, inputChange] = useState("");

  const handleInputChange = useCallback((e) => {
    inputChange(e.target.value);
  }, []);

  const getWeather = async function (city) {
    try {
      const result = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cdd68e428ad6e47cef9e3df3c2cca158`
      );
      console.log(result);
      defChange(result.data.weather[0].main);
      tempChange(Math.floor(result.data.main.temp - 272));
    } catch (error) {
      alert("invalid city name");
      cityChange("Invalid");
    }
  };

  const onSubmitHandle = (e, cityName) => {
    e.preventDefault();
    getWeather(cityName);
    cityChange(cityName);
  };

  useEffect(() => {
    getWeather("Seoul");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="footer-container">
      <form
        onSubmit={(e) => {
          onSubmitHandle(e, input);
          inputChange("");
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "15px",
          }}
        >
          <input
            className="input"
            value={input}
            onChange={handleInputChange}
            style={{ marginTop: "30px" }}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button variant="contained" className="change" type="submit">
            Change
          </Button>
        </div>
      </form>
    </section>
  );
};

export default memo(SearchBox);
