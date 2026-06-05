import hair from "../assets/hairstyle.jfif";
import facial from "../assets/facial.jfif";
import nails from "../assets/nails.jfif";
import makeup from "../assets/makeup.jfif";

import { FaCut, FaSpa, FaStar, FaHeart } from "react-icons/fa";

import "./Services.css";

function Services() {
  return (
    <section id="services" className="services">
      <p className="services-subtitle">OUR SERVICES</p>

      <h2>
        Our Premium <span>Services</span>
      </h2>

      <div className="services-grid">
        <div className="service-card">
          <img src={hair} alt="Hair Styling" />

          <div className="service-icon">
            <FaCut />
          </div>

          <h3>Hair Styling</h3>

          <p>
            Cut, Color, Style and More
            <br />
            by our expert stylists.
          </p>
        </div>

        <div className="service-card">
          <img src={facial} alt="Facial & Skin" />

          <div className="service-icon">
            <FaSpa />
          </div>

          <h3>Facial & Skin</h3>

          <p>
            Rejuvenate your skin with our
            <br />
            advanced facial treatments.
          </p>
        </div>

        <div className="service-card">
          <img src={nails} alt="Nail Care" />

          <div className="service-icon">
            <FaStar />
          </div>

          <h3>Nail Care</h3>

          <p>
            Manicure, pedicure and nails
            <br />
            art for a perfect look.
          </p>
        </div>

        <div className="service-card">
          <img src={makeup} alt="Makeup" />

          <div className="service-icon">
            <FaHeart />
          </div>

          <h3>Makeup</h3>

          <p>
            Bridal, party and fashion
            <br />
            makeup by professionals.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;