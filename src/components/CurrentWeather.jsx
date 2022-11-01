import React from "react";

export default function CurrentWeather({ data }) {
  console.log("from Current weather", data);

  if (data.length === 0) {
    return <div></div>;
  } else {
    if (data.cod !== "404") {
      return (
        <div className="weather-card">
          <div className="weather-card-header">
            <h2 className="weather-card-name">{data.name}</h2>
            <h2>{new Date().toLocaleDateString()}</h2>
          </div>
          <div className="weather-card-detail">Temp: {data.main.temp}F</div>
          <div className="weather-card-detail">
            Wind Speed: {data.wind.speed}mph
          </div>
          <div className="weather-card-detail">
            Humidity: {data.main.humidity}%
          </div>
          <div className="weather-card-detail">
            Coordinates: ({data.coord.lat},{data.coord.lon})
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h3 class="error-message">Invalid City or Zip Code</h3>
        </div>
      );
    }
  }
}
