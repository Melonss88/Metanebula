import { createContext, useContext } from "react";
import { nftProviderType } from "./type";
export const nftContext = createContext<nftProviderType | undefined>(undefined);
export const useNFT = () => {
  const context = useContext(nftContext);
  if (!context) {
    throw new Error("useNFT must be used within a Provider");
  }
  return context;
};
