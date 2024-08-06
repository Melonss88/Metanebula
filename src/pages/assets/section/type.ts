export type nameType = "All" | "duck";
export type rarityType =
  | "All"
  | "Common"
  | "Uncommon"
  | "Rare"
  | "Epic"
  | "Legendary";

export type AssetsItemType = {
  tokenId: string;
  to: string;
  name: nameType;
  rarity: rarityType | "Default";
};
