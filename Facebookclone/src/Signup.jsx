import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthDay: "1",
    birthMonth: "Jan",
    birthYear: "2000",
    gender: "Female",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Signup successful! Please log in.");
      navigate("/login");
    } else {
      alert("Signup failed!");
    }
  };

  return (
    <>
      <div className="signup-container">
        <h1>facebook</h1>

        <div className="signup-box">
          <h2>Create a new account</h2>
          <p>It’s quick and easy.</p>
          <form className="signup-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Surname"
              onChange={handleChange}
              required
            />

            {/* Date of Birth Dropdowns */}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <select name="birthDay" onChange={handleChange}>
                {[...Array(31)].map((_, i) => (
                  <option key={i + 1}>{i + 1}</option>
                ))}
              </select>
              <select name="birthMonth" onChange={handleChange}>
                {[
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ].map((month) => (
                  <option key={month}>{month}</option>
                ))}
              </select>
              <select name="birthYear" onChange={handleChange}>
                {[...Array(100)].map((_, i) => (
                  <option key={2025 - i}>{2025 - i}</option>
                ))}
              </select>
            </div>

            {/* Gender Options */}
            <div className="gender-options">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={handleChange}
                  defaultChecked
                />{" "}
                Female
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={handleChange}
                />{" "}
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Custom"
                  onChange={handleChange}
                />{" "}
                Custom
              </label>
            </div>

            <input
              type="email"
              name="email"
              placeholder="Mobile number or email"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="New password"
              onChange={handleChange}
              required
            />
            <p className="terms-text">
              By clicking Sign Up, you agree to our <a href="#">Terms</a>,{" "}
              <a href="#">Privacy Policy</a>, and <a href="#">Cookies Policy</a>
              .
            </p>
            <button type="submit" className="signup-button">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
