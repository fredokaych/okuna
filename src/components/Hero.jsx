
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Victor Okuna for Member of Parliament</h1>
        <p>Engineer. Environmental Advocate. Solar Energy Champion.</p>
        <div className="hero-buttons">
          <Link to="/get-involved" className="primary-btn">Join the Movement</Link>
          <Link to="/donate" className="secondary-btn">Donate</Link>
        </div>
      </div>
    </section>
  );
}

