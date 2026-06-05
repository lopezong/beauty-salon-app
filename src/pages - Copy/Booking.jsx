import { Link } from "react-router-dom";
import "./Booking.css";

function Booking() {
  return (
    <section className="booking-page">
      <div className="booking-card">

        <div className="booking-header">
          <h2>Book Your Appointment</h2>
          <p>
            Select your preferred service and schedule your visit.
          </p>
        </div>

        <form className="booking-form">

          <label>Select Service</label>
          <select>
            <option>Hair Styling</option>
            <option>Facial & Skin Care</option>
            <option>Nail Care</option>
            <option>Makeup</option>
          </select>

          <div className="booking-row">
            <div>
              <label>Date</label>
              <input type="date" />
            </div>

            <div>
              <label>Time</label>
              <input type="time" />
            </div>
          </div>

          <label>Special Requests</label>
          <textarea
            rows="4"
            placeholder="Anything you'd like us to know..."
          ></textarea>

          <Link to="/register">
            <button type="button" className="booking-btn">
              Continue to Registration
            </button>
          </Link>

        </form>
      </div>
    </section>
  );
}

export default Booking;