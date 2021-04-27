import React from "react";
import "assets/weather-card.css";
export default ({ onDelete, item: { main, name } }) => (
  <div className="weather-card">
    <h3>{name}</h3>
    <button onClick={onDelete} className="weather-card__delete">
      x
    </button>
    <div className="weather-temp">
      <div className="weather-temp__time">
        <h2 className="weather-temp__time-header">Temperatures</h2>
        <ul>
          <li>Max: {main.temp_max}</li>
          <li>Min: {main.temp_min}</li>
        </ul>
      </div>
    </div>
  </div>
);