import React, { useState, useEffect } from 'react';
import FormDisplay from './FormDisplay';
import WeatherCard from './WeatherCard';
import ChangeBackground from './ChangeBackground';
import DisplayError from './DisplayError';
import './form.css';

const FormContainer = () => {
  const [weatherData, setWeatherData] = useState(null);
  let [error, setError] = useState(false);

  const handleError = () => {
    setError(true);
    setWeatherData(null);
  };

  const getWeatherData = async (location) => {
    try {
      setError(false);
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=09cb87e3b19945bb6949563cd21ace23`;
      const response = await fetch(url, { mode: 'cors' });

      if (response.ok) {
        const data = await response.json();
        setWeatherData(data);
        return data;
      } else {
        handleError();
      }
    } catch (err) {
      throw new Error(err);
    }
  };

  //useEffect(() => {});

  return (
    <div className="formContainer">
      <FormDisplay getWeatherData={getWeatherData} />
      {weatherData !== null ? <WeatherCard data={weatherData} /> : null}
      {weatherData !== null ? <ChangeBackground data={weatherData} /> : null}
      {error && !weatherData ? <DisplayError /> : null}
    </div>
  );
};

export default FormContainer;
