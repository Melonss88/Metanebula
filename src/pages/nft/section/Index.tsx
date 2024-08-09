import { RarityType, NameType } from "./type";
import { nftContext } from "./nftContext";
import { useState } from "react";
import NFTFilter from "./nftFilter";
import NftHeader from "../components/NftHeader";
import NFTItems from "./nftItems";
import { useDebounce } from "use-debounce";

const NFT = () => {
  const [rarity, setRarity] = useState<RarityType>("All");
  const [name, setName] = useState<NameType>("All");
  const [minValue, setMinValue] = useState<string>("");
  const [maxValue, setMaxValue] = useState<string>("");
  const [debouncedMinValue] = useDebounce(minValue, 1000);
  const [debouncedMaxValue] = useDebounce(maxValue, 1000);

  return (
    <nftContext.Provider
      value={{
        name,
        setName,
        rarity,
        setRarity,
        maxValue,
        minValue,
        setMaxValue,
        setMinValue
      }}
    >
      <section className="nftMarket flex">
        <div className="w-[29rem]">
          <NftHeader />
          <NFTFilter />
        </div>
        <NFTItems />
      </section>
    </nftContext.Provider>
  );
};
export default NFT;
