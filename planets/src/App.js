import './App.css';
import React, { useState, useEffect } from "react";
import data from "./components/data";

function App() {
  const [planet, setPlanet] = useState("Earth");
  const [tab, setTab] = useState("overview");
  const [link, setLink] = useState("");
  const [overview, setOverview] = useState("");
  const [internalStructure, setInternalStructure] = useState("");
  const [surfaceGeology, setSurfaceGeology] = useState("");
  const [rotationTime, setRotationTime] = useState("");
  const [revolutionTime, setRevolutionTime] = useState("");
  const [radius, setRadius] = useState("");
  const [temperature, setTemperature] = useState("");
  const [planetInfo, setPlanetInfo] = useState("");
  const [planetPictire, setPlanetPicture] = useState(`./media/${planet}-overview.jpg`);


  const getData = (plnt, tb) => {
    const planetData = data.filter((element) => element.planet === plnt);
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

    changeTab(tb);
  };

  const changeTab = (tab) => {
    if (tab === "internalStructure") {
      setPlanetInfo(internalStructure);
    } else if (tab === "surfaceGeology") {
      setPlanetInfo(surfaceGeology);
    };
    setPlanetPicture(`./media/${planet}-${tab}.jpg`);
  };

  const changePlanet = (plnt) => {
    setPlanet(plnt);
    setTab("overview");
  };

  useEffect(() => {
    getData(planet, tab);
    console.log(overview);
    console.log(planet);
  }, [planet, tab]);

  return (
    <>
    <nav>
    <div id="logo">THE PLANETS</div>
      <div className='button-row'>
      {/* <button className="name" onClick={(e) => setPlanet("Mercury")}>MERCURY</button>
      <button className="name" onClick={(e) => setPlanet("Venus")}>VENUS</button>
      <button className="name" onClick={(e) => setPlanet("Earth")}>EARTH</button> */}
      <button className="name" onClick={(e) => changePlanet("Mercury")}>MERCURY</button>
      <button className="name" onClick={(e) => changePlanet("Venus")}>VENUS</button>
      <button className="name" onClick={(e) => changePlanet("Earth")}>EARTH</button>
      <button className="name">MARS</button>
      <button className="name">JUPITER</button>
      <button className="name">SATURN</button>
      <button className="name">URANUS</button>
      <button className="name">NEPTUNE</button>
      </div>
    </nav>
    <div className="App">
      <div id="picture-box">
        <img src={planetPictire} alt="Planet" />
      </div>
      <article className="info-box">
        <div className="title">{planet}</div>
        <p className="planet-info">{planetInfo}</p>
        <p className="link">Source: <a href={link} target="_blank">Wikipedia</a></p>
        <div className="info-buttons" onClick={(e) => setTab("overview")}>01 OVERVIEW</div>
        <div className="info-buttons" onClick={(e) => setTab("internalStructure")}>02   INTERNAL STRUCTURE</div>
        <div className="info-buttons" onClick={(e) => setTab("surfaceGeology")}>03   SURFACE GEOLOGY</div>
      </article>
      </div>
      <section>
        <div className="fact">ROTATION TIME<p className="fact-text">{rotationTime}</p></div>
        <div className="fact">REVOLUTION TIME<p className="fact-text">{revolutionTime}</p></div>
        <div className="fact">RADIUS<p className="fact-text">{radius}</p></div>
        <div className="fact">AVERAGE TEMP.<p className="fact-text">{temperature}</p></div>
      </section>

    </>
  );
}

export default App;