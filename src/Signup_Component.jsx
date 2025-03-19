import React, { useState } from "react";
import "../styles/signup_component.css";
import blend from "../public/blend.gif";
import { Link } from "react-router-dom";
import { login_data } from "../data/App_Data";
import { useNavigate } from "react-router-dom";

function Signup_Component() {
  const [fullname, setFullName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginstore, setLoginstore] = useState(login_data);
  const Navigate = useNavigate();

  function handleSignUpValidation(event) {
    event.preventDefault();

    // Check if email already exists
    const emailExists = loginstore.some((user) => user.email === email);
    if (emailExists) {
      alert("You already have an BlendX account!");
      setEmail("");
      return;
    }
    const usernameExists = loginstore.some(
      (user) => user.user_name === username
    );
    if (usernameExists) {
      alert("Username already exist!");
      setUserName("");
      return;
    }

    // Assign new user ID
    const new_user_id = loginstore.length > 0 ? loginstore.length + 1 : 1;

    // Create new user object
    const newUser = {
      user_id: new_user_id,
      name: fullname,
      username: username,
      email: email,
      password: password,
    };

    // Update state
    setLoginstore([...loginstore, newUser]);
    Navigate("/home");
    alert("BlendX account successfully created");
    console.log([...loginstore, newUser]);
  }

  return (
    <>
      <div className="Sign_Up_Container">
        <div className="SignUp_Box">
          <div className="App_logo">
            <img src={blend} alt="logo" />
            <h1>BlendX</h1>
          </div>
          <div>
            <form onSubmit={handleSignUpValidation}>
              <input
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Full Name"
                value={fullname}
                onChange={(e) => setFullName(e.target.value)}
                required
              />

              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                required
              />

              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button type="submit" className="SignUp_Btn">
                Sign up
              </button>
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
