import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard/component";

const WeatherEngine = ({ location }) => {
  //init for our state variables
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    condition: null,
    country: null,
  });

  //definin the weather data fetchin function
  const getWeather = async (q) => {
    setLoading(true);
    try {
      const apiRes = await fetch(
        `http://api.openweathermap.org/getWeather/2.5/weather?q=${q}&units=metric&APPID=57b7171e2675504f78f524ea171bc6c8`
      );
      const resJSON = await apiRes.json();
      setWeather({
        temp: resJSON.main.temp,
        city: resJSON.name,
        condition: resJSON.weather[0].main,
        country: resJSON.sys.country,
      });
    } catch (error) {
      setError(true);
    }

    setLoading(false);
  };

  //function to handle search queries from the user side
  const handleSearch = (e) => {
    e.preventDefault();
    getWeather(query); //only run when the promise is resolved
  };

  //this hook will make the code run only once the component is mounted and never again
  //if we use any variable inside useEffect function,
  //useEffect statement has to depend on that variable
  useEffect(() => {
    getWeather(location);
  }, [location]);

  return (
    //Conditional rendering pattern
    <div>
      {!loading && !error ? (
        <div>
          <WeatherCard
            temp={weather.temp}
            condition={weather.condition}
            city={weather.city}
            country={weather.country}
          />

          <form>
            <input value={query} onChange={(e) => setQuery(e.target.value)} />
            <button onClick={(e) => handleSearch(e)}>Search</button>
          </form>
        </div>
      ) : loading ? (
        <div style={{ color: "black" }}>Loading</div>
      ) : !loading && error ? (
        <div style={{ color: "black" }}>
          There has been an error!
          <br />
          <button onClick={() => setError(false)}>Reset!</button>
        </div>
      ) : null}
    </div>
  );
};

export default WeatherEngine;
