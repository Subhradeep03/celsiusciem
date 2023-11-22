import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Glitch from "./Glitch";
import { Drawer, Tooltip } from "@mui/material";

const Navbar = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  const handleToggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  const id = window.location.pathname.split("/")[1];
  const [selectedMenu, setSelectedMenu] = useState(id || "dashboard");

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="w-full justify-between sm:flex flex-row items-center sm:-mt-10 hidden">
        <div className="w-full flex flex-row justify-evenly">
          <Link to="/">
            <div
              style={{
                fontFamily: "Eater",
              }}
              className="sm:text-2xl p-2 cursor-pointer text-white outline-4 outline-red-500"
            >
              <Glitch text={"Home"} />
            </div>
          </Link>
          <Link to="/events">
            <div
              style={{
                fontFamily: "Eater",
              }}
              className="sm:text-2xl p-2 cursor-pointer text-white outline-4 outline-red-500"
            >
              <Glitch text={"Events"} />
            </div>
          </Link>
        </div>
        <div className="w-[450px] glitch">
          <img src={logo} />
        </div>
        <div className="w-full flex flex-row justify-evenly">
          <Link to="/teams">
            <div
              style={{
                fontFamily: "Eater",
              }}
              className="sm:text-2xl p-2 cursor-pointer text-white outline-4 outline-red-500"
            >
              <Glitch text={"Teams"} />
            </div>
          </Link>
          <Link onClick={scrollToBottom}>
            <div
              style={{
                fontFamily: "Eater",
              }}
              className="sm:text-2xl p-2 cursor-pointer text-white outline-4 outline-red-500"
            >
              <Glitch text={"Contact"} />
            </div>
          </Link>
        </div>
      </div>
      <div className="w-full sm:hidden flex justify-start z-10">
        <div className="w-full flex-row flex justify-between items-center px-4">
          <button className="ml-5 mt-5" onClick={handleToggleDrawer}>
            <img
              src={
                "https://flaticons.net/icon.php?slug_category=user-interface&slug_icon=row&icon_size=256&icon_color=FFFFFF&icon_flip=&icon_rotate=0"
              }
              className="w-8 h-8"
            />
          </button>
          <img src={logo} className="w-[100px] h-[100px] mr-5 mt-5" />
        </div>
        <Drawer
          anchor="left"
          open={showDrawer}
          sx={{
            zIndex: 1500,
          }}
          onClose={handleToggleDrawer}
        >
          <div className="w-full z-[1500] h-full bg-white">
            <div className="flex flex-row justify-center items-center mt-5 gap-x-5">
              <img src={logo} className="w-[100px] h-[100px]" alt="logo" />
            </div>
            <Link
              to="/"
              className="text-[#0f0f0f] hover:text-gray-600"
              onClick={() => setSelectedMenu("dashboard")}
            >
              <li
                className={`px-8 py-3 cursor-pointer flex justify-center flex-row gap-8 my-5 ${
                  selectedMenu === "dashboard"
                    ? "bg-[#02386E] m-2 rounded-l-lg rounded-r-3xl text-white"
                    : "hover:bg-[#02386E] m-2 rounded-l-lg rounded-r-3xl text-[#0f0f0f] hover:text-white"
                }`}
                onClick={() => setSelectedMenu("dashboard")}
              >
                <div className="block">Home</div>
              </li>
            </Link>
            <Link
              to="/sports"
              className="text-gray-800 hover:text-gray-600"
              onClick={() => setSelectedMenu("sports")}
            >
              <li
                className={`px-8 py-3 cursor-pointer flex justify-center flex-row gap-8 my-5 ${
                  selectedMenu === "sports"
                    ? "bg-[#02386E] m-2 rounded-l-lg rounded-r-3xl text-white"
                    : "hover:bg-[#02386E] m-2 rounded-l-lg rounded-r-3xl text-[#0f0f0f] hover:text-white"
                }`}
                onClick={() => setSelectedMenu("sports")}
              >
                <div className="block">Sports</div>
              </li>
            </Link>
            <Link
              to="/technical"
              className="text-gray-800 hover:text-gray-600"
              onClick={() => setSelectedMenu("technical")}
            >
              <li
                className={`px-8 py-3 cursor-pointer flex justify-center flex-row gap-8 my-5 ${
                  selectedMenu === "technical"
                    ? "bg-[#02386E] m-2 rounded-l-lg rounded-r-3xl text-white"
                    : "hover:bg-[#02386E] m-2 rounded-l-lg rounded-r-3xl text-[#0f0f0f] hover:text-white"
                }`}
                onClick={() => setSelectedMenu("technical")}
              >
                <div className="block">Technical</div>
              </li>
            </Link>
            <Link
              to="/cultural"
              className="text-gray-800 hover:text-gray-600"
              onClick={() => setSelectedMenu("cultural")}
            >
              <li
                className={`px-8 py-3 cursor-pointer flex justify-center flex-row gap-8 my-5 ${
                  selectedMenu === "cultural"
                    ? "bg-[#02386E] m-2 rounded-l-lg rounded-r-3xl text-white"
                    : "hover:bg-[#02386E] m-2 rounded-l-lg rounded-r-3xl text-[#0f0f0f] hover:text-white"
                }`}
                onClick={() => setSelectedMenu("cultural")}
              >
                <div className="block">Cultural</div>
              </li>
            </Link>
            <Link
              to="/teams"
              className="text-gray-800 hover:text-gray-600"
              onClick={() => setSelectedMenu("teams")}
            >
              <li
                className={`px-8 py-3 cursor-pointer flex justify-center flex-row gap-8 my-5 ${
                  selectedMenu === "teams"
                    ? "bg-[#02386E] m-2 rounded-l-lg rounded-r-3xl text-white"
                    : "hover:bg-[#02386E] m-2 rounded-l-lg rounded-r-3xl text-[#0f0f0f] hover:text-white"
                }`}
                onClick={() => setSelectedMenu("teams")}
              >
                <div className="block">Teams</div>
              </li>
            </Link>
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default Navbar;
