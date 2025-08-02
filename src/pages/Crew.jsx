import { useState } from "react";
import Member from "../components/Member";

function Crew({ crew }) {
  const [activeIndex, setActiveIndex] = useState(0);
  let activeMember = {};
  let members = [];

  if (crew) {
    activeMember = crew[activeIndex];
    members = crew.map((member) => member.name);
  }

  function handleClick(index) {
    setActiveIndex(index);
  }

  return (
    <section className={`section crew ${!crew ? "center" : ""}`} aria-live="polite">
      <h2 className="section__title">{crew ? "  02 Meet your crew" : "Loading..."}</h2>
      {crew && (
        <Member activeMember={activeMember} activeIndex={activeIndex} members={members} handleClick={handleClick} />
      )}
    </section>
  );
}

export default Crew;
