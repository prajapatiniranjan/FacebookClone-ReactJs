import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css"; // Import CSS



const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    day: "13",
    month: "Jan",
    year: "2025",
    gender: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
        <h1 className="text-blue-600 text-3xl font-bold">facebook</h1>
        <h2 className="text-xl font-semibold mt-4">Create a new account</h2>
        <p className="text-gray-500">It's quick and easy.</p>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="grid grid-cols-2 gap-2">
            <input type="text" name="firstName" placeholder="First name" className="border p-2 rounded-md w-full" onChange={handleChange} required />
            <input type="text" name="surname" placeholder="Surname" className="border p-2 rounded-md w-full" onChange={handleChange} required />
          </div>
          <div className="mt-2">
            <label className="block text-gray-600 text-left">Date of birth</label>
            <div className="grid grid-cols-3 gap-2">
              <select name="day" className="border p-2 rounded-md w-full" onChange={handleChange} value={formData.day}>
                {[...Array(31)].map((_, i) => <option key={i} value={i+1}>{i+1}</option>)}
              </select>
              <select name="month" className="border p-2 rounded-md w-full" onChange={handleChange} value={formData.month}>
                {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((m, i) => <option key={i} value={m}>{m}</option>)}
              </select>
              <select name="year" className="border p-2 rounded-md w-full" onChange={handleChange} value={formData.year}>
                {[...Array(100)].map((_, i) => <option key={i} value={2025 - i}>{2025 - i}</option>)}
              </select>
            </div>
          </div>
          <div className="mt-2 text-left">
            <label className="block text-gray-600">Gender</label>
            <div className="flex justify-between">
              {['Female', 'Male', 'Custom'].map((g) => (
                <label key={g} className="border p-2 rounded-md w-full flex items-center cursor-pointer">
                  <input type="radio" name="gender" value={g} onChange={handleChange} className="mr-2" />{g}
                </label>
              ))}
            </div>
          </div>
          <input type="email" name="email" placeholder="Mobile number or email address" className="border p-2 rounded-md w-full mt-2" onChange={handleChange} required />
          <input type="password" name="password" placeholder="New password" className="border p-2 rounded-md w-full mt-2" onChange={handleChange} required />
          <p className="text-xs text-gray-500 mt-2">
            People who use our service may have uploaded your contact information to Facebook. <a href="#" className="text-blue-600">Learn more.</a>
          </p>
          <p className="text-xs text-gray-500 mt-2">
            By clicking Sign Up, you agree to our <a href="#" className="text-blue-600">Terms</a>, <a href="#" className="text-blue-600">Privacy Policy</a> and <a href="#" className="text-blue-600">Cookies Policy</a>.
          </p>
          <button type="submit" className="bg-green-600 text-white p-2 rounded-md w-full mt-4 text-lg font-semibold">Sign Up</button>
        </form>
        <button onClick={() => navigate("/login")} className="text-blue-600 mt-2">Back to Login</button>
      </div>
    </div>
  );
};

export default Signup;
