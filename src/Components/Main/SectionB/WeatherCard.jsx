import React, { useState } from 'react';
import sun from '../../../assets/sun.png';
import refresh from '../../../assets/refresh.png';
import heart from '../../../assets/heart.png';
import deletee from '../../../assets/delete.png';
import GeneralInfo from '../SectionC/GeneralInfo'
import HourlyChart from '../SectionD/HourlyChart'
import hourlyData from '../SectionD/HourlyData'
import Forecast8Day from '../SectionE/Forecast8Day'
import forecast8 from '../SectionE/ForecastData'


const WeatherCard = ({ city, country, time, date, temp, onExpand }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    const newState = !expanded;
    setExpanded(newState);

    // Notify App ONLY when opening
    if (newState && onExpand) {
      onExpand();
    }
  };

  return (
    <div className={`card ${expanded ? "card-expanded" : ""}`}>

      <div className="card-header">
        <div className="header-city"><h3>{city}</h3></div>
        <div className="header-country"><span>{country}</span></div>
      </div>

      <div className="card-time">{time}</div>

      <div className="card-forecast">
        <button className="card-hourly">Hourly forecast</button>
        <button className="card-weekly">Weekly forecast</button>
      </div>

      <div className="card-date">{date}</div>

      <div className="card-icon"><img src={sun} alt="" /></div>

      <div className="card-temp">{temp}°C</div>

      <div className="card-actions">
        <button className="card-refresh"><img src={refresh} alt="" /></button>
        <button className="card-heart"><img src={heart} alt="" /></button>

        <button className="card-more" onClick={handleExpand}>
          {expanded ? "See less" : "See more"}
        </button>

        <div className="card-delete">
          <span><img src={deletee} alt="" /></span>
        </div>
      </div>

      {expanded && (
        <div className="expanded-boxes">
          <>
            <GeneralInfo />

            <div className="chart-container">
              <h3 className="chart-title">Hourly forecast</h3>
              <HourlyChart data={hourlyData} />
            </div>

            <Forecast8Day data={forecast8} />
          </>
        </div>
      )}

    </div>
  );
};

export default WeatherCard;
