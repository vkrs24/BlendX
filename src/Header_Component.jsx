import React from "react";
import { Link } from "react-router-dom";
import blend from "../public/blend.gif";
import "../styles/header_component.css";

function Header_Component() {
  return (
    <header>
      <div className="logo">
        <img src={blend} alt="logo" />
        <h1>BlendX</h1>
      </div>
      <div className="links_div">
        <input type="search" placeholder="Search Here" />
        <Link to="/home">HOME</Link>
        <Link to="/post">POST</Link>
        <Link to="/myprofile">PROFILE</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/login">LOGOUT</Link>
      </div>
    </header>
  );
}

export default Header_Component;
