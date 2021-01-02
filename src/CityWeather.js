import React, { useState } from "react";
import weather from "./axios";
import "./City.css";

function City() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);

  const getWeather = async () => {
    const resp = await weather.get("/weather", {
      params: {
        q: city.toLowerCase(),
        units: "imperial",
      },
    });
    setData(resp.data);
  };

  return (
    <div className="city">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city... eg.London, Dindigul"
      />
      <button className="city-btn" onClick={getWeather}>
        FIND
      </button>
      {data && (
        <div className="city-weather">
          <p className="name">{data?.name}</p>
          <p className="main">{data?.weather[0]?.main}</p>
          <p className="desc">{data?.weather[0]?.description}</p>
          <p className="temp">
            {Math.floor(((data?.main?.temp - 32) * 5) / 9) + " \u00B0C"}
          </p>
        </div>
      )}
    </div>
  );
}

export default City;
