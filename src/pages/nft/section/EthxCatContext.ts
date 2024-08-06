import { createContext, useContext } from "react";
import { ETHxCATProviderType } from "./type";
export const EthxCatContext = createContext<ETHxCATProviderType | undefined>(
  undefined
);
export const useEthxCat = () => {
  const context = useContext(EthxCatContext);
  if (!context) {
    throw new Error("useEthxCat must be used within a ETHxCATProvider");
  }
  return context;
};
