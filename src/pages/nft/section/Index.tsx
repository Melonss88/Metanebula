import { ValueType, nftItemType } from "./type";
import { nftContext } from "./nftContext";
import { useState } from "react";
import NftHeader from "../components/NftHeader";
import NFTItems from "./NFTItem";
import NFTFilters from "./NFTFilters";

const NFT = () => {
  const [mintRecords, setMintRecords] = useState<nftItemType[]>([]);
  const [name, setName] = useState<ValueType>("All");
  const [gender, setGender] = useState<ValueType>("All");
  const [rarity, setRarity] = useState<ValueType>("All");
  const [color, setColor] = useState<ValueType>("All");
  const [accessories, setAccessories] = useState<ValueType>("All");
  const [minValue, setMinValue] = useState<string>("");
  const [maxValue, setMaxValue] = useState<string>("");

  return (
    <nftContext.Provider
      value={{
        mintRecords,
        setMintRecords,
        name,
        setName,
        gender,
        setGender,
        rarity,
        setRarity,
        color,
        setColor,
        accessories,
        setAccessories,
        minValue,
        setMinValue,
        maxValue,
        setMaxValue
      }}
    >
      <section className="nftMarket flex">
        <div className="w-[29rem]">
          <NftHeader />
          {/* <NFTFilter /> */}
          <NFTFilters />
        </div>
        <NFTItems />
      </section>
    </nftContext.Provider>
  );
};
export default NFT;
