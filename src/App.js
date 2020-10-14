import React from "react";
import WeatherEngine from "./components/WeatherEngine";
import "./App.css";

function App() {
  return (
    <div className="App">
      <WeatherEngine location="ankara,tr" />
    </div>
  );
}

export default App;
