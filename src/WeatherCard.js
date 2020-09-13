import React, { useState } from 'react';
import './weatherCard.css';

const WeatherCard = (props) => {
  let initialTemp = Math.trunc(props.data.main.temp - 273.1); // default temperature is in celcius
  const [temperature, setTemp] = useState(initialTemp);
  const [scale, setScale] = useState('C');
  let state = props.data.name;
  let country = props.data.sys.country;
  let location = `${state}, ${country}`;
  let weatherType = props.data.weather[0].main;
  let weatherDescription = props.data.weather[0].description;
  let weatherIconUrl = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}.png`;

  const convertTemp = (e) => {
    let checked = e.target.checked;

    let temp = checked ? initialTemp : temperature * (9 / 5) + 32;
    temp = Math.trunc(temp);
    setTemp(temp);
    scale === 'C' ? setScale('F') : setScale('C');
  };

  return (
    <div className="card">
      <h1 className="location">{location}</h1>
      <div className="temperature">
        <img alt="weather-icon" src={weatherIconUrl}></img>
        <div className="description">
          <h3>{`${temperature} °${scale}`}</h3>
          <h4>{weatherType}</h4>
          <h4>{weatherDescription}</h4>
        </div>
      </div>
      <label className="switch">
        <input
          type="checkbox"
          onChange={convertTemp}
          checked={scale === 'C'}
        ></input>
        °{scale}
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default WeatherCard;
