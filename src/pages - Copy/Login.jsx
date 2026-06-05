import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <section className="login-page">
      <div className="login-card">

        <div className="auth-tabs">
          <Link to="/login" className="active">
            Login
          </Link>

          <Link to="/register">
            Register
          </Link>
        </div>

        <h2>Login to your account</h2>

        <p className="subtitle">
          Welcome back! Please enter your details
        </p>

        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <p className="bottom-text">
          Don't have an account?{" "}
          <Link to="/register">Register</Link>
        </p>

      </div>
    </section>
  );
}

export default Login;