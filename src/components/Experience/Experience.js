import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="experience" id="Experience">
      <div className="achivement">
        <div className="cicrle" style={{ color: darkMode ? "black" : "" }}>
          0
        </div>
        <span>years </span>
        <span>experiences</span>
      </div>
      <div className="achivement">
        <div className="cicrle" style={{ color: darkMode ? "black" : "" }}>
          2
        </div>
        <span>completed </span>
        <span>project</span>
      </div>
      <div className="achivement">
        <div className="cicrle" style={{ color: darkMode ? "black" : "" }}>
          0
        </div>
        <span>companies</span>
        <span>work</span>
      </div>
    </div>
  );
};

export default Experience;
