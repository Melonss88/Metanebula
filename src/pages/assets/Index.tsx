import "./index.scss";
import UserInfo from "./section/UserInfo";
import AssetsItems from "./section/AssetsItems";
import { nftContext } from "@/pages/nft/section/nftContext";
import { useState } from "react";
import { ValueType, nftItemType } from "@/pages/nft/section/type";

const myAssetsIndex = () => {
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
      <div className="to-top assets-container">
        <section className="flex items-start">
          <div className="w-default">
            <div className="">
              <UserInfo />
              <p className="bar-breakup"></p>
              <AssetsItems />
            </div>
          </div>
        </section>
      </div>
    </nftContext.Provider>
  );
};

export default myAssetsIndex;
