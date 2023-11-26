import React from "react";
import logo from "../assets/logo.png";

const AllFooter = () => {
  return (
    <>
      <div className="w-full h-[25rem] flex flex-row justify-evenly items-center mt-10">
        <div className="flex flex-col w-full items-start gap-y-5 sm:pl-32 pl-5">
          <h2 className="sm:text-4xl text-xl text-white text-left">
            Contact Us
          </h2>
          <p className="sm:text-2xl text-sm text-white text-left">
            Tathagata Ghosh - 9163484492
          </p>
          <p className="sm:text-2xl text-sm text-white text-left">
            Chandryaee Ghosh - 9163044600
          </p>
          <p className="sm:text-2xl text-sm text-white text-left">
            Arindam Chakraborty - 8777491797
          </p>
        </div>
        <div className="flex flex-col items-center w-full">
          <img
            src={logo}
            className="sm:h-[300px] sm:w-[350px] h-[200px] w-[250px]"
          />
        </div>
      </div>
      <div className="w-full flex flex-col items-center text-white mt-2">
        Copyright @{new Date().getFullYear()}{" "}
        <div> Made with ❤️ by "The Chompass"</div>
      </div>
    </>
  );
};

export default AllFooter;
