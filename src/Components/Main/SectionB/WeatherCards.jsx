import React from "react";
import "./WeatherCardsStyles.css";
import WeatherCard from "./WeatherCard";

const WeatherCards = ({ onExpand }) => {
  return (
    <div className="cards-container">
      <WeatherCard city="Kyiv" country="Ukraine" time="14:00" date="Oct 20" temp={22} onExpand={onExpand} />
      <WeatherCard city="London" country="United Kingdom" time="17:00" date="Oct 20" temp={18} onExpand={onExpand} />
      <WeatherCard city="Toronto" country="Canada" time="20:00" date="Oct 20" temp={12} onExpand={onExpand} />
    </div>
  );
};

export default WeatherCards;
