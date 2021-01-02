import React, { useEffect, useState } from "react";
import weather from "./axios";
import "./Current.css";

function Current() {
  const [data, setData] = useState(null);
  console.log(data);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (pos, err) => {
      var LAT = pos.coords.latitude;
      var LON = pos.coords.longitude;
      const resp = await weather.get("/weather", {
        params: {
          lat: LAT,
          lon: LON,
          units: "imperial",
        },
      });
      setData(resp.data);
    });
  }, []);

  return (
    <div className="current">
      {!data ? (
        <div className="loading">
          Loading... Please Turn On your location...
        </div>
      ) : (
        <div className="weather">
          <p className="name">{data?.name}</p>
          <p className="main">{data?.weather[0]?.main}</p>
          <p className="desc">{data?.weather[0]?.description}</p>
          <p className="temp">
            {Math.floor(((data?.main?.temp - 32) * 5) / 9) + " \u00B0C"}
          </p>
          <div className="coords">
            <p>
              Longitude : <span>{data?.coord?.lon}</span>
            </p>
            <p>
              Latitude : <span>{data?.coord?.lat}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Current;
