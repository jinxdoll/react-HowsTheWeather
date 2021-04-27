import React, { useState } from "react";
import { axios } from "plugins/axios";

let timeout = {};
export default ({ onSearch }) => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState(null);
  const getLocations = async value => {
    try {
      if (!value || !search) return;
      const { data } = await axios.get("", {
        params: {
          q: value
        }
      });
      setResult(data);
      alert("city found, click to add");
      console.log("data:", data);
    } catch (error) {
      console.log("error: ", error);
      setResult(null);
      alert("city not found");
    }
  };
  const debounceFunc = e => {
    const val = e.target.value;
    setSearch(val);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      getLocations(val);
    }, 300);
  };
  return (
    <div className="search-container">
      <input
        onKeyDown={e => {
          if (e.key === "Enter" && result) {
            onSearch(result);
            setResult(null);
          }
        }}
        onChange={debounceFunc}
        value={search}
        type="text"
        className="search-input"
      />
      <button
        onClick={() => {
          onSearch(result);
          setResult(null);
        }}
        disabled={!search || !result}
        className="search-button"
      >
        Add
      </button>
    </div>
  );
};