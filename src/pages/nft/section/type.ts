import { AssetsItemType } from "@/pages/assets/section/type";
export type nameType = "All" | "duck";
export type rarityType =
  | "All"
  | "Common"
  | "Uncommon"
  | "Rare"
  | "Epic"
  | "Legendary";
export type skillType = "All" | "1" | "2" | "3" | "4";
export type breedType = "All" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7";

export interface ETHxCATProviderType {
  name: nameType;
  rarity: rarityType;
  skill: skillType;
  breed: breedType;
  minValue: string;
  maxValue: string;
  setMinValue: React.Dispatch<React.SetStateAction<string>>;
  setMaxValue: React.Dispatch<React.SetStateAction<string>>;
  setName: React.Dispatch<React.SetStateAction<nameType>>;
  setRarity: React.Dispatch<React.SetStateAction<rarityType>>;
  setSkill: React.Dispatch<React.SetStateAction<skillType>>;
  setBreed: React.Dispatch<React.SetStateAction<breedType>>;
}

export type EthxCatItemType = AssetsItemType & {
  onSell: boolean;
  price: string;
  latestSale: string;
};
