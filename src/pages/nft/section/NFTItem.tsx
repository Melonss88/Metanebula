import NFTCard from "@/pages/nft/components/NFTCard";
import Nodata from "@/pages/components/Nodata";
import { useNFT } from "./nftContext";

const nftItems = () => {
  const { mintRecords, filterData } = useNFT() || {};
  const name = filterData?.name == "all" ? "NFT" : filterData?.name;

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
        <p className="text-[#0c0c0c] font-[ftnB] text-[2rem] capitalize">
          All Results For {name}
        </p>
        <div className="text-[20px] text-[#121212] font-[ftn55] capitalize">
          {mintRecords.length.toLocaleString()} {name}s
        </div>
      </section>

      <ul className="nft-filtered-info capitalize">
        <li>{name}</li>
      </ul>

      {mintRecords.length <= 0 && <Nodata />}
      {mintRecords.length > 0 && <NFTCard items={mintRecords} type="nft" />}
    </div>
  );
};

export default nftItems;
