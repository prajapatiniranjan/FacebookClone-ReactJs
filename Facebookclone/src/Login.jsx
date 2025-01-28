import { useState, useContext } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Login = () => {
  // State for form data and error handling
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear error when user types
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for empty fields
    if (!formData.email || !formData.password) {
      setError("All fields are required");
      return;
    }

    try {
      // Fetch user details from the backend
      const response = await fetch(
        `http://localhost:3000/users?email=${formData.email}`
      );
      const users = await response.json();

      // Check user credentials
      if (users.length > 0 && users[0].password === formData.password) {
        login(users[0]); // Call login function from AuthContext
        navigate("/dashboard"); // Redirect to the dashboard
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      setError("An error occurred while logging in. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      {/* Left Section */}
      <div className="left-section">
        <h1>facebook</h1>
        <p>
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <h2>Login</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          {/* Email Input */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {/* Password Input */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          {/* Error Message */}
          {error && <p className="error-message">{error}</p>}

          {/* Submit Button */}
          <button type="submit">Log in</button>
        </form>

        {/* Additional Options */}
        <a href="#" className="forgot-password">
          Forgotten password?
        </a>
        <Link></Link>
        <button className="create-account" onClick={() => navigate("/signup")}>
          Create new account
        </button>
      </div>
    </div>
  );
};

export default Login;
