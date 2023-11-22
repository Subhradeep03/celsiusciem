import React from "react";
import preloader from "../assets/preloader.gif";

const Preloader = () => {
  return (
    <div className="h-screen w-full">
      <img src={preloader} alt="Preloader" />
    </div>
  );
};

export default Preloader;
