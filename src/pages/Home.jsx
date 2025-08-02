import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="section home">
      <h2 className="sr-only">Do you want to travel to space?</h2>
      <div className="container section__body">
        <div className="section__text">
          <p className="text">
            <span className="intro">So, you want to travel to</span>
            <strong className="space-word">Space</strong>
            <span className="info">
              Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover
              kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world
              experience!
            </span>
          </p>
        </div>
        <div className="section__image">
          <Link to="/destination" className="explore-link">
            Explore
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
