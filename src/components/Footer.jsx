import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="w-full h-[25rem] flex sm:flex-row flex-col justify-around items-center mt-[100px] sm:mt-0 sm:px-0 px-2">
      <div className="sm:flex hidden flex-col justify-center w-full h-[200px] px-10 rounded-2xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3686.522849051669!2d88.3457154!3d22.4845582!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0270ecc09b4691%3A0x7f99d48523fd066a!2sCalcutta%20Institute%20of%20Engineering%20And%20Management%20(CIEM)!5e0!3m2!1sen!2sin!4v1700157126266!5m2!1sen!2sin"
          width="350"
          height="400"
        ></iframe>
      </div>
      <div className="flex flex-col justify-center w-full gap-y-5">
        <h2 className="sm:text-4xl text-xl text-white ">Contact Us</h2>
        <p className="sm:text-2xl text-lg text-white text-left">
          Tathagata Ghosh - 9163484492
        </p>
        <p className="sm:text-2xl text-lg text-white text-left">
          Chandryaee Ghosh - 9163044600
        </p>
        <p className="sm:text-2xl text-lg text-white text-left">
          Arindam Chakraborty - 8777491797
        </p>
      </div>
      <div className="flex flex-col justify-center w-full">
        <img
          src={logo}
          className="sm:h-[300px] sm:w-[350px] h-[200px] w-[250px]"
        />
      </div>
    </div>
  );
};

export default Footer;
