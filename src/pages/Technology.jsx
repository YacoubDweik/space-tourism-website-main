import { useState } from "react";
import Tech from "../components/Tech";

function Technology({ technology }) {
  const [activeIndex, setActiveIndex] = useState(0);
  let activeTech = {};
  let techs = [];

  if (technology) {
    activeTech = technology[activeIndex];
    techs = technology.map((tech) => tech.name);
  }

  function handleClick(index) {
    setActiveIndex(index);
  }

  return (
    <section className={`section technology ${!technology ? "center" : ""}`} aria-live="polite">
      <h2 className="section__title">{technology ? "03 Space launch 101" : "Loading..."}</h2>
      {technology && <Tech activeTech={activeTech} activeIndex={activeIndex} techs={techs} handleClick={handleClick} />}
    </section>
  );
}

export default Technology;
