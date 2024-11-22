import './App.css';
import React, { useState, useEffect } from "react";
import data from "./components/data";

function App() {
  const [planet, setPlanet] = useState("Mercury");
  const [link, setLink] = useState("");
  const [overview, setOverview] = useState("");
  const [internalStructure, setInternalStructure] = useState("");
  const [surfaceGeology, setSurfaceGeology] = useState("");
  const [rotationTime, setRotationTime] = useState("");
  const [revolutionTime, setRevolutionTime] = useState("");
  const [radius, setRadius] = useState("");
  const [temperature, setTemperature] = useState("");
  const [planetInfo, setPlanetInfo] = useState(overview);

  const getData = (plnt) => {
    let planetData = data.filter((element) => element.planet === plnt);
    setPlanet(plnt);
    setLink(planetData[0].link);
    setOverview(planetData[0].overview);
    setInternalStructure(planetData[0].internalStructure);
    setSurfaceGeology(planetData[0].surfaceGeology);
    setRotationTime(planetData[0].rotationTime);
    setRevolutionTime(planetData[0].revolutionTime);
    setRadius(planetData[0].radius);
    setTemperature(planetData[0].temperature);
    setPlanetInfo(planetData[0].overview);
    console.log(planetData);
    console.log(planetInfo);
  };

  useEffect(() => {
    getData(planet);
    console.log(overview);
    console.log(planet);
  }, [planet]);

  return (
    <>
    <nav>
    <h1>THE PLANETS</h1>
      {/* <button className="name" onClick={(e) => getData("Mercury")}>MERCURY</button>
      <button className="name" onClick={(e) => getData("Venus")}>VENUS</button>
      <button className="name" onClick={(e) => getData("Earth")}>EARTH</button> */}
      <div className='button-row'>
      <button className="name" onClick={(e) => setPlanet("Mercury")}>MERCURY</button>
      <button className="name" onClick={(e) => setPlanet("Venus")}>VENUS</button>
      <button className="name" onClick={(e) => setPlanet("Earth")}>EARTH</button>
      <button className="name">MARS</button>
      <button className="name">JUPITER</button>
      <button className="name">SATURN</button>
      <button className="name">URANUS</button>
      <button className="name">NEPTUNE</button>
      </div>
    </nav>
    <div className="App">
      <div className="picture-box">
        <img src="./media/test.jpg" alt="fsdf" />
      </div>
      <article className="info-box">
        <h2>{planet}</h2>
        <p className="planet-info">{planetInfo}</p>
        <p className="link">Source: <a href={link} target="_blank">Wikipedia</a></p>
        <div className="info-buttons" onClick={(e) => setPlanetInfo(overview)}>OVERVIEW</div>
        <div className="info-buttons" onClick={(e) => setPlanetInfo(internalStructure)}>INTERNAL STRUCTURE</div>
        <div className="info-buttons" onClick={(e) => setPlanetInfo(surfaceGeology)}>SURFACE GEOLOGY</div>
      </article>
      </div>
      <section>
        <div className="fact">ROTATION TIME<br/>{rotationTime}</div>
        <div className="fact">REVOLUTION TIME<br/>{revolutionTime}</div>
        <div className="fact">RADIUS<br/>{radius}</div>
        <div className="fact">AVERAGE TEMP.<br/>{temperature}</div>
      </section>

    </>
  );
}

export default App;