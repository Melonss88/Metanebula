import { skillType, breedType, rarityType, generationType } from "./type";
import { EthxCatContext } from "./EthxCatContext";
import { useState } from "react";
import { EthxCats } from "./type";
import EthxCatFilter from "./EthxCatFilter";
import NftHeader from "../components/NftHeader";
import EthxCatItems from "./EthxCatItems";
import { useDebounce } from "use-debounce";

const ETHxCAT = () => {
  const [skill, setSkill] = useState<skillType>("All");
  const [rarity, setRarity] = useState<rarityType>("All");
  const [generation, setGeneration] = useState<generationType>("All");
  const [breed, setBreed] = useState<breedType>("All");
  const [minValue, setMinValue] = useState<string>("");
  const [maxValue, setMaxValue] = useState<string>("");
  const [debouncedMinValue] = useDebounce(minValue, 1000);
  const [debouncedMaxValue] = useDebounce(maxValue, 1000);

  return (
    <EthxCatContext.Provider
      value={{
        generation,
        setGeneration,
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

        <EthxCatItems items={EthxCats} />
      </section>
    </EthxCatContext.Provider>
  );
};
export default ETHxCAT;
