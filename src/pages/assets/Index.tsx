import "./index.scss";
import NFTTitle from "@/pages/nft/components/NFTTitle";
import UserInfo from "./section/UserInfo";
import Balanceof from "./section/Balanceof";
import AssetsItems from "./section/AssetsItems";

const myAssetsIndex = () => {
  return (
    <div className="to-top assets-container">
      <NFTTitle title="My Assets" />
      <section className="flex items-start">
        <div className="w-default">
          <div className="">
            <UserInfo />
            <p className="bar-breakup"></p>
            <AssetsItems />
          </div>
        </div>
      </section>
    </div>
  );
};

export default myAssetsIndex;
