import "./CTA.css";
import { Link } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";

function CTA() {
  return (
    <section className="cta">

      <div className="cta-left">

        <div className="cta-icon">
          <FaCalendarAlt />
        </div>

        <div className="cta-content">
          <h2>Ready to Look & Feel Your Best?</h2>

          <p>
            Book your appointment today and let us
            take care of you.
          </p>
        </div>

      </div>

      <Link to="/booking" className="cta-btn">
      <FaCalendarAlt />
       Book Appointment Now
      </Link>

    </section>
  );
}

export default CTA;