import { AssetsItemType } from "@/pages/assets/section/type";
export type NameType = "All" | "Duck";
export type GenderType = "All" | "Male" | "Female";
export type RarityType = "All" | "1" | "2" | "3" | "4" | "5";
export type ColorType = "All" | "Green" | "Blue" | "Purple" | "Golden" | "Red";
export type AccessoriesType = "All" | "Yes" | "No";
export type PriceType = "";

export type ValueType =
  | NameType
  | GenderType
  | RarityType
  | ColorType
  | AccessoriesType
  | PriceType;

export interface ETHxCATProviderType {
  name: NameType;
  gender: GenderType;
  rarity: RarityType;
  color: ColorType;
  accessories: AccessoriesType;
  minValue: string;
  maxValue: string;
  setMinValue: React.Dispatch<React.SetStateAction<string>>;
  setMaxValue: React.Dispatch<React.SetStateAction<string>>;
  setName: React.Dispatch<React.SetStateAction<NameType>>;
  setRarity: React.Dispatch<React.SetStateAction<RarityType>>;
}

export type EthxCatItemType = AssetsItemType & {
  price: string;
  latestSale: string;
  accessories: string;
  color: string;
  gender: string;
};
