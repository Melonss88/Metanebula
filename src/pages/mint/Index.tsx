import "./index.scss";
import mintMain from "./img/mint-img.jpg";
import Countdown from "./components/Countdown";
import "@/assets/commonCss/wave.scss";

const Mint = () => {
  return (
    <div className="mint-container to-top relative">
      <div className="flex big:justify-between small:flex-col w-default">
        <img
          src={mintMain}
          className="w-[695px] small:w-[370px] small:mt-[20px] small:mb-[16px] big:mr-[25px]"
          alt="mint.webp"
        />
        <Countdown waitTime={1} duration={1} />
      </div>
      {/* <div className="wave-container"></div> */}
    </div>
  );
};

export default Mint;
