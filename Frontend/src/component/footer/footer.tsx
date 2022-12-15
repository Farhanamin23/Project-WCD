import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

// import images
const img_logo = require("../../images/footer/wcdjkt.png");
const img_ig = require("../../images/footer/vector_ig.png");
const img_fb = require("../../images/footer/vector_fb.png");
const img_twitter = require("../../images/footer/vector_twitter.png");
const img_yt = require("../../images/footer/vector_yt.png");
const img_linkedin = require("../../images/footer/vector_linkedin.png");

// container
const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <img className="footer__img" src={img_logo}></img>
      <div className="footer__hq">
        <h1>LET’S DO IT WORLD HEADQUARERS</h1>
        <p>REQ CODE 80562203</p>
        <p>ROOSIRANTSI 3, 10119 TALLINN, ESTONIA</p>
        <p>INFO@WORLDCLEANUPDAY.ORG</p>
      </div>
      <div className="footer__join">
        <p>Join The Movement</p>
        <p>Privacy Policy</p>
        <p>Partner Policy</p>
        <p>Terms and Conditions</p>
        <p>Article</p>
      </div>
      <div className="footer__about">
        <h1>More About Us</h1>
        <p>Meet The Team</p>
        <p>Contact Us</p>
        <p>Gallery</p>
      </div>
      <div className="footer__socmed">
        <h1 className="footer__socmed--title">Follow Us</h1>
        <div className="footer__socmed--img">
          <a href="https://www.instagram.com">
            <img src={img_ig}></img>
          </a>
          <a href="https://www.twitter.com">
            <img src={img_twitter}></img>
          </a>
          <a href="https://www.facebook.com">
            <img src={img_fb}></img>
          </a>
          <a href="https://www.youtube.com">
            <img src={img_yt}></img>
          </a>
          <a href="https://www.linkedin.com">
            <img src={img_linkedin}></img>
          </a>
        </div>
        <div className="footer__socmed--form">
          <label>Email</label>
          <input type="email" placeholder="johndoe@gmail.com" />
          <button>Sign up to our newsletter!</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
