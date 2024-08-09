import "./index.scss";
import NFT from "./NFT";
import { observer } from "mobx-react";
import NFTTitle from "./components/NFTTitle";

const nftAssetsIndex = () => {
  return (
    <div className="to-top bg-xcats nft-market-container">
      <NFTTitle title="NFT Marketplace" />
      <section className="flex items-start">
        <div className="w-default">
          <NFT />
        </div>
      </section>
    </div>
  );
};

export default observer(nftAssetsIndex);
