import "./Testimonials.css";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

function Testimonials() {
  return (
   <section id="testimonials">
      <p className="testimonials-subtitle">TESTIMONIALS</p>

      <h2>
        What Our <span>Clients</span> Say
      </h2>

      <div className="testimonials-grid">

        <div className="testimonial-card">
          <FaQuoteLeft className="quote-icon" />

          <p>
            Amazing experience. The staff is so friendly and
            professional. I love my new hairstyle.
          </p>

          <div className="client-info">
            <img
              src="https://i.pravatar.cc/80?img=1"
              alt="Linda Tyler"
              className="client-image"
            />

            <div>
              <h3>Linda Tyler</h3>

              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <FaQuoteLeft className="quote-icon" />

          <p>
            Best facial I ever had. My skin feels so fresh and
            glowing. Highly recommended.
          </p>

          <div className="client-info">
            <img
              src="https://i.pravatar.cc/80?img=5"
              alt="Kyle Jenny"
              className="client-image"
            />

            <div>
              <h3>Kyle Jenny</h3>

              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <FaQuoteLeft className="quote-icon" />

          <p>
            Excellent nail service and beautiful ambience.
            I will definitely come back again.
          </p>

          <div className="client-info">
            <img
              src="https://i.pravatar.cc/80?img=9"
              alt="Breckie Hill"
              className="client-image"
            />

            <div>
              <h3>Breckie Hill</h3>

              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;