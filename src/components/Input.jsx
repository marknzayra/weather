import React from "react";
import { useState } from "react";

export default function Input({ setData }) {
  const [location, setLocation] = useState("");

  const apiKey = "3e4fc0c79896fe05c7fd9258c07f1819";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const input = location;
    // determine if input is a zip or cityname
    const parseInput = isNaN(parseInt(input));
    let requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=imperial`;

    if (!parseInput) {
      requestUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${input}&appid=${apiKey}&units=imperial`;
    }

    // fetch call get api data
    const res = await fetch(requestUrl);
    const data = await res.json();
    setData(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <input
          id="user-input"
          type="text"
          placeholder="Enter your zip code or city name"
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
    </form>
  );
}
