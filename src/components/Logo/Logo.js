import React from "react";
import Tilt from "react-tilt";
import Brain from "./Brain.png";

const Logo = () => {
  return (
    <div>
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 50 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner">
          <img alt="logo" src={Brain} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
