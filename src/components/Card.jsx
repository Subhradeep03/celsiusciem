import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import cardBg from "../assets/cardBg.png";
import Glitch from "./Glitch";
import { Link } from "react-router-dom";

const Card = ({ title }) => {
  return (
    <div className="grid w-full place-content-center bg-transparent -mt-20 px-4 py-12 text-slate-900">
      <Link to={`/${title.toLowerCase()}`}>
        <TiltCard title={title} />
      </Link>
    </div>
  );
};

const TiltCard = ({ title }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative h-[450px] w-[300px] rounded-xl bg-gradient-to-br from-red-500 to-black"
    >
      <div
        style={{
          background: `url(${cardBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl  shadow-lg"
      >
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-2xl font-bold text-white"
        >
          <Glitch text={title} />
        </p>
      </div>
    </motion.div>
  );
};

export default Card;
