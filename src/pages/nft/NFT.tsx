import React, { createContext, useContext, useState } from "react";
import ETHxCAT from "./ethxcat/Index";

type nftHeaderListType = "Duck";
export interface NftHeaderProviderType {
  showFilter: boolean;
  nftTab: nftHeaderListType;
  setNftTab: React.Dispatch<React.SetStateAction<nftHeaderListType>>;
  setShowFilter: React.Dispatch<React.SetStateAction<boolean>>;
}
export const nftHedaerContext = createContext<
  NftHeaderProviderType | undefined
>(undefined);

export const useNftHeaderContext = () => {
  const context = useContext(nftHedaerContext);
  if (!context) {
    throw new Error("useGems must be used within a GemsProvider");
  }
  return context;
};

export const list: nftHeaderListType[] = ["Duck"];

const NFT = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [nftTab, setNftTab] = useState<nftHeaderListType>("Duck");
  return (
    <nftHedaerContext.Provider
      value={{ nftTab, setNftTab, showFilter, setShowFilter }}
    >
      {nftTab === "Duck" && <ETHxCAT></ETHxCAT>}
    </nftHedaerContext.Provider>
  );
};
export default NFT;
