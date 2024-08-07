import "@/assets/commonCss/common.nft.scss";
import "./assetsDetail.scss";
import { useState } from "react";
import classNames from "classnames";
import DetailBack from "@/pages/nft/components/DetailBack";
import NFTTitle from "@/pages/nft/components/NFTTitle";
import { useSearchParams } from "react-router-dom";
import SaleHistory from "./SaleHistory";
import PopTransfer from "../assets/pop/PopTransfer";
import DetailList from "@/pages/nftDetail/components/DetailList";

const EthxCatDetail = () => {
  const [tab, setTab] = useState(0);
  const tabList = ["All History"];
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [isTransfer, setIsTransfer] = useState(false);

  return (
    <section className="to-top bg-xcats">
      <NFTTitle title="NFT Marketplace" />

      <section className="flex">
        <div className="market-bg-x market-bg-xl" />
        <div className="w-default px-[30px]">
          <DetailBack linkTo="/assets" />

          <div className="details-common Details-Con">
            <DetailList />
          </div>
          <div className="btn-click">
            <button
              className="btn-theme-yellow BuyNow btn-inner"
              onClick={() => setIsTransfer(true)}
            >
              Transfer
            </button>
          </div>

          <ol className="details-common Details-Menu bar-line">
            {tabList.map((item, index) => (
              <li
                key={index}
                className={classNames("Menu", {
                  active: tab == index
                })}
                onClick={() => setTab(index)}
              >
                {item}
              </li>
            ))}
          </ol>
          <div className="details-common">
            <SaleHistory />
          </div>
        </div>
        <div className="market-bg-x market-bg-xr" />
      </section>

      {isTransfer && (
        <PopTransfer id={id} onClose={() => setIsTransfer(false)} />
      )}
    </section>
  );
};

export default EthxCatDetail;
