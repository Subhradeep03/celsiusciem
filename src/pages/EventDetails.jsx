import React from "react";
import { useParams } from "react-router-dom";
import EventDetailsDesign from "./EventDetailsDesign";
import { useEffect } from "react";
import AllFooter from "../components/AllFooter";
const EventDetails = () => {
  const params = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const allEvents = [
    {
      key: 1,
      title: "torneo",
      person1: "Mainak Kotal",
      person2: "Satyaki",
      contact1: 9832868016,
      contact2: 8777098328,
      rule: "https://i.ibb.co/Ky5F5p0/Red-Black-Illustrated-Haunted-Manor-Horror-Novel-Book-Cover.png",
      images: [
        "https://i.ibb.co/0JdWpcM/torneo-moment1.jpg",
        "https://i.ibb.co/QYNfZjp/IMG-4503.jpg",
      ],
      category: "sports",
      date: "5/6/7th January",
      fee: " Rs 1800",
      prize: "Rs 12000",
    },
    {
      key: 2,
      title: "smash",
      person1: "Mainak Kotal",
      person2: "Sashank",
      contact1: 9832868016,
      contact2: 9667022458,
      rule: "https://i.ibb.co/FXsJSSb/volleyball.png",
      images: [
        "https://i.ibb.co/qyjxtQ6/338136844-778663460073378-9215518887055321265-n.jpg",
        "https://i.ibb.co/FX4SBwj/338156853-898680641367285-4178977480372802456-n.jpg",
      ],
      carousel1: "",
      prize: "Rs 6000",
      category: "sports",
      date: "9/10th January",
      fee: "Rs 800",
    },
    {
      key: 3,
      title: "shuttleup",
      person1: "Kaustava Mitra",
      person2: "Saptarshi",
      contact1: 8777237211,
      contact2: 8017724781,
      rule: "https://i.ibb.co/NZSPCzM/badminton.png",
      images: [
        "https://i.ibb.co/XStrWzj/337518077-3515352828742055-4322215372408983517-n.jpg",
        "https://i.ibb.co/bLtWNz6/shuttleup-momen1.jpg",
      ],
      category: "sports",
      prize: "Rs 12800",
      date: "2nd/3rd/4th January",
      fee: "Single: Rs 100, Double : Rs 200",
    },
    {
      key: 4,
      title: "carrom",
      person1: "Kaustava Mitra",
      person2: "Anirban",
      contact1: 8777237211,
      contact2: 7980809234,
      rule: "https://i.ibb.co/jLZv7rc/carrom.png",
      images: [
        "https://i.ibb.co/XS6kTW1/carrom-moment1.jpg",
        "https://i.ibb.co/D4bYR60/carame.jpg",
      ],
      category: "sports",
      prize: "Rs 7600",
      date: "5th/6th January",
      fee: "Single: Rs 50, Double : Rs 100",
    },
    {
      key: 5,
      title: "chess",
      person1: "Kaustava Mitra",
      person2: "",
      contact1: 8777237211,
      contact2: 123344556677,
      rule: "https://i.ibb.co/rxyFhBL/chess.png",
      images: [
        "https://i.ibb.co/GWW1DCQ/IMG-4566.jpg",
        "https://i.ibb.co/jghjMjF/chess-moment1.jpg",
      ],
      category: "sports",
      prize: "Rs 3800",
      date: "5/6th January",
      fee: "Rs 100",
    },
    {
      key: 6,
      title: "howzatt",
      person1: "Mainak Kotal",
      person2: "Shuvam",
      contact1: 9832868016,
      contact2: 9609604995,
      rule: "https://i.ibb.co/fp0RwWb/cricket.png",
      images: [
        "https://i.ibb.co/2gzmPyx/337706365-888136635602885-578816392205741076-n.jpg",
        "https://i.ibb.co/ctTDN45/337150034-1208453296471667-4889783859251799164-n.jpg",
      ],
      category: "sports",
      date: "2nd/3rd/4th January",
      fee: "Rs 1500",
      prize: "Rs 12000",
    },
    {
      key: 7,
      title: "table tennis",
      person1: "Kaustava Mitra",
      person2: "Biki",
      contact1: 8777237211,
      contact2: 9002762648,
      rule: "https://i.ibb.co/3fCKM36/tabletennis.png",
      images: [
        "https://i.ibb.co/1dhqbWP/337039703-1647913322296426-4930684816678638459-n.jpg",
      ],
      category: "sports",
      date: "3rd/4th January",
      prize: "Rs 11400",
      fee: "Single: Rs 100, Double : Rs 200",
      carousel1: "",
    },
    {
      key: 8,
      title: "mobile gaming",
      person1: "Indranil Saha",
      person2: "Anik Das",
      contact1: 7980335416,
      contact2: 7980290813,
      images: [
        "https://i.ibb.co/MDGZPLw/mobilegaming-moment1.jpg",
        "https://i.ibb.co/ft2WDt3/mobilegaming-moment2.jpg",
      ],
      category: "gaming",
      date: "8/9/10th January",
      rule: "https://docs.google.com/document/d/1EuK65tvf52s-3T1I4dPuJq7GCZZAVv6OsEzCGdUUYXY/edit?usp=sharing",
      register: " https://forms.gle/toQCB6LSgBWwvSJs8",
      fee: "PES :- Rs 50 per person, BGMI :- Rs 100 per Squad, COD :- Rs 50 per person",
      prize: "Rs 2000",
    },
    {
      key: 9,
      title: "pc gaming",
      person1: "Indranil Saha",
      person2: "Subham Dutta",
      contact1: 7605860024,
      contact2: 9831118649,
      images: [
        "https://i.ibb.co/VmTGYWX/pcgaming-moment1.jpg",
        "https://i.ibb.co/7WkCyNf/pcgaming-moment2.jpg",
        "https://i.ibb.co/x7C7LB2/pcgaming-moment3.jpg",
      ],
      category: "gaming",
      register: "https://forms.gle/q7R7LgBoX94KMnoq6",
      rule: "https://docs.google.com/document/d/1NMD_pxdhr-ciW5iq_Ikl3xCQOSHqHSMWoaDw1Pik8o0/edit?usp=sharing",
      date: "8/9/10th January",
      fee: "Rs 500 per team",
      prize: "Rs 5000",
    },
    {
      key: 10,
      title: "codedrift 4.0",
      person1: "Subhradeep Samanta",
      person2: "Tathagata",
      contact1: 8584021403,
      contact2: 6290905836,
      register: "https://forms.gle/tPQP16emt6ZiSPpTA",
      rule: "https://docs.google.com/document/d/1yGUySpZOyUDjFRiJ61PaYC0MiJDymPSB8yPGpbErv-8/edit?usp=sharing",
      images: ["https://i.ibb.co/0jR6K84/codedrift-moment1.jpg"],
      category: "technical",
      date: "8th January",
      fee: "Rs 70 per person",
      prize: "Rs 15000",
    },
    {
      key: 11,
      title: "all terrain",
      person1: "Indranil Saha",
      person2: "Tridibesh Jha",
      contact1: 7319217767,
      contact2: 7439582390,
      rule: "https://docs.google.com/document/d/112Qhn2qWcmTDmBzHNkOiF-obYVJqW7tNyB8HbSJgahQ/edit?usp=sharing",
      register: "https://forms.gle/say9g8rzSpvB5nzx5",
      images: [
        "https://i.ibb.co/cFVYKbD/IMG-3637.jpg",
        "https://i.ibb.co/hM2xs08/IMG-3631.jpg",
        "https://i.ibb.co/yqbpj82/IMG-3628.jpg",
      ],
      carousel1: "",
      date: "8/9 th January",
      fee: "Team Size (4 Max) Rs 250 per team",
      prize: "Rs 15000",
      category: "technical",
    },
    {
      key: 12,
      title: "robo soccer",
      person1: "Indranil Saha",
      person2: "Dharamnath Jha",
      contact1: 7319217767,
      contact2: 9599904224,
      register: "https://forms.gle/mb666dSmQGpqwzLm7",
      rule: "https://docs.google.com/document/d/1psLa1Vb-OUs6sCjQxLjqMl0CQtt4Du1uCU0mOWA8dJg/edit?usp=sharing ",
      images: [
        "https://i.ibb.co/XzNZhpZ/IMG-4028.jpg",
        "https://i.ibb.co/3RLb1Dx/IMG-4026.jpg",
      ],
      date: "7/8/9/10 th January",
      fee: "Rs 50 per person",
      prize: "Get Instant cashback of Rs 80",
      category: "technical",
    },
    {
      key: 13,
      title: "line of control",
      person1: "Ankana Parbat",
      person2: "Mrigank Biswas",
      contact1: 8017608350,
      contact2: 6290336953,
      register: "https://forms.gle/sh6TXHsjVNSEWy5u7",
      rule: "https://docs.google.com/document/d/1OsE_dYIbbiA62amf3R_onj2TDnDQIqq_69j75ectgMg/edit?usp=sharing ",
      images: [
        "https://i.ibb.co/L5fHg5T/IMG-4119.jpg",
        "https://i.ibb.co/s6qyF1B/IMG-4118.jpg",
      ],
      date: "8/9 th January",
      fee: "Team Size (4 Max) Rs 250 per team",
      prize: "Rs 12000",
      category: "technical",
    },
    {
      key: 14,
      title: "treasure hunt",
      person1: "Indranil Saha",
      person2: "Tanmoy Biswas",
      contact1: 7319217767,
      contact2: 8336866253,
      rule: "https://docs.google.com/document/d/1x9-rLx2lMa2TrUQseapxsWT447bg3pGAA0YMIZ0vsOA/edit?usp=sharing",
      register: " https://forms.gle/gYbeWAc4798MBhKY6",
      images: [
        "https://i.ibb.co/mRQgXsz/treasurehunt-moment1.jpg",
        "https://i.ibb.co/7ghTPxZ/IMG-4104.jpg",
      ],
      date: "8/9 th January",
      fee: "Team Size (4 Max) Rs 50 per person",
      prize: "Rs 8000",
      category: "technical",
    },
    {
      key: 15,
      title: "model display",
      person1: "Indranil Saha",
      person2: "Swagata Das",
      contact1: 7319217767,
      contact2: 9163984556,
      rule: "https://docs.google.com/document/d/1BzyTQ0kAJklMBTb2yTiu_1IbwmEGy9jSCPJAtzpU2HE/edit?usp=sharing",
      register: "https://forms.gle/oGxeGcHHcnYsmy8n8",
      images: [
        "https://i.ibb.co/zWgbbSc/IMG-4333.jpg",
        "https://i.ibb.co/FYrwMLq/modeldisplay-moment1.jpg",
      ],
      date: "9th January",
      fee: " Rs 30 per person",
      prize: "Rs 6000",
      category: "technical",
    },
    {
      key: 16,
      title: "tech quiz",
      person1: "Indranil Saha",
      person2: "Rahul Das",
      contact1: 7319217767,
      contact2: 9007080729,
      rule: "https://docs.google.com/document/d/1uSTvb8hy0dGtOyLtOh2MakHH9vWFPz27qcA7a9xOgVo/edit?usp=sharing",
      register: "https://forms.gle/DNE5RmGW68twKp9v7",
      images: [
        "https://i.ibb.co/5nfpWFR/IMG-4029.jpg",
        "https://i.ibb.co/5TcX59S/IMG-4033.jpg",
      ],
      date: "8/9th January",
      fee: "Team Size (2 Max) Rs 50 per team",
      prize: "Rs 5000",
      category: "technical",
      carousel1: "https://i.ibb.co/7zWkLj7/ideathon-moment1.jpg",
    },
    {
      key: 17,
      title: "Money Heists (ideathon)",
      person1: "Indranil Saha",
      person2: "Ambar Pahari",
      contact1: 8777793318,
      contact2: 8768906846,
      rule: "https://docs.google.com/document/d/18Sl8evlU8IMU0p3h66Zp-t1NVSmeBWgo7katDNXkH0M/edit?usp=share_link",
      register:
        "https://docs.google.com/forms/d/e/1FAIpQLSd8BBvB8mxWRYd7ZAEKeK7iveDhzVrtZldulr1L19oX0ne4ZQ/viewform",
      images: ["https://i.ibb.co/7zWkLj7/ideathon-moment1.jpg"],
      carousel1: "",
      date: "8th January",
      fee: "Team Size (5 Max) Rs 200 per team",
      prize: "Rs 3000",
      category: "business",
    },

    {
      key: 18,
      title: "Talk Rocks (debate)",
      person1: "Subhradeep Samanta",
      person2: "Ambar Pahari",
      contact1: 8584021403,
      contact2: 8768906846,
      rule: "https://docs.google.com/document/d/1oXIJlmGNeRzEibGk_GB3NxA9UXoj6WGds5f-cPnUKDo/edit?usp=share_link",
      register:
        "https://docs.google.com/forms/d/e/1FAIpQLSd8BBvB8mxWRYd7ZAEKeK7iveDhzVrtZldulr1L19oX0ne4ZQ/viewform",
      images: [
        "https://www.thoughtco.com/thmb/OHDsYeRFKM1v1lMVNbu9mDJIaJc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1144822648-e7617ee8970d4f058b2506784927713a.jpg",
      ],
      date: "8th January",
      fee: "Rs 50 per person",
      prize: "Rs 1000",
      category: "business",
      carousel1: "",
    },
    {
      key: 19,
      title: "hackathon",
      person1: "Subhradeep Samanta",
      person2: "Sayanjib Sur",
      contact1: 8584021403,
      contact2: 8617750297,
      rule: "https://docs.google.com/document/d/1H1njNBZ9LpB78ptj27LASbpxjw3Dwc97o9MKYUpX4Sw/edit?usp=sharing",
      register: "https://forms.gle/ihZdPaXftoQDjcSh6 ",
      images: [
        "https://i.ibb.co/Kb4mR6L/hackathon1-1.png",
        "https://i.ibb.co/dmtwcjm/hackathon1-2.png",
        "https://i.ibb.co/x5xv1RJ/hackathon1-3.png",
      ],
      date: "8th January",
      fee: "Team Size (6 Max) Rs 250 per team",
      prize: "Rs 15000",
      category: "technical",
    },
    {
      key: 20,
      title: "bridge building",
      person1: "Abhimanya Saha",
      person2: "Chandan Thakur",
      contact1: 8917330442,
      contact2: 8240119349,
      rule: "https://docs.google.com/document/d/1vrkZ5s2BOk9YOHQb3DkTJnVFNZXyfo6w5RJRp0hWE1M/edit?usp=sharing",
      register: "https://forms.gle/9dFMbmKkwtyPLvPS7",
      images: [
        "https://i.ibb.co/qkvMWyf/IMG-4128.jpg",
        "https://i.ibb.co/m6j8nxq/bridgebuilding-moment2.jpg",
      ],

      date: "8/9 th January",
      fee: "Team Size (5 Max) Rs 250 per team",
      prize: "Rs 5000",
      category: "technical",
    },
    {
      key: 21,
      title: "Speaker Speak Out (public speaking)",
      person1: "Subhradeep Samanta",
      person2: "Ambar Pahari",
      contact1: 8584021403,
      contact2: 8768906846,
      rule: "https://docs.google.com/document/d/1WuazWbHWKYzBPaMY80IhcpIH2bidLr9VbemSQwaZpwE/edit?usp=share_link",
      register:
        "https://docs.google.com/forms/d/e/1FAIpQLSd8BBvB8mxWRYd7ZAEKeK7iveDhzVrtZldulr1L19oX0ne4ZQ/viewform",
      images: [
        "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_800,h_450/https://jefmenguin.com/wp-content/uploads/2023/06/elbi-professional-speakers.jpg",
      ],
      date: "8th January",
      fee: "Rs 50 per person",
      prize: "Rs 1000",
      category: "business",
      carousel1: "",
    },
    {
      key: 22,
      title: "Acapella Allure (Solo Singing)",
      person1: "Arindam Chakrabory",
      person2: "Aritra Naharay",
      contact1: 8777491797,
      contact2: 9599904224,
      register:
        "https://docs.google.com/forms/d/e/1FAIpQLScNXYCb04FqBXLjDgPiKk6-Le-r-Vy7LicIcwu2JWe60Qe2qQ/viewform",
      images: [
        "https://i.ibb.co/fHmLPdd/IMG-4717.jpg",
        "https://i.ibb.co/Lk8mPDb/IMG-4743.jpg",
      ],
      date: "11th and 12th January",
      fee: "Rs 50 per person",
      prize: "Rs 3000",
      category: "cultural",
      carousel1: "",
    },
    {
      key: 23,
      title: "Prarambha (eastern solo dancing)",
      person1: "Arindam Chakraborty",
      person2: "Surottama Roy",
      contact1: 8777491797,
      contact2: 7003689835,
      register:
        "https://docs.google.com/forms/d/e/1FAIpQLSd3QmH9eyBfSByDi7RDo1fpmQuG7N6qo_rjILgzVHPdwS18iA/viewform",
      images: [
        "https://i.ibb.co/4ZwRLDQ/IMG-4881.jpg",
        "https://i.ibb.co/ZKBwNfv/IMG-4973.jpg",
        "https://i.ibb.co/r506grZ/IMG-4977.jpg",
        "https://i.ibb.co/kH1rdzR/IMG-4849-1.jpg",
      ],
      date: "12th and 13th April",
      fee: "Rs 100 per person",
      prize: "Rs 3000",
      category: "cultural",
      carousel1: "",
    },
    {
      key: 24,
      title: "Bellissima (fashion show)",
      person1: "Arindam Chakraborty",
      person2: "Surottama Roy",
      contact1: 8777491797,
      contact2: 7003689835,
      rule: "https://docs.google.com/document/d/1VJCy-VkT4zkEqwS2CCEQC137FMSfum9pPSW-LGyU-U4/edit?usp=share_link",
      register:
        "https://docs.google.com/forms/d/e/1FAIpQLSeJj4WU364KdQxSW3wqiReJ9v_lG7Aw1aykme4KAs04R2WTJA/viewform",
      images: [
        "https://i.ibb.co/Gn8V2Nh/IMG-0398.jpg",
        "https://i.ibb.co/JmbKKP4/IMG-5951.jpg",
        "https://i.ibb.co/nznyxLJ/IMG-6004-1.jpg",
      ],
      date: "12th January",
      fee: "Rs 500 per team",
      prize: "Rs 5000",
      category: "cultural",
      carousel1: "",
    },
    {
      key: 26,
      title: "sizzle 'n shake (western solo dancing)",
      person1: "Arindam Chakraborty",
      person2: "Surottama Roy",
      contact1: 8777491797,
      contact2: 7003689835,
      register:
        "https://docs.google.com/forms/d/e/1FAIpQLSfKCkR0PgGWvDavR9PVHhk56SOgMwEk6lZgv2LCtJv3NU_pfg/viewform",
      images: ["https://i.ibb.co/jHStw3F/IMG-5064.jpg"],
      date: "12th and 13th January",
      fee: "Rs 100 per person",
      prize: "Rs 3000",
      category: "cultural",
      carousel1: "",
    },
    {
      key: 27,
      title: "sync-fleet (group dance)",
      person1: "Arindam Chakraborty",
      person2: "Surottama Roy",
      contact1: 8777491797,
      contact2: 7003689835,
      rule: "https://docs.google.com/document/d/1Om26T7gjV8R2h21uvl_DI8zEy7D1LeyZKDBjedgcj-Q/edit?usp=share_link",
      register:
        "https://docs.google.com/forms/d/e/1FAIpQLSdLlyzhfm-D0oCxcC_xTEovXOCUmsxaVxdgK6WmmjmYlCEo4A/viewform",
      images: [
        "https://i.ibb.co/CVG45YM/IMG-5152.jpg",
        "https://i.ibb.co/m5WLwSm/IMG-5168.jpg",
        "https://i.ibb.co/vBQJYjq/IMG-5319.jpg",
      ],
      date: "13th January",
      fee: "Rs 300 per team",
      prize: "Rs 4500",
      category: "cultural",
      carousel1: "",
    },
    {
      key: 28,
      title: "war of bands",
      person1: "Arindam Chakraborty",
      person2: "Surottama Roy",
      contact1: 8777491797,
      contact2: 7003689835,
      rule: "https://docs.google.com/document/d/1Om26T7gjV8R2h21uvl_DI8zEy7D1LeyZKDBjedgcj-Q/edit?usp=share_link",
      register: "#",
      images: ["https://i.ibb.co/Vws8QKB/IMG-4647.jpg"],
      date: "3rd and 7th April",
      fee: "Rs 600 per team",
      prize: "Rs 1000",
      category: "cultural",
      carousel1: "",
    },
    {
      key: 29,
      title: "JAM (just a min)",
      person1: "Subhradeep Samanta",
      person2: "Ambar Pahari",
      contact1: 8777793318,
      contact2: 8768906846,
      rule: "",
      register:
        "https://docs.google.com/forms/d/e/1FAIpQLScNSYu3gtgECuHIGkLlm0KEDuqkHxRzgyb4mR9qhBCYIbsmEg/viewform?usp=share_link",
      images: [
        "https://www.sjchs.edu.in/wp-content/uploads/2019/11/IMG_4194-min-1024x683.jpg",
      ],
      carousel1: "",
      date: "9th January",
      fee: "Team Size (5 Max) Rs 50 per team",
      prize: "Rs 2000",
      category: "business",
    },
    {
      key: 30,
      title: "Agree to Disagree(group discussion)",
      person1: "Indranil Saha",
      person2: "Ambar Pahari",
      contact1: 8777793318,
      contact2: 8768906846,
      rule: "",
      register:
        "https://docs.google.com/forms/d/e/1FAIpQLScNSYu3gtgECuHIGkLlm0KEDuqkHxRzgyb4mR9qhBCYIbsmEg/viewform?usp=share_link",
      images: [
        "https://images.deccanherald.com/deccanherald%2Fimport%2Fsites%2Fdh%2Ffiles%2Farticleimages%2F2021%2F01%2F05%2Fgroup-discussion-istock-603992138-935358-1609832067.jpg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100",
      ],
      carousel1: "",
      date: "8th January",
      fee: "Team Size (5 Max) Rs 50 per team",
      prize: "Rs 2000",
      category: "business",
    },
    {
      key: 31,
      title: "rc car race",
      person1: "Indranil Saha",
      person2: "Ambar Pahari",
      contact1: 8777793318,
      contact2: 8768906846,
      rule: "https://docs.google.com/document/d/1TeASMrsr8anmyk6FMNa2WcVbHoUYBmk_jOgnqG_NV-E/edit?usp=sharing",
      register:
        "https://docs.google.com/forms/d/e/1FAIpQLScNSYu3gtgECuHIGkLlm0KEDuqkHxRzgyb4mR9qhBCYIbsmEg/viewform?usp=share_link",
      images: [
        "https://imechewebresources.blob.core.windows.net/imeche-web-content/images/default-source/oscar/news/2022/robo-race3-800.png?sfvrsn=65946e11_2",
      ],
      carousel1: "",
      date: "7/8/9/10th January",
      fee: "Team Size (5 Max) Rs 50 per team",
      prize: "Rs 5000",
      category: "technical",
    },
    {
      key: 32,
      title: "autocad drafting",
      person1: "Tithi Biswas",
      person2: "Ambar Pahari",
      contact1: 8777793318,
      contact2: 8768906846,
      rule: "https://docs.google.com/document/d/1QlGeqNKenyaZxZFEmtDD1hosydDqemRgqxGKMy83Lyw/edit?usp=sharing",
      register:
        "https://docs.google.com/forms/d/e/1FAIpQLScNSYu3gtgECuHIGkLlm0KEDuqkHxRzgyb4mR9qhBCYIbsmEg/viewform?usp=share_link",
      images: [
        "https://blog.scitraining.com/wp-content/uploads/2018/10/what-is-drafting-in-autocad.jpg",
      ],
      carousel1: "",
      date: "10th January",
      fee: "Team Size (5 Max) Rs 50 per team",
      prize: "Rs 5000",
      category: "technical",
    },
    {
      key: 33,
      title: "uproar (cypher)",
      person1: "Arindam Chakraborty",
      person2: "Surottama Roy",
      contact1: 8777491797,
      contact2: 7003689835,
      rule: "https://docs.google.com/document/d/18Sl8evlU8IMU0p3h66Zp-t1NVSmeBWgo7katDNXkH0M/edit?usp=share_link",
      register:
        "https://docs.google.com/forms/d/e/1FAIpQLSc_KZxsl_vdanTUEOSSVDuJozfGL4V8jgfYyDQhMjbhWNKgfA/viewform",
      images: [
        "https://img.freepik.com/premium-photo/breakdancing_891336-13937.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699401600&semt=ais",
      ],
      carousel1: "",
      date: "12th January",
      fee: "Rs 50 ",
      prize: "Rs 1500",
      category: "cultural",
    },
    {
      key: 34,
      title: "agam (war of bands)",
      person1: "Arindam Chakraborty",
      person2: "Surottama Roy",
      contact1: 8777491797,
      contact2: 7003689835,
      rule: "https://docs.google.com/document/d/18Sl8evlU8IMU0p3h66Zp-t1NVSmeBWgo7katDNXkH0M/edit?usp=share_link",
      register:
        "https://docs.google.com/forms/d/e/1FAIpQLSfl8siWs7D1mHvsC-6X8vfLD2lGyBU3wCCf0lDSJjneYluOiQ/viewform",
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/4/49/Battles_22-11-07.jpg",
      ],
      carousel1: "",
      date: "14th January",
      fee: "Rs 300 per team",
      prize: "Rs 4500",
      category: "cultural",
    },
    {
      key: 35,
      title: "coscon (cosplay)",
      person1: "Arindam Chakraborty",
      person2: "Surottama Roy",
      contact1: 8777491797,
      contact2: 7003689835,
      rule: "https://docs.google.com/document/d/18Sl8evlU8IMU0p3h66Zp-t1NVSmeBWgo7katDNXkH0M/edit?usp=share_link",
      register:
        "https://docs.google.com/forms/d/e/1FAIpQLSdWPGyXeQjVj87zRqiu3HnF2IEJrs8n1mBRkd6kRMHblioxNg/viewform",
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/20140118174713IMG_5618_M_-_Desucon_Frostbite_2014_-_matiast1_%28cropped%29.jpg/350px-20140118174713IMG_5618_M_-_Desucon_Frostbite_2014_-_matiast1_%28cropped%29.jpg",
      ],
      carousel1: "",
      date: "11th January",
      fee: "Rs 60",
      prize: "Rs 2000",
      category: "cultural",
    },
    {
      key: 36,
      title: "acto mania (street drama)",
      person1: "Arindam Chakraborty",
      person2: "Surottama Roy",
      contact1: 8777491797,
      contact2: 7003689835,
      rule: "https://docs.google.com/document/d/18Sl8evlU8IMU0p3h66Zp-t1NVSmeBWgo7katDNXkH0M/edit?usp=share_link",
      register:
        "https://docs.google.com/forms/d/e/1FAIpQLSfLrC6eLvYYkSgjRt_SCAbHs5L54u5M28XVbHLQ-nG6VehUnw/viewform",
      images: [
        "https://im.indiatimes.in/content/2021/Nov/Street-Theatre2_6194bbdde8c0a.jpg?w=725&h=445",
      ],
      carousel1: "",
      date: "11th January",
      fee: "Rs 200",
      prize: "Rs 4500",
      category: "cultural",
    },
    {
      key: 37,
      title: "paint the town red (Wall Painting)",
      person1: "Arindam Chakraborty",
      person2: "Surottama Roy",
      contact1: 8777491797,
      contact2: 7003689835,
      rule: "https://docs.google.com/document/d/18Sl8evlU8IMU0p3h66Zp-t1NVSmeBWgo7katDNXkH0M/edit?usp=share_link",
      register:
        "https://docs.google.com/forms/d/e/1FAIpQLSdFxyoYzJg9iU5VupYU6wdok7NIviJ4iQ05OFdfDv_7s94eXg/viewform",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2020/12/WB/FE/CW/24351690/charcoal-painting-500x500.JPG",
      ],
      carousel1: "",
      date: "9/10/11th January",
      fee: "Rs 70",
      prize: "",
      category: "flash-event",
    },
    {
      key: 38,
      title: "let's meme it (meme making)",
      person1: "Arindam Chakraborty",
      person2: "Surottama Roy",
      contact1: 8777491797,
      contact2: 7003689835,
      rule: "https://docs.google.com/forms/d/e/1FAIpQLSdBGaaWrPYESA1jntrjm7wRPg-UEDbxsceQ5RfsyKpkw8QlqQ/viewform",
      register:
        "https://docs.google.com/forms/d/e/1FAIpQLScNSYu3gtgECuHIGkLlm0KEDuqkHxRzgyb4mR9qhBCYIbsmEg/viewform?usp=share_link",
      images: ["https://m.media-amazon.com/images/I/81i1X1ZyeGL.png"],
      carousel1: "",
      date: "10th January",
      fee: "Rs 20",
      prize: "",
      category: "flash-event",
    },
    {
      key: 39,
      title: "reel it, feel it (reel making)",
      person1: "Arindam Chakraborty",
      person2: "Surottama Roy",
      contact1: 8777491797,
      contact2: 7003689835,
      rule: "https://docs.google.com/document/d/18Sl8evlU8IMU0p3h66Zp-t1NVSmeBWgo7katDNXkH0M/edit?usp=share_link",
      register:
        "https://docs.google.com/forms/d/e/1FAIpQLSfsrZweOx3krynNGlveYeTaBCiQJ3gyY5Cnk-2sBSju8UgjsA/viewform",
      images: [
        "https://startuptimes.net/uploads/images/202105/image_750x_60b1d568e73f2.jpg",
      ],
      carousel1: "",
      date: "14th January",
      fee: "Rs 50",
      prize: "",
      category: "flash-event",
    },
    {
      key: 40,
      title: "lensation (photography)",
      person1: "Indranil Saha",
      person2: "Ambar Pahari",
      contact1: 8777793318,
      contact2: 8768906846,
      rule: "https://docs.google.com/document/d/18Sl8evlU8IMU0p3h66Zp-t1NVSmeBWgo7katDNXkH0M/edit?usp=share_link",
      register:
        "https://docs.google.com/forms/d/e/1FAIpQLSfLS709KRaTFhyHUhJ1gJUqhLERyHEFK9qm9na8TcY3IOcsiQ/viewform",
      images: [
        "https://houseofcommons.shorthandstories.com/biodiversity-photo-competition-winners/assets/17VWo7Is1T/djan-macalister-9sfcb8naq88-unsplash-750x410.png",
      ],
      carousel1: "",
      date: "14th January",
      fee: "Rs 25",
      prize: "",
      category: "flash-event",
    },
  ];
  return (
    <>
      {allEvents
        .filter((data) => {
          return data.title === params.id;
        })
        .map((i) => {
          return (
            <EventDetailsDesign
              key={i.key}
              title={i.title}
              category={i.category}
              person1={i.person1}
              person2={i.person2}
              contact1={i.contact1}
              contact2={i.contact2}
              image={i.images}
              rule={i.rule}
              register={i.register}
              date={i.date}
              fee={i.fee}
              prize={i.prize}
            />
          );
        })}
      <AllFooter />
    </>
  );
};

export default EventDetails;
