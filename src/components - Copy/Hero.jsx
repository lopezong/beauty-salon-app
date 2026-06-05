import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";
import heroImage from "../assets/woman.jfif";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">

        <p className="hero-subtitle">
          LOOKS BEAUTIFUL, FEEL CONFIDENT
        </p>

        <h1>
          Beauty & <span>Confidence</span>
          <br />
          Start Here
        </h1>

        <p className="hero-description">
          Experience premium beauty services tailored just for you.
          <br />
          Because you deserve the best.
        </p>

        <Link to="/booking" className="hero-btn">
          <FaCalendar />
          Book Appointment
        </Link>

      </div>

      <div className="hero-image">
        <img src={heroImage} alt="Beauty Model" />
      </div>
    </section>
  );
}

export default Hero;