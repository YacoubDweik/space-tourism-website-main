import { useState } from "react";
import Planet from "../components/Planet";

function Destination({ destinations }) {
  const [activeName, setActiveName] = useState("moon");
  let activePlanet = {};
  let planets = [];

  if (destinations) {
    activePlanet = destinations.find((obj) => obj.name.toLowerCase() == activeName.toLowerCase());
    planets = destinations.map((obj) => obj.name);
  }

  function handleClick(name) {
    setActiveName(name.toLowerCase());
  }

  return (
    <section className={`section destination ${!destinations ? "center" : ""}`} aria-live="polite">
      <h2 className="section__title">{destinations ? "01 Pick your destination" : "Loading..."}</h2>
      {destinations && <Planet activePlanet={activePlanet} planets={planets} handleClick={handleClick} />}
    </section>
  );
}

export default Destination;
