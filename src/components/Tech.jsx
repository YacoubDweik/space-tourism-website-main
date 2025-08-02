function Tech({ activeTech, activeIndex, techs, handleClick }) {
  const { name, images, description } = activeTech;

  return (
    <div className="container section__body">
      <div className="section__text">
        <div className="section__buttons">
          {techs.map((tech, index) => (
            <button
              key={index}
              className={`tech__button ${index == activeIndex ? "active" : ""} `}
              aria-label={`${tech} section`}
              onClick={() => handleClick(index)}>
              {index + 1}
            </button>
          ))}
        </div>
        <div className="wrapper">
          <span className="term">The terminology...</span>
          <h3 className="tech-name">{name}</h3>
          <p className="info">{description}</p>
        </div>
      </div>
      <picture className="section__image">
        <source media="(min-width: 768px)" srcSet={images.portrait} />
        <img className="image" src={images.landscape} alt="Moon" />
      </picture>
    </div>
  );
}

export default Tech;
