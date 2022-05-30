import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";

const Services = () => {
  return (
    <div className="services">
      {/* Left side */}
      <div className="awesome">
        <span>My awesome</span>
        <span>services</span>
        <span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam amet
          totam blanditiis saepe, molestias omnis exercitationem reprehenderit
          facere in inventore facilis provident quasi! Modi repellat accusamus
          voluptas perferendis dicta nihil.
        </span>
        <button className="button s-button">Download CV</button>
        <div className="blur s-blur1" style={{ background: "#abf1ff94" }}></div>
      </div>
      {/* Right side */}
      <div className="cards">I am the rightside</div>
    </div>
  );
};

export default Services;
