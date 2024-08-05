import "./index.scss";
import NFTTitle from "@/pages/nft/components/NFTTitle";
import UserInfo from "./section/UserInfo";
import Balanceof from "./section/Balanceof";
import AssetsItems from "./section/AssetsItems";

const myAssetsIndex = () => {
  return (
    <div className="to-top bg-xcats assets-container">
      <NFTTitle title="My Assets" />
      <section className="flex items-start">
        <div className="market-bg-x market-bg-xl" />
        <div className="text-[#fff] w-default">
          <div className="content-border">
            <UserInfo />
            <p className="bar-breakup"></p>
            <Balanceof />
            <AssetsItems />
          </div>
        </div>
        <div className="market-bg-x market-bg-xr" />
      </section>
    </div>
  );
};

export default myAssetsIndex;
