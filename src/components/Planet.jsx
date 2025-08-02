function Planet({ activePlanet, planets, handleClick }) {
  const { name, images, description, distance, travel } = activePlanet;

  return (
    <div className="container section__body">
      <div className="section__image">
        <img className="image" src={images.webp} alt="Moon" />
      </div>
      <div className="section__text">
        <div className="section__buttons">
          {planets.map((planet) => (
            <button
              key={planet}
              className={`planet__button ${planet.toLowerCase() == name.toLowerCase() ? "active" : ""}`}
              onClick={() => handleClick(planet)}>
              {planet}
            </button>
          ))}
        </div>
        <h3 className="planet-name">{name}</h3>
        <p className="info">{description}</p>
        <div className="planet-numbers">
          <div className="distance">
            <span className="title">AVG. DISTANCE</span>
            <span className="number">{distance}</span>
          </div>
          <div className="time">
            <span className="title">Est. travel time</span>
            <span className="number">{travel}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Planet;
