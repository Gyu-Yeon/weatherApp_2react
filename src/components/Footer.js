import InvertColorsTwoToneIcon from "@mui/icons-material/InvertColorsTwoTone";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";

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
            <CloudQueueIcon className="sun" />
          </div>
        </div>
        <div className="sunset-box timetable-box">
          <div className="eachtime">
            <span>16:00</span>
          </div>
          <div className="eachWeather">
            <CloudQueueIcon className="sun" />
          </div>
        </div>
        <div className="eve-box timetable-box">
          <div className="eachtime">
            <span>18:00</span>
          </div>
          <div className="eachWeather">
            <CloudQueueIcon className="sun" />
          </div>
        </div>
      </div>
      <div className="footer-container4">
        <div className="eachTimeWeather1 wbox">
          <span>18°</span>
        </div>
        <div className="eachTimeWeather2 wbox">
          <span>20°</span>
        </div>
        <div className="eachTimeWeather3 wbox">
          <span>19°</span>
        </div>
        <div className="eachTimeWeather4 wbox">
          <span>18°</span>
        </div>
        <div className="eachTimeWeather5 wbox">
          <span>15°</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
