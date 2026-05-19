import React from 'react';
import './ForecastStyles.css'
import forecast8 from './ForecastData.jsx';

export default function Forecast8Day() {
  return (
    <div className="forecast-wrapper">
      <h3 className="forecast-title">8-day forecast</h3>

      <div className="forecast-list">
        {forecast8.map((item, i) => (
          <div className="forecast-row" key={i}>
            <div className="forecast-day">{item.day}</div>

            <img
              src={item.icon}
              alt="weather icon"
              className="forecast-icon-img"
            />

            <div className="forecast-temps">
              {item.max}/{item.min}°C
            </div>

            <div className="forecast-desc">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}


