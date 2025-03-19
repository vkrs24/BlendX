import React from "react";
import "../styles/signup_component.css";
import blend from "../public/blend.gif";
import { Link } from "react-router-dom";

function Signup_Component() {
  return (
    <>
      <div className="Sign_Up_Container">
        <div className="SignUp_Box">
          <div className="App_logo">
            <img src={blend} alt="logo" />
            <h1>BlendX</h1>
          </div>
          <div>
            <form action="">
              <input
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Full Name"
                required
              />

              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                required
              />

              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
              />
              <button className="SignUp_Btn">Sign up</button>
            </form>
          </div>
        </div>
        <div className="SignUp_Box_Link">
          <div>
            <p>
              Already have an account?
              <Link to="/"> Log in</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup_Component;
