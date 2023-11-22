// CountdownTimer.jsx
import React, { useState, useEffect } from "react";
import timerBg from "./assets/timerBg.gif";

const CountdownTimer = ({ targetDate, onCountdownEnd }) => {
  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const formatTime = (value) => (value < 10 ? `0${value}` : value);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      if (
        newTimeLeft.days === 0 &&
        newTimeLeft.hours === 0 &&
        newTimeLeft.minutes === 0 &&
        newTimeLeft.seconds === 0
      ) {
        clearInterval(timerInterval);
        onCountdownEnd(); // Notify the parent component when the countdown is over
      }
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [onCountdownEnd]);

  return (
    <div className="h-screen bg-black w-full flex flex-col justify-center">
      <img src={timerBg} alt="" className="h-screen absolute w-full" />
      <h1
        className="text-red-500 text-center text-4xl z-[100]"
        style={{
          textShadow: "rgba(237,42,7,1) 0px 0px 108px",
        }}
      >
        The season of spookiness begins in
      </h1>
      <p
        className="text-red-500 text-center text-[300px] z-[100]"
        style={{
          textShadow: "rgba(237,42,7,1) 0px 0px 108px",
        }}
      >
        {formatTime(timeLeft.hours)}
        {":"}
        {formatTime(timeLeft.minutes)} {":"}
        {formatTime(timeLeft.seconds)}
      </p>
    </div>
  );
};

export default CountdownTimer;
