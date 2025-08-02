function Member({ activeMember, activeIndex, members, handleClick }) {
  const { name, images, role, bio } = activeMember;
  return (
    <div className="container section__body">
      <div className="section__text">
        <p className="member-role">{role}</p>
        <h3 className="member-name">{name}</h3>
        <p className="info">{bio}</p>
        <div className="section__buttons">
          {members.map((member, index) => (
            <button
              key={index}
              className={`member__button ${index == activeIndex ? "active" : ""} `}
              aria-label={`${member} section`}
              onClick={() => handleClick(index)}></button>
          ))}
        </div>
      </div>
      <div className="section__image">
        <img className="image" src={images.webp} alt={`${name} photo`} />
      </div>
    </div>
  );
}

export default Member;
