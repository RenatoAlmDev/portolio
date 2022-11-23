import "./AlterHeroImgStyles.css";
import React, { Component } from "react";

class AlterHeroImg extends Component {
  render() {
    return (
      <div className="alter-hero">
        <div className="heading">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default AlterHeroImg;
