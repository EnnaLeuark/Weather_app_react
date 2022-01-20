import "./App.css";
import Header from "./Header";
import CitySearch from "./CitySearch";
import City from "./City";
import WeatherData from "./WeatherData";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="frame">
        <Header />
        <CitySearch />
        <City />
        <WeatherData />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
