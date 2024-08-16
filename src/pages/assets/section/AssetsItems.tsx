import NFTCard from "@/pages/nft/components/NFTCard";
import { observer } from "mobx-react";
import Nodata from "@/pages/components/Nodata";
import { useAccount } from "wagmi";
import { useNFT } from "@/pages/nft/section/nftContext";
import { useMintRecords } from "@/pages/assets/hooks/useMintRecords";
import { useEffect } from "react";

const AssetsItems = () => {
  const { address } = useAccount();
  const { getMintRecordsFn } = useMintRecords();
  useEffect(() => {
    getMintRecordsFn({});
  }, []);

  const { mintRecords } = useNFT();
  const filteredList = mintRecords.filter((value) => {
    return value.to === address;
  });

  return (
    <section className="assets-cards pt-[60px]">
      <div className="nft-info text-[24px] text-[#0d0d0d] font-[ftnB] mb-[5px]">
        <div className="num">{filteredList.length.toLocaleString()} NFTs</div>
      </div>
      {mintRecords.length <= 0 && <Nodata />}
      {mintRecords.length > 0 && <NFTCard items={filteredList} type="assets" />}
    </section>
  );
};

export default observer(AssetsItems);
