import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import bgaudio from "./assets/bgaudio.mp3";
import Teams from "./pages/Teams";
import Sports from "./pages/Sports";
import Technical from "./pages/Technical";
import Cultural from "./pages/Cultural";
import EventDetails from "./pages/EventDetails";
import CountdownTimer from "./CountDownTimer";

function App() {
  const targetDate = new Date("November 21, 2023 15:45:00 GMT+05:30");
  const [isCountdownOver, setIsCountdownOver] = useState(false);

  useEffect(() => {
    const audio = new Audio(bgaudio);
    audio.autoplay = true;
    audio.loop = true;
    document.body.appendChild(audio);

    return () => {
      audio.pause();
      document.body.removeChild(audio);
    };
  }, []);

  useEffect(() => {
    const now = new Date();
    if (now >= targetDate && !isCountdownOver) {
      setIsCountdownOver(true);
      // Optionally add logic here if needed when the countdown is over
    }
  }, [isCountdownOver, targetDate]);

  return (
    <>
      <div className="pumpkin-cursor">
        {isCountdownOver ? (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/events" element={<Events />} />
              <Route path="/events/:id" element={<EventDetails />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/sports" element={<Sports />} />
              <Route path="/technical" element={<Technical />} />
              <Route path="/cultural" element={<Cultural />} />
            </Routes>
          </BrowserRouter>
        ) : (
          <CountdownTimer
            targetDate={targetDate}
            onCountdownEnd={() => setIsCountdownOver(true)}
          />
        )}
      </div>
    </>
  );
}

export default App;
