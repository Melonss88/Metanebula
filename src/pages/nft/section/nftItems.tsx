import NFTCard from "@/pages/nft/components/NFTCard";
import { nftItemType } from "@/pages/nft/section/type";
import { useMintRecords } from "@/pages/assets/hooks/useMintRecords";
import Nodata from "@/pages/components/Nodata";

const nftItems = () => {
  const { records } = useMintRecords();
  const AssetsCards: nftItemType[] = records;

  return (
    <div className="nft-info flex-1 ml-[2rem]">
      <section className="search-box mb-[20px]">
        <input type="text" className="w-full " />
        <span className="svg-box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 16 16"
          >
            <path
              fill="#27a0f8"
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0"
            />
          </svg>
        </span>
      </section>

      <section className="flex justify-between mb-[25px]">
        <p className="text-[#0c0c0c] font-[ftnB] text-[2rem]">
          All Results For Duck
        </p>
        <div className="text-[20px] text-[#121212] font-[ftn55]">
          {AssetsCards.length.toLocaleString()} Ducks
        </div>
      </section>

      <ul className="nft-filtered-info">
        <li>Duck</li>
      </ul>

      {records.length <= 0 && <Nodata />}
      {records.length > 0 && <NFTCard items={AssetsCards} type="nft" />}
    </div>
  );
};

export default nftItems;
