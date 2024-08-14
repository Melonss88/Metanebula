interface CountdownProps {
  waitTime: number;
  duration: number;
}

interface CountdownState {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  phase: "waiting" | "active" | "finished";
}

type MintTextTyypes =
  | "NFTS MINT WILL START IN"
  | "NFTS MINT TIME REMAINING"
  | "NFTS MINT TIME ENDED";

let mintText: MintTextTyypes = "NFTS MINT WILL START IN";

const days = 60000 * 24 * 60;
const hours = 60000 * 60;
const minutes = 60000;
const test = 5000;
const remaining = 1;

import React, { useState, useEffect } from "react";
import Mint from "./Mint";
const Countdown: React.FC<CountdownProps> = ({ waitTime, duration }) => {
  const [timeLeft, setTimeLeft] = useState<CountdownState>({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
    phase: "waiting"
  });
  const [mintCount, setMintCount] = useState(1);

  const handleIncrement = () => {
    if (mintCount < remaining) {
      setMintCount(mintCount + 1);
    }
  };

  const handleDecrement = () => {
    if (mintCount > 1) {
      setMintCount(mintCount - 1);
    }
  };

  useEffect(() => {
    const startTime = new Date(new Date().getTime() + waitTime * test);
    const endTime = new Date(startTime.getTime() + duration * test * test * 20);

    const interval = setInterval(() => {
      const now = new Date();
      const untilStart = startTime.getTime() - now.getTime();
      const untilEnd = endTime.getTime() - now.getTime();

      if (untilStart > 0) {
        updateTimeLeft(untilStart, "waiting");
      } else if (untilStart <= 0 && untilEnd > 0) {
        mintText = "NFTS MINT TIME REMAINING";
        updateTimeLeft(untilEnd, "active");
      } else {
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
          phase: "finished"
        });
        mintText = "NFTS MINT TIME ENDED";
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [waitTime, duration]);

  function updateTimeLeft(
    ms: number,
    phase: "waiting" | "active" | "finished"
  ) {
    const days = Math.floor(ms / (1000 * 60 * 60 * 24))
      .toString()
      .padStart(2, "0");
    const hours = Math.floor((ms / (1000 * 60 * 60)) % 24)
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((ms / 1000 / 60) % 60)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor((ms / 1000) % 60)
      .toString()
      .padStart(2, "0");
    setTimeLeft({ days, hours, minutes, seconds, phase });
  }

  return (
    <div className="text-center text-[#b2b2b2] mint-content">
      <div className="text-[28px] text-nowrap font-[ftn55]">{mintText}</div>
      {/* 倒计时那块 */}
      <div className="countdown">
        <div
          className={`timer flex justify-end small:justify-center ${
            timeLeft.phase === "active"
              ? "text-[#fff]"
              : timeLeft.phase === "waiting"
              ? " text-[#fff]"
              : " text-[#fff]"
          }`}
        >
          <p className="unit">
            <span className="num">{timeLeft.days}:</span>
            <span className="txt">Days</span>
          </p>
          <p className="unit">
            <span className="num">{timeLeft.hours}:</span>
            <span className="txt">Hrs</span>
          </p>
          <p className="unit">
            <span className="num">{timeLeft.minutes}:</span>
            <span className="txt">Mins</span>
          </p>
          <p className="unit">
            <span className="num">{timeLeft.seconds}</span>
            <span className="txt">Secs</span>
          </p>
        </div>
      </div>
      <div className="small:flex small:items-center small:justify-center">
        <div className="list-info small:mr-[20px]">
          <div className="txt">Pre-Sale Price</div>
          <div className="num">0.0001 ETH</div>
        </div>
        <div className="list-info">
          <div className="txt">Remaining</div>
          <div className="num">{remaining}</div>
        </div>
      </div>
      <div className="btn-box">
        {timeLeft.phase === "waiting" && (
          <button className="disabled">Mint</button>
        )}
        {timeLeft.phase === "active" && <Mint></Mint>}
        {timeLeft.phase === "finished" && (
          <button className="disabled">Mint End</button>
        )}
      </div>
    </div>
  );
};

export default Countdown;
