import React, { useContext } from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import { motion } from "framer-motion";
import { themeContext } from "../../Context";

const Services = () => {
  const transition = { duration: 1, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services" id="Services">
      {/* Left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My awesome</span>
        <span>services</span>
        <span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam amet
          totam blanditiis saepe.
        </span>
        <a href="" download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#abf1ff94" }}></div>
      </div>
      {/* Right side */}
      <div className="cards">
        <motion.div
          initial={{ left: " 3rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
          style={{ left: "14rem" }}
        >
          <Card emoji={HeartEmoji} heading={"Design"} detail={"Adobe xd"} />
        </motion.div>
        <motion.div
          initial={{ left: " -10rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
          style={{ top: "12rem", left: "-4rem" }}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, Javascript, ReactJs"}
          />
        </motion.div>
        <motion.div
          initial={{ left: " -10rem" }}
          whileInView={{ left: "13rem" }}
          transition={transition}
          style={{ top: "20rem", left: "13rem" }}
        >
          <Card emoji={Humble} heading={"UI/UX"} detail={"No experience"} />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
