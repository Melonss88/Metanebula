import "@/assets/commonCss/common.nft.scss";
import "../nftDetail/nftDetail.scss";
import { useState } from "react";
import classNames from "classnames";
import { useSearchParams } from "react-router-dom";
import SaleHistory from "./SaleHistory";
import DetailList from "@/pages/nftDetail/components/DetailList";

const assetsDetail = () => {
  const [tab, setTab] = useState(0);
  const tabList = ["History"];
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  return (
    <section className="to-top assets-details">
      <div className="w-default pb-[10rem]">
        <div className="details-common Details-Con">
          <DetailList back="assets" />
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
          <div className="]">
            <SaleHistory id={id} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default assetsDetail;
