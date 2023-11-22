import React from "react";
import "./Glitch.scss";

const Glitch = ({ text }) => {
  return (
    <div className="react-glitch-wrapper">
      <div className="rect-glitch-text" data-text={text}>
        {text}
      </div>
    </div>
  );
};

export default Glitch;
