import CloudTwoToneIcon from "@mui/icons-material/CloudTwoTone";
import UmbrellaIcon from "@mui/icons-material/Umbrella";
import InvertColorsTwoToneIcon from "@mui/icons-material/InvertColorsTwoTone";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import React from "react";

export default function Weather({ def }) {
  const weatherIcon = (def) => {
    switch (def) {
      case "Clouds":
        return <CloudQueueIcon style={{ fontSize: "150px", color: "white" }} />;
      case "Clear":
        return (
          <LightModeOutlinedIcon
            style={{ fontSize: "150px", color: "white" }}
          />
        );
      case "Snow":
        return <AcUnitIcon style={{ fontSize: "150px", color: "white" }} />;
      case "Haze":
        return (
          <CloudTwoToneIcon style={{ fontSize: "150px", color: "white" }} />
        );
      case "Fog":
        return (
          <CloudTwoToneIcon style={{ fontSize: "150px", color: "white" }} />
        );
      case "Mist":
        return (
          <CloudTwoToneIcon style={{ fontSize: "150px", color: "white" }} />
        );
      case "Rain":
        return <UmbrellaIcon style={{ fontSize: "150px", color: "white" }} />;
      case "Drizzle":
        return (
          <InvertColorsTwoToneIcon
            style={{ fontSize: "150px", color: "white" }}
          />
        );
      default:
        return (
          <LightModeOutlinedIcon
            style={{ fontSize: "150px", color: "white" }}
          />
        );
    }
  };
  return <div className="weather-container">{weatherIcon(def)}</div>;
}
