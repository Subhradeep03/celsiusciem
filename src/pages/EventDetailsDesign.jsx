import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { FiPhoneCall } from "react-icons/fi";
import "./EventDetails.css";
import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Glitch from "../components/Glitch";
const EventDetailsDesign = (props2) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    if (props2.image && props2.image.length > 1) {
      const updateImageIndex = () => {
        setFadeIn(true);
        setTimeout(() => {
          setCurrentImageIndex((prevIndex) =>
            prevIndex === props2.image.length - 1 ? 0 : prevIndex + 1
          );
          setFadeIn(false);
        }, 500); // Adjust the duration of the fade-in transition here
      };

      const intervalId = setInterval(updateImageIndex, 3000);

      return () => clearInterval(intervalId);
    }
  }, [props2.image]);

  if (
    !props2.image ||
    props2.image.length === 0 ||
    currentImageIndex >= props2.image.length
  ) {
    return null;
  }

  return (
    <div>
      <div
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(255, 0, 0, 0.5)), url(${props2.image[currentImageIndex]}) no-repeat center`,
          height: window.innerWidth <= 767 ? "120vh" : "175vh",
          width: "100%",
          position: "absolute",
          transition: "background 0.5s ease-in-out, opacity 0.3s ease-in-out", // Added opacity transition
          filter: "brightness(0.3)",
          zIndex: -10,
          opacity: fadeIn ? 0 : 1,
          "@media (max-width: 450px)": {
            height: "100vh",
          },
        }}
      />
      <Navbar />
      <h1 className="sm:text-6xl text-4xl text-center text-white">
        <Glitch text={props2.title} />
      </h1>
      <div className="w-full flex sm:flex-row flex-col justify-around mt-10">
        <div className="w-full flex sm:flex-row flex-col items-center justify-center ">
          <img
            src={props2.image[currentImageIndex]}
            alt={`Event ${currentImageIndex + 1}`}
            className="sm:w-[550px] sm:h-[400px] w-[250px] h-[200px] rounded-2xl shadow-lg hover:shadow-white 1s ease-in-out"
          />
        </div>
        <div className="w-full flex flex-col justify-around items-start sm:items-start px-10 gap-y-5 sm:px-0 sm:gap-0 mt-5 sm:mt-0">
          <h1 className="sm:text-4xl text-2xl text-white">
            Date : <span className="sm:text-2xl text-lg">{props2.date}</span>
          </h1>
          <h1 className="sm:text-4xl text-2xl text-white">
            Fee : <span className="sm:text-2xl text-lg">{props2.fee}</span>
          </h1>
          {props2.category === "flash-event" ? null : (
            <h1 className="sm:text-4xl text-2xl text-white">
              Prize Money :{" "}
              <span className="sm:text-5xl text-xl font-bold">
                {props2.prize}
              </span>
            </h1>
          )}
          <h1 className="sm:text-4xl text-2xl text-white sm:items-center item:start flex sm:flex-row flex-col">
            Contact (Tap to call) :{" "}
            <span className="sm:text-lg text-sm sm:ml-2 mt-2">
              <a href={`tel:${props2.contact1}`}>
                {" "}
                <Button
                  color={"white"}
                  backgroundColor={"#ff0000"}
                  _hover={{ backgroundColor: "#cc0000" }}
                  className="rounded-xl p-2"
                >
                  <FiPhoneCall></FiPhoneCall>
                  {`\xa0  ${props2.person1}`}{" "}
                </Button>
              </a>
            </span>
          </h1>
        </div>
      </div>
      <div className="w-full flex flex-row justify-around mt-10 mb-10">
        <a href={props2.rule} target="_blank" rel="noreferrer">
          <Button
            visibility={`${
              props2.category === "cultural" ||
              props2.category === "flash-event"
                ? "hidden"
                : "visible"
            }`}
            color={"black"}
            backgroundColor={"white"}
            className="p-5 rounded-xl sm:text-3xl text-xl"
          >
            Rules
          </Button>
        </a>
        <a href={props2.register} target="_blank" rel="noreferrer">
          <Button
            visibility={`${
              props2.category === "sports" ? "hidden" : "visible"
            }`}
            color={"black"}
            backgroundColor={"white"}
            className="p-5 rounded-xl sm:text-3xl text-xl"
          >
            Register
          </Button>
        </a>
      </div>
    </div>
  );
};

export default EventDetailsDesign;
