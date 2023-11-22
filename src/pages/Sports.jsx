import Navbar from "../components/Navbar";
import React, { useEffect, useState } from "react";
import { Container, Heading, Stack } from "@chakra-ui/react";
import EventCard from "../components/EventCard";
import "./Sports.css";
import alleventbg from "../assets/alleventbg.jpg";
import AllFooter from "../components/AllFooter";

const Sports = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const sportsData = [
    {
      key: 1,
      title: "torneo",
      image: "https://i.ibb.co/bRfqYM2/torneo.png",
      genre: "outdoor",
    },
    {
      key: 2,
      title: "shuttleup",
      image: "https://i.ibb.co/PFPmpsw/shuttleup.png",
      genre: "indoor",
    },
    {
      key: 3,
      title: "chess",
      image: "https://i.ibb.co/5j8L5PL/chess.png",
      genre: "indoor",
    },
    {
      key: 4,
      title: "smash",
      image: "https://i.ibb.co/mJmKM8f/smash.png",
      genre: "outdoor",
    },
    {
      key: 5,
      title: "carrom",
      image: "https://i.ibb.co/D9htY53/carrom.png",
      genre: "indoor",
    },
    {
      key: 6,
      title: "howzatt",
      image: "https://i.ibb.co/0qS7Lrc/howzat.png",
      genre: "outdoor",
    },
    {
      key: 7,
      title: "table tennis",
      image: "https://i.ibb.co/dky0F4z/tt.jpg",
      genre: "indoor",
    },
  ];

  const [filteredSportsData, setFilteredSportsData] = useState(sportsData);
  const [activeTab, setActiveTab] = useState("all"); // Set "All" as the default tab

  const filterByGenre = (genre) => {
    setActiveTab(genre);
    if (genre === "all") {
      setFilteredSportsData(sportsData);
    } else {
      const filteredData = sportsData.filter((event) => event.genre === genre);
      setFilteredSportsData(filteredData);
    }
  };

  return (
    <div
      style={{
        background: `url(${alleventbg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container
        maxW={"100vw"}
        id={"sports"}
        className={"events_wrapper"}
        paddingBottom={10}
        paddingTop={5}
      >
        <Navbar />
        <Heading
          className="sm:text-8xl text-6xl my-10"
          color={"white"}
          paddingBottom={"10"}
          textAlign={"center"}
        >
          Sports
        </Heading>

        <div className="w-full my-5">
          <div className="sm:flex sm:flex-row sm:justify-evenly my-10 grid grid-cols-2 gap-2 p-4">
            <div
              className={`tab ${activeTab === "all" ? "active" : ""}`}
              onClick={() => filterByGenre("all")}
            >
              All
            </div>
            <div
              className={`tab ${activeTab === "indoor" ? "active" : ""}`}
              onClick={() => filterByGenre("indoor")}
            >
              Indoor
            </div>
            <div
              className={`tab ${activeTab === "outdoor" ? "active" : ""}`}
              onClick={() => filterByGenre("outdoor")}
            >
              Outdoor
            </div>
          </div>
        </div>
        <Stack
          className="px-5"
          direction={["column", "row"]}
          wrap={"wrap"}
          justifyContent={"space-evenly"}
          alignContent={"center"}
          rowGap={"30px"}
        >
          {filteredSportsData.map((item) => (
            <EventCard key={item.key} title={item.title} image={item.image} />
          ))}
        </Stack>
      </Container>
      <AllFooter />
    </div>
  );
};

export default Sports;
