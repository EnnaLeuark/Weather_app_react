import "./App.css";
import Header from "./Header";
import Weather from "./Weather";
import "./Forecast.css";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="frame">
        <Header />
        <Weather defaultCity="Potsdam" />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
