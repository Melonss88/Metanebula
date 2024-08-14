import "./index.scss";
import NFTInner from "./section/Index";
import { observer } from "mobx-react";

const nftAssetsIndex = () => {
  return (
    <div className="to-top nft-market-container">
      <section className="flex items-start mt-[40px]">
        <div className="w-default">
          <NFTInner />
        </div>
      </section>
    </div>
  );
};

export default observer(nftAssetsIndex);
