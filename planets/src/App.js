import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <h1>THE PLANETS</h1>
    <nav>
      <button className="name">MERCURY</button>
      <button className="name">VENUS</button>
      <button className="name">EARTH</button>
      <button className="name">MARS</button>
      <button className="name">JUPITER</button>
      <button className="name">SATURN</button>
      <button className="name">URANUS</button>
      <button className="name">NEPTUNE</button>
    </nav>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </>
  );
}

export default App;
