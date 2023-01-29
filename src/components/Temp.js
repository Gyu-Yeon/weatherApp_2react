function Temp(props) {
  return (
    <div className="temperature-container">
      <span className="temp">{props.temp}° </span>
    </div>
  );
}

export default Temp;
