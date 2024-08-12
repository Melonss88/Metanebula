import { createContext, useContext } from "react";
import { FilterContextType } from "./type";
export const nftContext = createContext<FilterContextType | undefined>(
  undefined
);
export const useNFT = () => {
  const context = useContext(nftContext);
  if (!context) {
    throw new Error("useNFT must be used within a Provider");
  }
  return context;
};
