import { AssetsItemType } from "@/pages/assets/section/type";

export type ValueType = string;

export type nftItemType = AssetsItemType & {
  price: string;
  latestSale: string;
  accessories: string;
  color: string;
  gender: string;
};

export interface FilterContextType {
  mintRecords: nftItemType[];
  setMintRecords: React.Dispatch<React.SetStateAction<nftItemType[]>>;
  name: ValueType;
  setName: React.Dispatch<React.SetStateAction<ValueType>>;
  gender: ValueType;
  setGender: React.Dispatch<React.SetStateAction<ValueType>>;
  rarity: ValueType;
  setRarity: React.Dispatch<React.SetStateAction<ValueType>>;
  color: ValueType;
  setColor: React.Dispatch<React.SetStateAction<ValueType>>;
  accessories: ValueType;
  setAccessories: React.Dispatch<React.SetStateAction<ValueType>>;
  minValue: string;
  setMinValue: React.Dispatch<React.SetStateAction<string>>;
  maxValue: string;
  setMaxValue: React.Dispatch<React.SetStateAction<string>>;
}
