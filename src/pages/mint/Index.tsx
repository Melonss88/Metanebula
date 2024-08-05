import "./index.scss";
import mintMain from "./img/mint_main.jpg";
import Countdown from "./components/Countdown";

const Mint = () => {
  return (
    <div className="bg-xcats to-top">
      <div className="flex big:justify-between small:flex-col w-default big:py-[200px]">
        <img
          src={mintMain}
          className="w-[580px] small:w-[370px] small:mt-[20px]  small:mb-[16px] "
          alt="mint.webp"
        />
        <Countdown waitTime={1} duration={1} />
      </div>
    </div>
  );
};

export default Mint;
