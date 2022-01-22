import "./App.css";
import Header from "./Header";
import CitySearch from "./CitySearch";
import City from "./City";
import WeatherData from "./WeatherData";
import Sunrise from "./Sunrise";
import Forecast from "./Forecast";
import "./Forecast.css";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="frame">
        <Header />
        <CitySearch />
        <City />
        <WeatherData />
        <Sunrise />
        <Forecast />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
