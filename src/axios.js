import axios from "axios";

const KEY = "775678f89d3132b1b49286f446c77a32";
// `/weather?q=${city}&appid=${key}&units=imperial`;

const weather = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  params: {
    appid: KEY,
  },
});

export default weather;
