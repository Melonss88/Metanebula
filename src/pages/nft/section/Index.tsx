import { skillType, breedType, rarityType, nameType } from "./type";
import { EthxCatContext } from "./EthxCatContext";
import { useState } from "react";
import EthxCatFilter from "./EthxCatFilter";
import NftHeader from "../components/NftHeader";
import EthxCatItems from "./EthxCatItems";
import { useDebounce } from "use-debounce";

const ETHxCAT = () => {
  const [skill, setSkill] = useState<skillType>("All");
  const [rarity, setRarity] = useState<rarityType>("All");
  const [name, setName] = useState<nameType>("All");
  const [breed, setBreed] = useState<breedType>("All");
  const [minValue, setMinValue] = useState<string>("");
  const [maxValue, setMaxValue] = useState<string>("");
  const [debouncedMinValue] = useDebounce(minValue, 1000);
  const [debouncedMaxValue] = useDebounce(maxValue, 1000);

  return (
    <EthxCatContext.Provider
      value={{
        name,
        setName,
        skill,
        setSkill,
        rarity,
        setRarity,
        breed,
        setBreed,
        maxValue,
        minValue,
        setMaxValue,
        setMinValue
      }}
    >
      <section className="content-border nftMarket">
        <NftHeader />
        <EthxCatFilter />

        <EthxCatItems />
      </section>
    </EthxCatContext.Provider>
  );
};
export default ETHxCAT;
