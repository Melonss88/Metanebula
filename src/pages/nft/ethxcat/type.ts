export type generationType = "All" | "duck";
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
  generation: generationType;
  rarity: rarityType;
  skill: skillType;
  breed: breedType;
  minValue: string;
  maxValue: string;
  setMinValue: React.Dispatch<React.SetStateAction<string>>;
  setMaxValue: React.Dispatch<React.SetStateAction<string>>;
  setGeneration: React.Dispatch<React.SetStateAction<generationType>>;
  setRarity: React.Dispatch<React.SetStateAction<rarityType>>;
  setSkill: React.Dispatch<React.SetStateAction<skillType>>;
  setBreed: React.Dispatch<React.SetStateAction<breedType>>;
}

export type EthxCatItemType = {
  id: string;
  onSell: boolean;
  rarity: rarityType | "Default";
  generation: generationType;
  price: string;
  latestSale: string;
};

export const EthxCats: EthxCatItemType[] = [
  {
    id: "01",
    onSell: true,
    rarity: "Common",
    generation: "duck",
    price: "0.01",
    latestSale: "1.2"
  },
  {
    id: "02",
    onSell: false,
    rarity: "Epic",
    generation: "duck",
    price: "0.01",
    latestSale: "1.2"
  },
  {
    id: "03",
    onSell: true,
    rarity: "Uncommon",
    generation: "duck",
    price: "0.01",
    latestSale: "1.2"
  },
  {
    id: "04",
    onSell: false,
    rarity: "Legendary",
    generation: "duck",
    price: "0.01",
    latestSale: "1.2"
  },
  {
    id: "05",
    onSell: true,
    rarity: "Rare",
    generation: "duck",
    price: "0.01",
    latestSale: "1.2"
  },
  {
    id: "06",
    onSell: true,
    rarity: "Default",
    generation: "duck",
    price: "0.01",
    latestSale: "1.2"
  }
];
