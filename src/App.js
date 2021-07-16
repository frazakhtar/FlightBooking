import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Filter from './components/Filter';
import DisplayFlightSearch from './components/DisplayFlightSearch';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="parent">
        <div className="filterCardLeft">
          <Filter />
        </div>
        <div className="flightDataDisplayCard">
          <DisplayFlightSearch />
        </div>
      </div>
    </div>
  );
}

export default App;
