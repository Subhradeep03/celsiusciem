import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import logo from "../assets/logo.png";
import buttonbg from "../assets/buttonbg.png";
import border from "../assets/cutout.png";
import bg1 from "../assets/bg1.jpg";
import fullbg from "../assets/full_bg.jpg";
import bg_new from "../assets/bg_new.webp";
import fakira from "../assets/fakira.png";
import revolution from "../assets/revolution.png";
import anupam from "../assets/anupam.png";
import akriti from "../assets/akriti.png";
import acting_parena from "../assets/acting parena.png";
import folk from "../assets/folk.png";
import trap from "../assets/trap1.png";
import papon from "../assets/papon.png";
import underground from "../assets/underground.png";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Glitch from "../components/Glitch";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Footer from "../components/Footer";

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-80%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <h1 className="text-white text-3xl pt-20 ml-10 -mb-20">
        Past <span className="text-red-500">Performances</span>
      </h1>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden left-20">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      style={{
        backgroundImage: `url(${border})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: 20,
      }}
      className="group relative h-[400px] w-[400px] overflow-hidden bg-transparent rounded-2xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] shadow-red-500 mx-10"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-x-0 bottom-0 z-10 grid place-content-center">
        <p className="bg-transparent mt-10 from-white/20 to-white/0 p-8 font-black uppercase text-white text-4xl text-center">
          <Glitch text={card.title} />
        </p>
      </div>
    </div>
  );
};

const cards = [
  {
    url: "https://akm-img-a-in.tosshub.com/lingo/atbn/images/story/202209/fakira_bangla_band_new_album_hare_krishna_to_release_before_durga_puja_2022-sixteen_nine.jpg?size=948:533",
    title: "Fakira",
    id: 0,
  },
  {
    url: "https://i.ibb.co/qnkQvWM/anupamroy.jpg",
    title: "Anupam Roy",
    id: 2,
  },
  {
    url: "https://i.ibb.co/xsknQ8G/epr.jpg",
    title: "Underground Authority",
    id: 3,
  },
  {
    url: "https://i.ibb.co/VqHS5tR/31-Arjun-Sonakshi.jpg",
    title: "Arjun Kapoor and Sonakshi Sinha",
    id: 4,
  },
  {
    url: "https://i.ibb.co/8P8v1h7/papon.jpg",
    title: "Papon",
    id: 5,
  },
  {
    url: "https://i.ibb.co/0rHXDcM/euphoria.jpg",
    title: "Euphoria",
    id: 6,
  },
  {
    url: "https://i.ibb.co/xgN2LCz/akriti.jpg",
    title: "Akriti Kakkar",
    id: 7,
  },
  {
    url: "https://i.ibb.co/gTNrB4t/trap.png",
    title: "Trap",
    id: 8,
  },
];

import Preloader from "../components/Preloader";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    AOS.init();

    // Simulate a 3-second delay and then hide the preloader
    const preloaderTimeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(preloaderTimeout);
  }, []);
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div
          className="flex flex-col w-full"
          style={{
            backgroundImage: `url(${fullbg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="h-screen flex flex-col" id="1">
            <div className="darken-overlay -z-10"></div>
            <Navbar />
            <div className="flex w-full justify-center items-center h-full flex-col">
              <div className="justify-evenly flex flex-row w-full items-center">
                <div className="animated-div w-[450px] -mt-[100px]">
                  <img src={logo} />
                </div>
              </div>
              <h2 className="text-white text-center text-xl sm:-mt-20 mt-5 mb-10 px-10">
                <Glitch
                  text={
                    "This is your chance to be a part of CIEM's most anticipated yearly festival, in which you can participate, enjoy yourself, and win prizes. We can't wait to see you at this spectacular event."
                  }
                />
              </h2>
              <Link to="/events">
                <div
                  className="p-5 bg-transparent text-white h-full w-full cursor-pointer"
                  style={{
                    backgroundImage: `url(${buttonbg})`,
                    backgroundSize: "contain",
                    borderRadius: "8px",
                    backgroundRepeat: "no-repeat",
                    height: "280px",
                    width: "300px",
                    transition: "transform 0.2s", // Add transition for smooth scaling
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.1)"; // Scale up on hover
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)"; // Reset scale on hover out
                  }}
                >
                  <h1 className="text-2xl text-center mt-6 text-white z-10 ">
                    Register
                  </h1>
                </div>
              </Link>
            </div>
          </div>
          {/* About Us */}
          <div
            style={{
              // backgroundImage: `url(${bg_horror})`,
              // backgroundSize: "contain",
              // width: "100%",
              // height: "100vh",
              // position: "relative",
              // zIndex: 20,
              overflowX: "hidden",
            }}
            className="h-screen flex flex-col mb-10"
            data-aos="zoom-in-up"
            data-aos-duration="10000"
            id="2"
          >
            <div className="flex flex-col mt-[150px] w-full gap-y-10 justify-center">
              <h2 className="text-white text-4xl text-center">
                About <span className="text-red-500">Us</span>
              </h2>
              <div className="flex bg-transparent sm:px-20 px-10">
                <p className="text-white text-2xl text-center overflow-hidden">
                  Calcutta Institute of Engineering and Management was founded
                  in 2003 by (Lt.) Mr. Prasanta Sur, the former Mayor of Kolkata
                  and inaugurated by the legendary (Lt.) Mr. Jyoti Basu.
                  Currently the institution is governed by CIEM Society with Mr.
                  Azizul Haque as the president. The institute is affiliated to
                  MAKAUT (formerly known as WBUT).
                </p>
              </div>
            </div>
          </div>
          {/* Past Performances */}
          <h2 className="text-white text-4xl text-center sm:-mt-36">
            Past Performance
          </h2>
          <div className="flex sm:flex-row flex-col w-full px-6 justify-evenly items-center">
            <div className="flex flex-col items-center justify-center">
              <img src={fakira} className="w-[380px] h-[450px]" />
              <div className="text-2xl text-center text-white">
                <Glitch text={"Fakira"} />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={anupam} className="w-[380px] h-[450px]" />
              <div className="text-2xl text-center text-white">
                <Glitch text={"Anupam Roy"} />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={revolution} className="w-[380px] h-[450px]" />
              <div className="text-2xl text-center text-white">
                <Glitch text={"Revolution"} />
              </div>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col w-full px-6 justify-evenly items-center">
            <div className="flex flex-col items-center justify-center">
              <img src={acting_parena} className="w-[380px] h-[450px]" />
              <div className="text-2xl text-center text-white">
                <Glitch text={"Sonakshi Sinha and Arjun Kapoor"} />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={akriti} className="w-[380px] h-[450px]" />
              <div className="text-2xl text-center text-white">
                <Glitch text={"Akriti Kakkar"} />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={trap} className="w-[380px] h-[450px]" />
              <div className="text-2xl text-center text-white">
                <Glitch text={"TRAP"} />
              </div>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col w-full px-6 justify-evenly items-center">
            <div className="flex flex-col items-center justify-center">
              <img src={papon} className="w-[380px] h-[450px]" />
              <div className="text-2xl text-center text-white">
                <Glitch text={"PAPON"} />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={underground} className="w-[380px] h-[450px]" />
              <div className="text-2xl text-center text-white">
                <Glitch text={"Underground Authority"} />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={folk} className="w-[380px] h-[450px]" />
              <div className="text-2xl text-center text-white">
                <Glitch text={"Surojeet Chatterjee"} />
              </div>
            </div>
          </div>
          {/* This Year */}
          <div
            style={{
              // backgroundImage: `url(${bg4})`,
              backgroundSize: "cover",
              width: "100%",
              height: "100vh",
              position: "relative",
              overflowX: "hidden",
              backgroundRepeat: "no-repeat",
              zIndex: 20,
            }}
            className="h-screen flex flex-col overflow-x-hidden"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <div className="darken-overlay -z-10"></div>
            <div className="flex flex-col mt-[150px] w-full gap-y-10 ">
              <h2 className="text-white text-6xl text-center">This Year</h2>
            </div>
            <div className="justify-center flex flex-col h-full -mt-32">
              <div className="text-white text-4xl text-center">
                <Glitch text={"Will Be Revealed Soon..."} />
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Home;
