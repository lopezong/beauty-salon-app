import "./Footer.css";
import logo from "../assets/logo.png";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">

        <div className="brand">
          <div className="footer-logo">
            <img
              src={logo}
              alt="Salon Logo"
              className="footer-logo-img"
            />

            <div className="footer-logo-text">
              <h2>Glamour</h2>
              <p>BEAUTY SALON</p>
            </div>
          </div>

          <p>
            We bring out the beauty in you with
            our expert services and premium care.
          </p>

          <div className="social-icons">
            <div><FaFacebookF /></div>
            <div><FaWhatsapp /></div>
            <div><FaInstagram /></div>
            <div><FaYoutube /></div>
          </div>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Testimonials</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Our Services</h3>

          <ul>
            <li>Hair Styling</li>
            <li>Facial & Skin</li>
            <li>Nail Care</li>
            <li>Makeup</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact Us</h3>

          <ul>
            <li><FaPhoneAlt /> +234 7036205197</li>
            <li><FaEnvelope /> info@glamoursalon.com</li>
            <li><FaMapMarkerAlt /> Lead City University, Ibadan</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Newsletter</h3>

          <p>
            Subscribe to get updates and special offers.
          </p>

          <div className="newsletter">
            <input
              type="email"
              placeholder="Enter your email"
            />

            <button>
              <FaPaperPlane />
            </button>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Glamour Beauty Salon. All Rights Reserved.
        </p>

        <div className="footer-links">
          <span>Privacy Policy</span>
          <span>|</span>
          <span>Terms & Conditions</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;