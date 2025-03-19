import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login_data } from "../data/App_Data.jsx";
import blend from "../public/blend.gif";
import "../styles/login_component.css";

function Login_Component() {
  const [userdata, setUserData] = useState(login_data);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  function handleUserValidation(event) {
    event.preventDefault();
    const user = userdata.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      alert("Login Successful!");
      Navigate("/home");
      setEmail("");
      setPassword("");
    } else {
      alert("Invalid Email or Password");
      setEmail("");
      setPassword("");
    }
  }
  return (
    <>
      <div className="LogIn_Container">
        <div className="LogIn_Box">
          <div className="App_logo">
            <img src={blend} alt="logo" />
            <h1>BlendX</h1>
          </div>
          <div>
            <form action="" onSubmit={(event) => handleUserValidation(event)}>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmailId(e.target.value)}
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="Login_Btn" type="submit">
                Log in
              </button>
            </form>
          </div>
          <div>
            <Link to="/missing">Forgot password?</Link>
          </div>
        </div>
        <div className="LogIn_Box_Link">
          <div>
            <p>
              Don't have an account?
              <Link to="/signup"> Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login_Component;
