export type rarityType = "All" | "1" | "2" | "3" | "4" | "5";
export interface AssetsItemType {
  tokenId: string;
  to: string;
  name: string;
  rarity: rarityType;
  imageURL: string;
  color: string;
  gender: string;
  price: string;
  accessories: string;
}
