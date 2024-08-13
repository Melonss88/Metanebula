import classNames from "classnames";
import { useNavigate } from "react-router";
import { nftItemType } from "@/pages/nft/section/type";
import { AssetsItemType } from "@/pages/assets/section/type";
import StarRating from "@/pages/nftDetail/components/StarRating";

const NFTCard = ({
  items,
  type
}: {
  items: nftItemType[] | AssetsItemType[];
  type: string;
}) => {
  const navigate = useNavigate();

  return (
    <div className="productlist ">
      {items.map((eachItem, index) => {
        return (
          <div
            className="item flex flex-col cursor-pointer"
            onClick={() => navigate(`/${type}/detail?id=${eachItem.tokenId}`)}
            key={eachItem.tokenId}
          >
            <div className="avatar">
              <img src={eachItem.imageURL} alt="avatar.png" />
            </div>
            <div
              className={classNames(
                "nft-content",
                `bg-Rarity${eachItem.rarity}`
              )}
            >
              <div className="flex justify-between small:pl-[4px] items-end leading-[4.5em]">
                <span className="text-[24px] font-[ftnB] small:text-[1rem] capitalize">
                  <span className="text-[18px]">
                    {eachItem.gender == "male" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2zM6 6a4 4 0 1 0 0 8a4 4 0 0 0 0-8"
                        />
                      </svg>
                    )}
                    {eachItem.gender == "female" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M8 1a4 4 0 1 0 0 8a4 4 0 0 0 0-8M3 5a5 5 0 1 1 5.5 4.975V12h2a.5.5 0 0 1 0 1h-2v2.5a.5.5 0 0 1-1 0V13h-2a.5.5 0 0 1 0-1h2V9.975A5 5 0 0 1 3 5"
                        />
                      </svg>
                    )}
                  </span>
                  {eachItem.name} #{Number(eachItem.tokenId)}
                </span>
                <span className="text-[15px]">
                  <StarRating rarity={eachItem.rarity} />
                </span>
              </div>
              {type == "nft" && (
                <>
                  <p className="flex items-baseline text-[18px] px-[2px] font-bold">
                    <span className="text-[22px] small:text-[12px] font-[ftn45]">
                      {eachItem.price} ETH
                    </span>
                  </p>
                  {/* <p className="flex items-baseline text-[16px] small:text-[10px] px-[5px] big:px-[15px]">
                    <span>Latest sale: </span>
                    <span className="big:ml-[4px] leading-[1.5em]">
                      {eachItem.latestSale} ETH
                    </span>
                  </p> */}
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NFTCard;
