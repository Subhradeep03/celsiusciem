import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import "./Events.css";
import Card from "../components/Card";
import { useState } from "react";
import AllFooter from "../components/AllFooter";

const Events = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const moveX = (clientX - windowWidth / 1) / windowWidth;
    const moveY = (clientY - windowHeight / 1) / windowHeight;
    setMouseX(moveX);
    setMouseY(moveY);
  };

  return (
    <>
      <div
        className="flex flex-col w-full h-screen"
        style={{
          backgroundImage: `url("https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700861350.jpg")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          transformStyle: "preserve-3d",
          perspective: "1000px",
          // transform: `translateX(${mouseX * 20}px) translateY(${
          //   mouseY * 20
          // }px)`,
          overflowX: "hidden",
        }}
        onMouseMove={handleMouseMove}
      >
        <Navbar />
        <div className="w-full h-full sm:flex-row flex-col gap-y-10 mb-10 justify-between my-10 flex items-center px-20">
          <Card title={"Sports"} />
          <Card title={"Technical"} />
          <Card title={"Cultural"} />
        </div>
      </div>
      <AllFooter />
    </>
  );
};

export default Events;
