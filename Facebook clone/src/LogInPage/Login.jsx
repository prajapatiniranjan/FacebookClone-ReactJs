import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <>
      <div className="Login">
        <div className="facebook">
          <div className="facebooktext">facebook</div>
          <div className="title">
            Facebook helps you connect and share <br />
            with the people in your life.
          </div>
        </div>

        <div className="LogInContainer">
          <div className="Logindetails">
            <input type="email" placeholder="Email address or phone number " />
            <br />
            <br />
            <input type="password" placeholder="Password " />
            <br />
            <br />

            <button className="btn">
              <Link to="HeaderArea">LogIn</Link>
              </button>
          </div>
          <div className="forget">
            <a href="forget">Forgotten Password</a>
            <br />
            <br />
            <button className="btns">Create New Account</button>
          </div> 
          <p></p>
          <br />
          <br />
          <div className="page">
            <a href="createpage"><b>Create a Page</b></a> for a celebrity brand or business.
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
