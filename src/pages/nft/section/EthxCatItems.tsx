import NFTCard from "@/pages/nft/components/NFTCard";
import { EthxCatItemType } from "@/pages/nft/section/type";
import { useMintRecords } from "@/pages/assets/hooks/useMintRecords";

const EthxCatItems = () => {
  const { records } = useMintRecords();
  const AssetsCards: EthxCatItemType[] = records;

  return (
    <>
      <div className="nft-info">
        <div className="num">{AssetsCards.length.toLocaleString()} Ducks</div>
      </div>

      <NFTCard items={AssetsCards} type="nft" />
    </>
  );
};

export default EthxCatItems;
