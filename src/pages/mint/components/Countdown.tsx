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
    <div className="text-right small:text-center">
      <div className="text-[44px] small:text-[22px] small:text-center text-nowrap">
        {mintText}
      </div>
      {/* 倒计时那块 */}
      <div className="countdown">
        <div
          className={`timer flex justify-end small:justify-center ${
            timeLeft.phase === "active"
              ? "text-[#01FF2B]"
              : timeLeft.phase === "waiting"
              ? " text-[#4ab3fd]"
              : " text-[#9C9C9C]"
          }`}
        >
          <p className="unit">
            <span className="num">{timeLeft.days}:</span>
            <span className="txt">DAYS</span>
          </p>
          <p className="unit">
            <span className="num">{timeLeft.hours}:</span>
            <span className="txt">HRS</span>
          </p>
          <p className="unit">
            <span className="num">{timeLeft.minutes}:</span>
            <span className="txt">MINS</span>
          </p>
          <p className="unit">
            <span className="num">{timeLeft.seconds}</span>
            <span className="txt">SECS</span>
          </p>
        </div>
        <div className="small:flex small:items-center small:justify-center">
          <div className="mt-[24px] small:mr-[20px]">
            <div className=" text-[32px]  small:text-nowrap  small:text-[18px]">
              PER-SALE PRICE
            </div>
            <div className="text-[#3B7DFE] leading-[40px] text-[40px] small:text-[22px]">
              0.2 GO
            </div>
          </div>
          <div className="mt-[24px]">
            <div className="text-[32px] small:text-[18px]">REMAINING</div>
            <div className="text-[#3B7DFE] leading-[40px] text-[40px] small:text-[22px]">
              {remaining}
            </div>
          </div>
        </div>
        <div className="mt-[24px] flex justify-end  small:flex-col small:items-center small:justify-center items-end w-full">
          <div
            className={`small:pt-[4px]  ${
              timeLeft.phase !== "active"
                ? "bg-[linear-gradient(90deg,#707070_0%,#4E4E4E_100%)] cursor-not-allowed"
                : " cursor-pointer btn-theme-blue"
            } ml-[30px] small:ml-0 w-[260px] h-[60px]  text-[30px] small:h-[50px] small:text-[20px] flex  items-center  justify-center rounded-[30px]  `}
          >
            {timeLeft.phase === "waiting" && "MINT"}
            {timeLeft.phase === "active" && <Mint></Mint>}
            {timeLeft.phase === "finished" && "MINT END"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
