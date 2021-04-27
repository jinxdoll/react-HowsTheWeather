import React, { useState } from "react";
import Search from "./Search";
import WeatherCard from "./WeatherCard";
import { axios } from "plugins/axios";
export default () => {
  const [items, setItems] = useState([]);
  const deleteCard = id => {
    setItems(items.filter(item => item.id !== id));
  };

  const addItem = item => {
    if (items.find(aux => aux.name === item.name))
      alert("this city already exists");
    else setItems([...items, item]);
  };
  return (
    <div className="container">
      <Search onSearch={addItem} />
      <div className="cards-list">
        <div className="row padding">
          {items.map(item => (
            <div className="col-4 col-6 col-12">
              <WeatherCard
                onDelete={() => deleteCard(item.id)}
                key={item.id}
                item={item}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};