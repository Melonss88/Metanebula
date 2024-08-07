import classNames from "classnames";
import { useNavigate } from "react-router";
import { EthxCatItemType } from "@/pages/nft/section/type";
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
    <div className="productlist overflow-auto max-h-[700px]">
      {items.map((eachItem, index) => {
        return (
          <div
            className={classNames(
              "item flex flex-col cursor-pointer",
              eachItem.rarity
            )}
            onClick={() => navigate(`/${type}/detail?id=${eachItem.tokenId}`)}
            key={eachItem.tokenId}
          >
            <div className="avatar">
              <img src={eachItem.imageURL} alt="avatar.png" />
            </div>
            <div
              className={classNames(
                "flex justify-between pl-[8px] small:pl-[4px]"
              )}
            >
              <span className="text-[1.8rem] small:text-[1rem]">
                #{Number(eachItem.tokenId)}
              </span>
              <span className="bg-black text-white text-[1.3rem] small:text-[8px] h-[2rem] small:h-[12px] px-[8px] small:px-[2px] rounded-l-[9px]">
                {eachItem.name}
              </span>
            </div>
            {type == "nft" && "price" in eachItem && (
              <>
                <p className="flex items-baseline text-[18px] px-[5px] big:px-[15px] font-bold">
                  <span className="text-[20px] small:text-[12px] leading-[1.5em]">
                    {eachItem.price} ETH
                  </span>
                </p>
                <p className="flex items-baseline text-[16px] small:text-[10px] px-[5px] big:px-[15px]">
                  <span>Latest sale: </span>
                  <span className="big:ml-[4px] leading-[1.5em]">
                    {eachItem.latestSale} ETH
                  </span>
                </p>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default NFTCard;
