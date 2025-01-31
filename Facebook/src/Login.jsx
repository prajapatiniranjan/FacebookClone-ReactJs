import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; 
const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="login-left">
        <h1 className="facebook-logo">facebook</h1>
        <p className="facebook-text">Facebook helps you connect and share with the people in your life.</p>
      </div>
      <div className="login-right">
        <div className="login-box">
          <input type="text" placeholder="Email address or phone number" className="login-input" />
          <input type="password" placeholder="Password" className="login-input" />
          <button className="login-btn">Log in</button>
          <a href="#" className="forgot-password">Forgotten password?</a>
          <hr className="divider" />
          {/* Navigate to Signup Page on Click */}
          <button className="create-account-btn" onClick={() => navigate("/signup")}>
            Create new account
          </button>
        </div>
        <p className="create-page-text">
          <a href="#" className="create-page-link">Create a Page</a> for a celebrity, brand or business.
        </p>
      </div>
    </div>
  );
};

export default Login;
