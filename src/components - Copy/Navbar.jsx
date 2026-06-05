import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaRegCalendarAlt } from "react-icons/fa";
import logo from "../assets/logo.png";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Salon Logo" />

        <div className="logo-text">
          <h2>Glamour</h2>
          <p>BEAUTY SALON</p>
        </div>
      </div>

      {/* Desktop Menu */}
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Desktop Button */}
      <Link to="/booking" className="book-btn">
        <FaRegCalendarAlt />
        Book Now
      </Link>

      {/* Mobile Menu Icon */}
      <div
        className="menu-icon"
        onClick={() => setMenuOpen(true)}
      >
        <FaBars />
      </div>

      {/* Mobile Sidebar */}
      {menuOpen && (
        <div className="mobile-menu">
          <div className="close-btn" onClick={() => setMenuOpen(false)}>
            <FaTimes />
          </div>

          <h2>For Customers</h2>

          <ul>
            <li>
              <a href="#home" onClick={() => setMenuOpen(false)}>
                Home
              </a>
            </li>

            <li>
              <a href="#services" onClick={() => setMenuOpen(false)}>
                Services
              </a>
            </li>

            <li>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About Us
              </a>
            </li>

            <li>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact Us
              </a>
            </li>
          </ul>

          <Link
            to="/login"
            className="login-link"
            onClick={() => setMenuOpen(false)}
          >
            Login or Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;