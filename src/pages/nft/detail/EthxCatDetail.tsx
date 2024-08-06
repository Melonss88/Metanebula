import "@/assets/commonCss/common.nft.scss";
import "./ethxcatDetail.scss";
import avatar from "../img/avatar.jpg";
import { useState } from "react";
import classNames from "classnames";
import DetailBack from "../components/DetailBack";
import NFTTitle from "../components/NFTTitle";
import { useSearchParams } from "react-router-dom";
import SaleHistory from "./SaleHistory";
import PopSell from "../pop/PopSell";
import ETHSvg from "@/assets/svg/ETHSvg";

const EthxCatDetail = () => {
  const [tab, setTab] = useState(0);
  const tabList = ["Offers", "History"];
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [isBuy, setIsBuy] = useState(false);

  return (
    <section className="font-[BroB] to-top bg-xcats">
      <NFTTitle title="NFT Marketplace" />

      <section className="flex">
        <div className="market-bg-x market-bg-xl" />
        <div className="w-default px-[30px]">
          <DetailBack linkTo="/nft" />

          <div className="details-common Details-Con">
            <div className="cont-left">
              <span className="avatar-box">
                <img src={avatar} alt="avatar.png" />
              </span>
            </div>
            <div className="cont-right">
              <div className="tit">#{id}</div>

              <div className="infos">
                <div className="item">
                  <div className="label">name:</div>
                  <div className="num">duck</div>
                </div>
                <div className="item">
                  <div className="label">Owner:</div>
                  <div className="num">0X82264daA...670A5237</div>
                </div>
              </div>

              <div className="Btn">
                <div className="TextBox btn-inner">
                  <span className="big:text-[28px]">
                    <ETHSvg />
                  </span>
                  <div className="Text">
                    <span className="label1">0.029</span>
                  </div>
                </div>
                <button
                  className="btn-theme-yellow BuyNow btn-inner"
                  onClick={() => setIsBuy(true)}
                >
                  Buy Now
                </button>
              </div>
            </div>
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
            {tab == 0 && <>出售订单</>}
            {tab == 1 && <SaleHistory />}
          </div>
        </div>
        <div className="market-bg-x market-bg-xr" />
      </section>

      {isBuy && <PopSell onClose={() => setIsBuy(false)} />}
    </section>
  );
};

export default EthxCatDetail;
