import { createContext, useContext } from "react";

export type nftDetailProviderType = {
  isBuy: boolean;
  setIsBuy: (value: boolean) => void;
};
export const nftDetailContent = createContext<
  nftDetailProviderType | undefined
>(undefined);
export const useNFTDetailContent = () => {
  const context = useContext(nftDetailContent);
  if (!context) {
    throw new Error("useNFTDetail must be used within a Provider");
  }
  return context;
};
