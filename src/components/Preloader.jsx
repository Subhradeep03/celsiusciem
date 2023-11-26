import React from "react";
import preloader from "../assets/preloader.gif";

const Preloader = () => {
  return (
    <div className="h-screen w-full">
      <img src={preloader} alt="Preloader" className="h-screen w-full" />
    </div>
  );
};

export default Preloader;
