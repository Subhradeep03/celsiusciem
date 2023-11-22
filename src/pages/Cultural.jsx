import Navbar from "../components/Navbar";
import React, { useEffect, useState } from "react";
import { Container, Heading, Stack } from "@chakra-ui/react";
import EventCard from "../components/EventCard";
import alleventbg from "../assets/alleventbg.jpg";
import AllFooter from "../components/AllFooter";

const Cultural = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const culturalData = [
    {
      key: 1,
      title: "Acapella Allure (Solo Singing)",
      image: "https://i.ibb.co/z78nXQB/guitar-tabla-v-cajon-nh-c-c.jpg",
    },
    {
      key: 2,
      title: "Prarambha (eastern solo dancing)",
      image: "https://i.ibb.co/RjK28zc/easterndance.jpg",
    },
    {
      key: 6,
      title: "sizzle 'n shake (western solo dancing)",
      image: "https://i.ibb.co/6vC6RS2/dancing.jpg",
    },
    {
      key: 7,
      title: "sync-fleet (group dance)",
      image: "https://i.ibb.co/6vC6RS2/dancing.jpg",
    },
    {
      key: 3,
      title: "Bellissima (fashion show)",
      image: "https://i.ibb.co/0DLTgdY/fashionshow.jpg",
    },
    {
      key: 8,
      title: "uproar (cypher)",
      image:
        "https://mice.osaka-info.jp/whyosaka/news/images/f344e3ef3d93c4bcf7109dd8a5b76a23fa41926c.jpg",
    },
    {
      key: 9,
      title: "agam (war of bands)",
      image:
        "https://tricityvibe.com/wp-content/uploads/2013/03/0201-600x400.jpg",
    },
    {
      key: 10,
      title: "coscon (cosplay)",
      image:
        "https://i.ibb.co/Bg44tvB/Whats-App-Image-2023-11-05-at-8-18-18-PM.jpg",
    },
    {
      key: 10,
      title: "acto mania (street drama)",
      image: "https://live.staticflickr.com/5820/29873828204_66b2f366cf_b.jpg",
    },
    {
      key: 11,
      title: "paint the town red (Wall Painting)",
      image:
        "https://media.istockphoto.com/id/1368633075/photo/on-the-wall-at-the-nursery-room-skilled-and-dedicated-male-artist-painting-the-mural.jpg?s=612x612&w=0&k=20&c=3v45OOELiVjufczPX0OUFAjfURCBHKHOE64rjmywh9c=",
    },
    {
      key: 12,
      title: "let's meme it (meme making)",
      image:
        "https://cdn.pizap.com/pizapfiles/images/meme_maker_creator_app05.jpg",
    },
    {
      key: 13,
      title: "reel it, feel it (reel making)",
      image:
        "https://b1422126.smushcdn.com/1422126/wp-content/uploads/2021/04/instagram_reels-1024x576.jpg?lossy=0&strip=1&webp=1",
    },
    {
      key: 14,
      title: "lensation (photography)",
      image:
        "https://cdn.thecollector.com/wp-content/uploads/2023/05/tips-to-become-a-great-photographer.jpg",
    },
  ];

  const [filteredCulturalData, setFilteredCulturalData] =
    useState(culturalData);
  const [activeTab, setActiveTab] = useState("all"); // Set "All" as the default tab

  const filterByGenre = (genre) => {
    setActiveTab(genre);
    if (genre === "all") {
      setFilteredCulturalData(culturalData);
    } else {
      const filteredData = culturalData.filter(
        (event) => event.genre === genre
      );
      setFilteredCulturalData(culturalData);
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
          Cultural
        </Heading>

        <Stack
          className="px-5"
          direction={["column", "row"]}
          wrap={"wrap"}
          justifyContent={"space-evenly"}
          alignContent={"center"}
          rowGap={"30px"}
        >
          {filteredCulturalData.map((item) => (
            <EventCard key={item.key} title={item.title} image={item.image} />
          ))}
        </Stack>
      </Container>
      <AllFooter />
    </div>
  );
};

export default Cultural;
