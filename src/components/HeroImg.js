import "./HeroImgStyles.css";

import React from "react";
import IntroImg from "../assets/intro.jpg";
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      </div>

      <div className="content">
        <p>OLÁ, ME CHAMO RENATO E SOU</p>
        <h2>Dev Front-End</h2>

        <div>
          <Link to="/project" className="btn">
            Projetos
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contato
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heroimg;
