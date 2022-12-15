import React from "react";
import "./navbar.scss";

const img_logo = require("../../images/navbar/logo.png");

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <img className="navbar__img" src={img_logo} alt="" />
      <nav className="navbar__nav">
        <a href="/">Home</a>
        <a href="/">About Us</a>
        <a href="/">Program</a>
        <a href="/">Donate</a>
        <a href="/">Contact Us</a>
        <a href="/">Join the movement</a>
      </nav>
    </div>
  );
};

export default Navbar;
