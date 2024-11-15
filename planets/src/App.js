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
      <div className="picture-box">
        <img src="./media/test.jpg" alt="fsdf" />
      </div>
      <article className="info-box">
        <h2>PLANET NAME</h2>
        <p className="planet-info">PLANET INFO</p>
        <p className="link">Source: <a href="#" target="_blank">Wikipedia</a></p>
        <div className="info-buttons">OVERVIEW</div>
        <div className="info-buttons">OVERVIEW</div>
        <div className="info-buttons">OVERVIEW</div>
      </article>
      <section>
        <div className="fact">ROTATION TIME</div>
        <div className="fact">REVOLUTION TIME</div>
        <div className="fact">RADIUS</div>
        <div className="fact">AVERAGE TEMP.</div>
      </section>
    </div>
    </>
  );
}

export default App;