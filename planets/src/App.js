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
  
  const menuMobile = document.querySelector(".mobile-menu");
  const icon = document.getElementsByTagName("i")[0];
  const [showMenu, setShowMenu] = useState(false);

const menuClicking = () => {
  if (showMenu === false) {
    setShowMenu(true);
    menuMobile.setAttribute("style", "visibility: visible; overflow: visible; line-height: 1.5; transition: line-height 1s");
    icon.setAttribute("class", "fa-solid fa-xmark");
    
  } else if (showMenu === true) {
    setShowMenu(false);
    menuMobile.setAttribute("style", "visibility: hidden; overflow: hidden; line-height: 0; transition: line-height 1s, visibility 1s, overflow 1s");
    icon.setAttribute("class", "fa-solid fa-bars");
  }
};

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
  }, [planet, tab]);

  return (
    <>
    <ul className="mobile-menu">
        <li className="menu-item" onClick={(e) => changePlanet("Mercury")}>MERCURY</li>
        <li className="menu-item" onClick={(e) => changePlanet("Venus")}>VENUS</li>
        <li className="menu-item" onClick={(e) => changePlanet("Earth")}>EARTH</li>
        <li className="menu-item" onClick={(e) => changePlanet("Mars")}>MARS</li>
        <li className="menu-item" onClick={(e) => changePlanet("Jupiter")}>JUPITER</li>
        <li className="menu-item" onClick={(e) => changePlanet("Saturn")}>SATURN</li>
        <li className="menu-item" onClick={(e) => changePlanet("Uranus")}>URANUS</li>
        <li className="menu-item" onClick={(e) => changePlanet("Neptune")}>NEPTUNE</li>
      </ul>
    <div className="logo" id="mobile-logo">THE PLANETS</div>
    <nav className="mobile-nav">
      <button className="mobile-info-buttons" onClick={(e) => setTab("overview")}>OVERVIEW</button>
      <button className="mobile-info-buttons" onClick={(e) => setTab("internalStructure")}>INTERNAL STRUCTURE</button>
      <button className="mobile-info-buttons" onClick={(e) => setTab("surfaceGeology")}>SURFACE GEOLOGY</button>
      <i id="button-mobile" class="fa-solid fa-bars" onClick={menuClicking}></i>
</nav>
    <nav className="main-nav">
    <div className="logo">THE PLANETS</div>
      <div className='button-row'>
      <button className="planet-name" onClick={(e) => changePlanet("Mercury")}>MERCURY</button>
      <button className="planet-name" onClick={(e) => changePlanet("Venus")}>VENUS</button>
      <button className="planet-name" onClick={(e) => changePlanet("Earth")}>EARTH</button>
      <button className="planet-name" onClick={(e) => changePlanet("Mars")}>MARS</button>
      <button className="planet-name" onClick={(e) => changePlanet("Jupiter")}>JUPITER</button>
      <button className="planet-name" onClick={(e) => changePlanet("Saturn")}>SATURN</button>
      <button className="planet-name" onClick={(e) => changePlanet("Uranus")}>URANUS</button>
      <button className="planet-name" onClick={(e) => changePlanet("Neptune")}>NEPTUNE</button>
      </div>
    </nav>
    <div className="main">
      <div id="picture-box">
        <img src={planetPictire} alt="Planet" />
      </div>
      <article className="info-box">
        <div className="planet-title">{planet}</div>
        <p className="planet-info">{planetInfo}</p>
        <p className="planet-link">Source: <a href={link} target="_blank">Wikipedia</a></p>
        <div className="info-buttons" onClick={(e) => setTab("overview")}>01 OVERVIEW</div>
        <div className="info-buttons" onClick={(e) => setTab("internalStructure")}>02 INTERNAL STRUCTURE</div>
        <div className="info-buttons" onClick={(e) => setTab("surfaceGeology")}>03 SURFACE GEOLOGY</div>
      </article>
      </div>
      <section>
        <div className="planet-fact"><div>ROTATION TIME</div><p className="planet-fact-text">{rotationTime}</p></div>
        <div className="planet-fact"><div>REVOLUTION TIME</div><p className="planet-fact-text">{revolutionTime}</p></div>
        <div className="planet-fact"><div>RADIUS</div><p className="planet-fact-text">{radius}</p></div>
        <div className="planet-fact"><div>AVERAGE TEMP.</div><p className="planet-fact-text">{temperature}</p></div>
      </section>
    </>
  );
}

export default App;