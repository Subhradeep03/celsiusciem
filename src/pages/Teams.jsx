import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Glitch from "../components/Glitch";
import AllFooter from "../components/AllFooter";

const FoundationMembers = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-90%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <h1 className="text-white text-3xl sm:ml-10 -mb-20 text-center mt-10">
        Foundation <span className="text-red-500">Members</span>
      </h1>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden left-20">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <FoundationMembersCard card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const FoundationMembersCard = ({ card }) => {
  return (
    <div className="flex flex-col">
      <div
        key={card.id}
        className="group relative sm:h-[300px] sm:w-[300px] h-[350px] w-[350px] overflow-hidden bg-transparent rounded-2xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] shadow-red-500 mx-10"
      >
        <div
          style={{
            backgroundImage: `url(${card.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
        ></div>
      </div>
      <h1 className="text-2xl mt-5 text-center text-white">
        <Glitch text={card.title} />
      </h1>
      <h3 className="text-white text-center mt-5">
        <p>{card.designation}</p>
      </h3>
      <h5 className="text-white text-center mt-5">
        <p>{card.description}</p>
      </h5>
    </div>
  );
};

const cards = [
  {
    url: "https://i.ibb.co/B3wLxkx/Abhishek.jpg",
    title: "Abhishek Kundu",
    id: 2,
    designation: "Fest Observer",
    description:
      "The only thing lower than his sense of humour is his internet speed.",
  },
  {
    url: "https://i.ibb.co/7V41k4L/Tathagata.jpg",
    title: "Tathagata Ghosh",
    id: 0,
    designation: "Head Coordinator",
    description:
      "Equal parts sugar and equal parts spice, always making everything nice!",
  },
  {
    url: "https://i.ibb.co/hXHRMrr/Sudipta.jpg",
    title: "Sudipto Das",
    id: 3,
    designation: "Treasurer",
    description: "Life’s a beach, he's just playing in the sand. ",
  },
  {
    url: "https://i.ibb.co/pdF3hbK/Chandrayee.jpg",
    title: "Chandryaee Ghosh",
    id: 6,
    designation: "PR Head",
    description: "The ultimate queen for a reason (Sarcastically Speaking)",
  },
  {
    url: "https://i.ibb.co/2hwb1gS/Mainak.jpg",
    title: "Mainak Kotal",
    id: 9,
    designation: "Sports Head",
    description: "Will not murder you, unless you really annoy him",
  },
  {
    url: "https://i.ibb.co/n3f1DV1/Kaustava.jpg",
    title: "Kaustava Mitra",
    id: 8,
    designation: "Sports Co-Head",
    description:
      "Awkward for the first 10 minutes, surprisingly charming after",
  },
  {
    url: "https://i.ibb.co/vC5Xkpw/Subhradeep.png",
    title: "Subhradeep Samanta",
    id: 4,
    designation: "Tech Head",
    description: "#1 badboy, bad at letting go.",
  },
  {
    url: "https://i.ibb.co/W3m50Pn/Indranil.jpg",
    title: "Indranil Saha",
    id: 5,
    designation: "Tech Co-Head",
    description: "UNO connoisseur and professional sentry.",
  },

  {
    url: "https://i.ibb.co/JxZZvCw/Arindam.jpg",
    title: "Arindam Chakraborty",
    id: 7,
    designation: "Cultural Head",
    description:
      "similar to a parking ticket, has 'FINE' written all over him.",
  },
];

const CoreMembers = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-95%", "0%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <h1 className="text-white text-3xl ml-10 -mb-20 text-center">
        Core <span className="text-red-500">Members</span>
      </h1>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden left-20">
        <motion.div style={{ x }} className="flex gap-4">
          {Corecards.map((card) => {
            return <FoundationMembersCard card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Corecards = [
  {
    url: "https://i.ibb.co/B3wLxkx/Abhishek.jpg",
    title: "Abhishek Kundu",
    id: 2,
    designation: "Fest Observer",
  },
  {
    url: "https://i.ibb.co/7V41k4L/Tathagata.jpg",
    title: "Tathagata Ghosh",
    id: 0,
    designation: "Head Coordinator",
  },
  {
    url: "https://i.ibb.co/hXHRMrr/Sudipta.jpg",
    title: "Sudipto Das",
    id: 3,
    designation: "Treasurer",
  },
  {
    url: "https://i.ibb.co/vC5Xkpw/Subhradeep.png",
    title: "Subhradeep Samanta",
    id: 4,
    designation: "Tech Head",
  },
  {
    url: "https://i.ibb.co/W3m50Pn/Indranil.jpg",
    title: "Indranil Saha",
    id: 5,
    designation: "Tech Co-Head",
  },
  {
    url: "https://i.ibb.co/pdF3hbK/Chandrayee.jpg",
    title: "Chandryaee Ghosh",
    id: 6,
    designation: "PR Head",
  },
  {
    url: "https://i.ibb.co/JxZZvCw/Arindam.jpg",
    title: "Arindam Chakraborty",
    id: 7,
    designation: "Cultural Head",
  },
  {
    url: "https://i.ibb.co/n3f1DV1/Kaustava.jpg",
    title: "Kaustava Mitra",
    id: 8,
    designation: "Sports Co-Head",
  },
  {
    url: "https://i.ibb.co/2hwb1gS/Mainak.jpg",
    title: "Mainak Kotal",
    id: 9,
    designation: "Sports Head",
  },
  {
    url: "https://i.ibb.co/VjKRfWX/IMG-20231118-WA0018.jpg",
    title: "Gouree Purkait",
    id: 13,
    designation: "Executive Head",
  },
  {
    url: "https://i.ibb.co/ZSDfYTr/Screenshot-2023-11-03-204711.png",
    title: "Sukanya Mondal",
    id: 10,
    designation: "Executive Co-Head",
  },
  {
    url: "https://i.ibb.co/FqNXY2V/Suranjan.jpg",
    title: "Suranjan Samanta",
    id: 11,
    designation: "Director Of Photography",
  },
  {
    url: "https://i.ibb.co/g47s1QP/IMG-20231020-WA0032.jpg",
    title: "Sneha Das",
    id: 12,
    designation: "Fashion Co-Head",
  },
  {
    url: "https://i.ibb.co/fr6mvZS/Sudipto.jpg",
    title: "Sudipto Dey",
    id: 13,
    designation: "Volley Head",
  },
  {
    url: "https://i.ibb.co/qFFmdWS/Srija.jpg",
    title: "Srijaa Chatterjee",
    id: 14,
    designation: "Drama Head",
  },
  {
    url: "https://i.ibb.co/kJn8NMf/Jayajyoti.jpg",
    title: "Jayajyoti Kundu",
    id: 15,
    designation: "Football Head",
  },
  {
    url: "https://i.ibb.co/55pBVR2/Anirban.jpg",
    title: "Anirban Roy Choudhury",
    id: 16,
    designation: "Carrom Head",
  },
  {
    url: "https://scontent.fccu31-1.fna.fbcdn.net/v/t39.30808-6/380886443_1338693303401003_7966407238459624547_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BzZKAbsHVfsAX-bxCjN&_nc_ht=scontent.fccu31-1.fna&oh=00_AfByK1dMLzHdbJG7Q3uz67BTiDPSawbLnr_K3WDhTXdQ2A&oe=65601B17",
    title: "Sabuj Pal",
    id: 17,
    designation: "Singing Head",
  },
  {
    url: "https://i.ibb.co/rGsys5N/Whats-App-Image-2023-11-20-at-4-23-08-PM.jpg",
    title: "Soumik Dutta",
    id: 18,
    designation: "Business Head",
  },
];

const ExecutiveMembers = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-90%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <h1 className="text-white text-3xl ml-10 -mb-20 text-center">
        Cementing the <span className="text-red-500">Foundation</span>
      </h1>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden left-20">
        <motion.div style={{ x }} className="flex gap-4">
          {Executivecards.map((card) => {
            return <FoundationMembersCard card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Executivecards = [
  {
    url: "https://i.ibb.co/nDKs9JS/Whats-App-Image-2023-11-18-at-2-08-40-PM.jpg",
    title: "Tridibesh Jha",
    id: 2,
    designation: "All Terrain Co-Head",
  },
  {
    url: "https://i.ibb.co/MsfKtbC/Tulia.webp",
    title: "Tulia Dasgupta",
    id: 2,
    designation: "Dance Co-Head",
  },
  {
    url: "https://i.ibb.co/LnrL5R5/Sayanjib.jpg",
    title: "Sayanjib Sur",
    id: 2,
    designation: "Hackathon Co-Head",
  },
  {
    url: "https://i.ibb.co/Xt0gCph/Biki.jpg",
    title: "Biki Saha",
    id: 2,
    designation: "Badmintor Head",
  },
  {
    url: "https://i.ibb.co/HYcFGLC/Disha.jpg",
    title: "Disha Majumdar",
    id: 2,
    designation: "Dance Co-Head",
  },
  {
    url: "https://i.ibb.co/Fm0ZsPg/Akash.webp",
    title: "Akash Nath",
    id: 2,
    designation: "Badminton Co-Head",
  },
  {
    url: "https://i.ibb.co/sWB0W29/IMG-20231118-WA0001.jpg",
    title: "Warribum Yonex Singh",
    id: 2,
    designation: "Volleyball Co-Head",
  },
  {
    url: "https://i.ibb.co/ZTYGwP0/Debayan.jpg",
    title: "Debayan Chaudhury",
    id: 2,
    designation: "Chess Head",
  },
  {
    url: "https://i.ibb.co/CWjfVk7/Suryanath.jpg",
    title: "Suryanath Chakrabarti",
    id: 2,
    designation: "Table Tennis Head",
  },
];

const TeacherInCharge = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-90%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <h1 className="text-white text-3xl ml-10 -mb-20 text-center">
        Teacher <span className="text-red-500">InCharge</span>
      </h1>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden left-20">
        <motion.div style={{ x }} className="flex gap-4">
          {TeacherCards.map((card) => {
            return <FoundationMembersCard card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const TeacherCards = [
  {
    url: "https://www.ciem.ac.in/assets/prof-sudipta-ghosh.webp",
    title: "Sudipto Ghosh",
    id: 2,
    designation: "Tech Incharge",
  },
  {
    url: "https://i.ibb.co/HdSLm2s/Whats-App-Image-2023-11-21-at-3-19-20-PM.jpg",
    title: "Sk Anarul",
    id: 2,
    designation: "Sports Incharge",
  },
  {
    url: "https://i.ibb.co/gZHnnMF/Whats-App-Image-2023-11-21-at-3-23-34-PM.jpg",
    title: "Riddho Chaudhuri",
    id: 2,
    designation: "Cultural Incharge",
  },
];

const Teams = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <TeacherInCharge />
      <FoundationMembers />
      <CoreMembers />
      <ExecutiveMembers />
      <AllFooter />
    </div>
  );
};

export default Teams;
