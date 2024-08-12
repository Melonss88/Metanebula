import "@/assets/commonCss/common.nft.scss";
import "./nftDetail.scss";
import { useState } from "react";
import classNames from "classnames";
import { useSearchParams } from "react-router-dom";
import SaleHistory from "./SaleHistory";
import DetailList from "@/pages/nftDetail/components/DetailList";
import Offers from "./Offers";

const nftDetail = () => {
  const [tab, setTab] = useState(1);
  const tabList = ["Offers", "History"];
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  return (
    <section className="to-top nft-details">
      <div className="w-default pb-[10rem]">
        <div className="details-common Details-Con">
          <DetailList back="nft" />
        </div>

        <div className="pl-[390px]">
          <ol className="Details-Menu mt-[24px] tab-border font-[ftn55]">
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
          <div className="">
            {tab == 0 && <Offers />}
            {tab == 1 && <SaleHistory />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default nftDetail;
