import { useState, useContext } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/users?email=${formData.email}`);
    const users = await response.json();

    if (users.length > 0 && users[0].password === formData.password) {
      login(users[0]);
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="auth-container">
      <div className="left-section">
        <h1>facebook</h1>
        <p>Facebook helps you connect and share with the people in your life.</p>
      </div>
      <div className="right-section">
        <h2>Login</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <button type="submit">Log in</button>
        </form>
        <a href="#" className="forgot-password">Forgotten password?</a>
        <button className="create-account" onClick={() => navigate("/signup")}>Create new account</button>
      </div>
    </div>
  );
};

export default Login;
