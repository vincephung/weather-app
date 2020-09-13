import React, { useState } from 'react';
import './form.css';

const FormDisplay = (props) => {
  const [location, setLocation] = useState('');

  const handleChange = (e) => {
    setLocation(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.getWeatherData(location);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="city"
          placeholder="Enter City"
          value={location}
          onChange={handleChange}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default FormDisplay;
