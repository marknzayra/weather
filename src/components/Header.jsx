import React from "react";

export default function Header() {
  return (
    <div>
      <header className="title-container">
        <h1 className="title">The Weather App</h1>
        <p className="direction">
          Search Current weather by typing in your location
        </p>
      </header>
    </div>
  );
}
