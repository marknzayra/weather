import "./App.css";
import Header from "./components/Header.jsx";
import Input from "./components/Input.jsx";
import CurrentWeather from "./components/CurrentWeather";
import React, { useState } from "react";
export default function App() {
  const [data, setData] = useState([]);
  console.log("From App.js: ", data);

  return (
    <div className="App">
      <Header />
      <Input setData={setData} />
      <CurrentWeather data={data} />
    </div>
  );
}
