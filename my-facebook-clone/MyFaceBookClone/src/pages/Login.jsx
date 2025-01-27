import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // React Router's navigation hook

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = (e) => {
    e.preventDefault();
    // For now, just redirect to Main Page after login
    navigate("/main");
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="facebook-logo">
        <FaFacebook size={50} color="#1877f2" />
        <h3>Facebook</h3>
      </div>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <a href="/signup">Create New Account</a>
      </p>
    </div>
  );
};

export default Login;
