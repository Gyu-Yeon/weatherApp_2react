function Top(props) {
  const { today, city, def } = props;
  return (
    <div className="top-container">
      <div className="date-container">
        <span className="today"> {today}</span>
      </div>

      <div className="city-container">
        <h2 className="city">{city}</h2>
      </div>
      <div className="title-container">
        <span className="weather-title">{def}</span>
      </div>
    </div>
  );
}

export default Top;
