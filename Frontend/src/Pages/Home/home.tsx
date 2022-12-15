import React from "react";
import { Link } from "react-router-dom";
import "./home.scss";

const unesco = require("../../images/home/unesco.png");
const habitat = require("../../images/home/habitat.png");
const globe = require("../../images/home/globe.png");

const Home: React.FC = () => {
  return (
    <div className="homepage">
      <div className="homepage__globalpartner">
        <h1>Global Partner</h1>
        <div className="homepage__globalpartner--logo">
          <img className="unesco" src={unesco} alt="" />
          <p>
            #break<span>free</span>fromplastic
          </p>
          <img className="habitat" src={habitat} alt="" />
          <img className="globe" src={globe} alt="" />
        </div>
        <a href="/">View all partners</a>
      </div>
    </div>
  );
};

export default Home;
