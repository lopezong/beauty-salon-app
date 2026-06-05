import "./About.css";
import salon from "../assets/salon.jpg";

import { FaUserCircle, FaCalendarAlt, FaTag } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-image">
        <img src={salon} alt="Beauty Salon" />
      </div>

      <div className="about-content">
        <p className="about-subtitle">ABOUT US</p>

        <h2>
          Why <span>Choose Us</span>
        </h2>

        <p className="about-description">
          We provide professional beauty services with experienced stylist,
          quality products, and a relaxing atmosphere.
        </p>

        <div className="about-feature">
          <div className="feature-icon">
            <FaUserCircle />
          </div>

          <div>
            <h3>Professional Stylist</h3>
            <p>
              Our team consists of certified and experienced professionals who
              are passionate about beauty.
            </p>
          </div>
        </div>

        <div className="about-feature">
          <div className="feature-icon">
            <FaCalendarAlt />
          </div>

          <div>
            <h3>Easy Online Booking</h3>
            <p>
              Book your appointment anytime, anywhere with our simple and secure
              booking system.
            </p>
          </div>
        </div>

        <div className="about-feature">
          <div className="feature-icon">
            <FaTag />
          </div>

          <div>
            <h3>Affordable Pricing</h3>
            <p>
              We offer top quality services at competitive prices that fit your
              budget.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;