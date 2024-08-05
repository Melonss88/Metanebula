import { useState } from "react";
import { Dropdown, MenuProps } from "antd";
import NFTCard from "@/pages/nft/components/NFTCard";
import { EthxCats, EthxCatItemType } from "@/pages/nft/ethxcat/type";

const EthxCatItems = ({ items }: { items: EthxCatItemType[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuHover = (e: boolean) => {
    setIsOpen(e);
  };

  return (
    <>
      <div className="nft-info">
        <div className="num">{items.length.toLocaleString()} Ducks</div>
      </div>

      <NFTCard items={EthxCats} type="nft" />
    </>
  );
};

export default EthxCatItems;
