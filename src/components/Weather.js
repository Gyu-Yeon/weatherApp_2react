import CloudTwoToneIcon from "@mui/icons-material/CloudTwoTone";
import UmbrellaIcon from "@mui/icons-material/Umbrella";
import InvertColorsTwoToneIcon from "@mui/icons-material/InvertColorsTwoTone";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import AcUnitIcon from "@mui/icons-material/AcUnit";
function Weather(props) {
  return (
    <div className="weather-container">
      {props.def === "Clouds" ? <CloudQueueIcon className="sunny" /> : null}
      {props.def === "Clear" ? (
        <LightModeOutlinedIcon className="sunny" />
      ) : null}
      {props.def === "Snow" ? <AcUnitIcon className="sunny" /> : null}
      {props.def === "Haze" ? <CloudTwoToneIcon className="sunny" /> : null}
      {props.def === "Fog" ? <CloudTwoToneIcon className="sunny" /> : null}
      {props.def === "Mist" ? <CloudTwoToneIcon className="sunny" /> : null}
      {props.def === "Rain" ? <UmbrellaIcon className="sunny" /> : null}

      {props.def === "Drizzle" ? (
        <InvertColorsTwoToneIcon className="sunny" />
      ) : null}
    </div>
  );
}

export default Weather;
