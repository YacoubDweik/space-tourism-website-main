import { useParams } from "react-router-dom";

function RouterParam() {
  const { param } = useParams();
  return (
    <section className="section home center not-found">
      <h2 className="section__title">You entered: {param}</h2>
    </section>

    // ** If you want to automatically navigate user to home page you can use:
    // <Navigate to="/" /> **
  );
}

export default RouterParam;
