import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Current from "./CurrentWeather";
import City from "./CityWeather";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/current">
            <Current />
          </Route>
          <Route path="/city">
            <City />
          </Route>
          <Route path="/">
            <div>
              <Link to="/current">
                <button className="curr-btn">CURRENT LOCATION</button>
              </Link>
              <Link to="/city">
                <button className="city-btn">SEARCH BY CITY</button>
              </Link>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
