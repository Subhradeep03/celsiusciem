import { Box } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Glitch from "./Glitch";

const EventCard = (props1) => {
  return (
    <>
      <Link to={`/events/${props1.title}`}>
        <Box
          onClick={props1.openModal}
          filter={"grayscale(100%)"}
          className="rounded-3xl sm:w-[450px] sm:h-[300px] w-[400px] h-[250px] cursor-pointer"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          boxShadow="2xl"
          p="6"
          rounded="4xl"
          background={`linear-gradient(rgba(0, 0, 0, 0.1), rgba(255, 0, 0, 0.5)), url(${props1.image})`}
          backgroundRepeat={"no-repeat"}
          backgroundSize={"cover"}
          color={"white"}
          style={{
            transition: "transform 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)"; // Scale up on hover
            e.currentTarget.style.filter = "none"; // Remove filters on hover
            e.currentTarget.style.boxShadow =
              "4px 4px 12px rgba(255, 0, 0, 0.7)"; // Add a shadow on hover
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)"; // Reset scale on hover out
            e.currentTarget.style.filter = "grayscale(100%)"; // Apply a black and white filter on hover out
            e.currentTarget.style.boxShadow = "2px 2px 6px rgba(0, 0, 0, 0.1)"; // Reset the shadow
          }}
        >
          <h1 className="text-4xl text-center">
            <Glitch text={props1.title} />
          </h1>
        </Box>
      </Link>
    </>
  );
};

export default EventCard;
