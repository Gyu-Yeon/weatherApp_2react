import MenuIcon from "@mui/icons-material/Menu";

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

export default Nav;
