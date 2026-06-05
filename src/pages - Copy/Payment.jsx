import "./Payment.css";

function Payment() {
  return (
    <section className="payment-page">
      <div className="payment-card">
        <h1>Complete Your Payment</h1>

        <p className="payment-subtitle">
          Secure your appointment by choosing a payment method.
        </p>

        <div className="payment-options">
          <div className="payment-option">
            💳 Credit / Debit Card
          </div>

          <div className="payment-option">
            🏦 Bank Transfer
          </div>

          <div className="payment-option">
            📱 Mobile Payment
          </div>
        </div>

        <button className="pay-btn">
          Pay Now
        </button>
      </div>
    </section>
  );
}

export default Payment;