import "./AboutContentSyles.css";

import React from "react";
import { Link } from "react-router-dom";
import react1 from "../assets/purple-react-1.png";
import react2 from "../assets/reactjs.png";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h2>Quem sou.</h2>
        <p>
          Sou um desenvolvedor Front-end React em processo de transição de
          carreira. Isto é, não tenho experiência prática na área. Tenho
          conhecimentos básicos de Back-end com NodeJS e Express. Atualmente,
          desenvolvendo um ecommerce com Ruby como parte do Bootcamp da OneBit
          Code
        </p>
        <Link to="/contact">
          <button className="btn">Contato</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={react1} className="img" alt="React Logo" />
          </div>

          <div className="img-stack bottom">
            <img src={react2} className="img" alt="React Dashboard" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
