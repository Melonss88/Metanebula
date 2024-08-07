import { AssetsItemType } from "@/pages/assets/section/type";
export type nameType = "All" | "duck";
export type rarityType = "All" | "1" | "2" | "3" | "4" | "5";

export interface ETHxCATProviderType {
  name: nameType;
  rarity: rarityType;
  minValue: string;
  maxValue: string;
  setMinValue: React.Dispatch<React.SetStateAction<string>>;
  setMaxValue: React.Dispatch<React.SetStateAction<string>>;
  setName: React.Dispatch<React.SetStateAction<nameType>>;
  setRarity: React.Dispatch<React.SetStateAction<rarityType>>;
}

export type EthxCatItemType = AssetsItemType & {
  price: string;
  latestSale: string;
  accessories: string;
  color: string;
  gender: string;
};
