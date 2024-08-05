import Nodata from "@/pages/components/Nodata";
import classNames from "classnames";
import avatar from "../img/avatar.jpg";
import { useNavigate } from "react-router";
import { EthxCatItemType } from "@/pages/nft/ethxcat/type";
import { AssetsItemType } from "@/pages/assets/section/type";

const NFTCard = ({
  items,
  type
}: {
  items: EthxCatItemType[] | AssetsItemType[];
  type: string;
}) => {
  const navigate = useNavigate();

  return (
    <div className="productlist overflow-auto max-h-[700px] font-[BroR]">
      {items.length <= 0 && <Nodata />}
      {items.length > 0 &&
        items.map((eachItem, index) => {
          return (
            <div
              className={classNames(
                "item flex flex-col cursor-pointer",
                eachItem.rarity
              )}
              onClick={() => navigate(`/${type}/detail?id=${eachItem.id}`)}
              key={eachItem.id}
            >
              <div className="avatar">
                <img src={avatar} alt="avatar.png" />
              </div>
              <div
                className={classNames(
                  "flex justify-between pl-[8px] small:pl-[4px]"
                )}
              >
                <span className="text-[1.8rem] small:text-[1rem]">
                  #{Number(eachItem.id)}
                </span>
                <span className="bg-black text-white text-[1.3rem] small:text-[8px] h-[2rem] small:h-[12px] px-[8px] small:px-[2px] rounded-l-[9px]">
                  {eachItem.generation}
                </span>
              </div>
              {type == "nft" && "price" in eachItem && (
                <>
                  <p className="flex items-baseline text-[18px] px-[5px] big:px-[15px] font-bold">
                    <span className="text-[20px] small:text-[12px] font-[BroB] leading-[1.5em]">
                      {eachItem.price} ETH
                    </span>
                  </p>
                  <p className="flex items-baseline text-[16px] small:text-[10px] px-[5px] big:px-[15px]">
                    <span>Latest sale: </span>
                    <span className="big:ml-[4px] font-[BroB] leading-[1.5em]">
                      {eachItem.latestSale} ETH
                    </span>
                  </p>
                </>
              )}
              {/* <div className="cont">
            <div className="lable2">#{eachItem.id}</div>
            <div className="text-center font-ttoEL text-[#55FF00] text-[16px]">
              {eachItem.onSell ? " ON SELL" : ""}
            </div>
          </div> */}
            </div>
          );
        })}
    </div>
  );
};

export default NFTCard;
