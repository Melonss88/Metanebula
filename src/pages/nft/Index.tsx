import "./index.scss";
import NFT from "./NFT";
import { observer } from "mobx-react";
import NFTTitle from "./components/NFTTitle";

const nftAssetsIndex = () => {
  return (
    <div className="to-top bg-xcats nft-market-container">
      <NFTTitle title="NFT Marketplace" />
      <section className="flex items-start">
        <div className="market-bg-x market-bg-xl" />
        <div className="text-[#7D7D7D] w-default">
          <NFT />
        </div>
        <div className="market-bg-x market-bg-xr" />
      </section>
    </div>
  );
};

export default observer(nftAssetsIndex);
