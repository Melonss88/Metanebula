import { Link } from "react-router-dom";
import Title from "./Ttitle";

const Studio = () => {
  return (
    <section className="w-default rounded-[2rem] overflow-hidden">
      <Title title="MNB NFT Studio" />
      <div className="nft-studio h-[422px] px-[13rem] py-[50px] font-[ftnB]">
        <div className="w-[510px]">
          <p className="text-[5rem]">
            Create Your
            <br /> Unique NFT Collection
            <br /> in MNB NFT Studio
          </p>
          <Link
            to="/"
            className="text-white text-[3rem] bg-black rounded-[50px] px-[3rem] py-[2px] hover:text-[#fff]"
          >
            Create Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Studio;
