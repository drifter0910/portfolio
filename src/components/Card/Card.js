import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Card.css";
const Card = ({ emoji, heading, detail }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="card">
      <img src={emoji} alt="" />
      <span style={{ color: darkMode ? "white" : "" }}>{heading}</span>
      <span>{detail}</span>
      <button className="c-button">Learn more</button>
    </div>
  );
};

export default Card;
