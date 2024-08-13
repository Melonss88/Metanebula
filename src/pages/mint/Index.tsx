import "./index.scss";
import mintMain from "./img/mint_main.jpg";
import Countdown from "./components/Countdown";
import "@/assets/commonCss/wave.scss";

const Mint = () => {
  return (
    <div className="to-top mb-[-6rem] relative">
      <div className="flex big:justify-between small:flex-col w-default big:pt-[120px] big:pb-[220px]">
        <img
          src={mintMain}
          className="w-[580px] small:w-[370px] small:mt-[20px]  small:mb-[16px] "
          alt="mint.webp"
        />
        <Countdown waitTime={1} duration={1} />
      </div>
      <div className="wave-container"></div>
    </div>
  );
};

export default Mint;
