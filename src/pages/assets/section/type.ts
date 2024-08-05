export type generationType = "All" | "duck";
export type rarityType =
  | "All"
  | "Common"
  | "Uncommon"
  | "Rare"
  | "Epic"
  | "Legendary";

export type AssetsItemType = {
  id: string;
  rarity: rarityType | "Default";
  generation: generationType;
};
