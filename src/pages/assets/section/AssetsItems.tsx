import NFTCard from "@/pages/nft/components/NFTCard";
import { AssetsItemType } from "./type";
import NFTTag from "./Tag";
import mobileStore from "@/stores/mobileStore";
import { observer } from "mobx-react";
import { useMintRecords } from "../hooks/useMintRecords";
import Nodata from "@/pages/components/Nodata";
import { useAccount } from "wagmi";

const AssetsItems = () => {
  const { address } = useAccount();
  const { records } = useMintRecords();
  const AssetsCards: AssetsItemType[] = records;

  const filteredList = AssetsCards.filter((value) => {
    return value.to === address;
  });

  return (
    <section className="assets-cards big:clear-both">
      <div className="nft-info flex">
        {mobileStore.isMobile && <NFTTag />}
        <div className="num">{filteredList.length.toLocaleString()} Ducks</div>
      </div>
      {records.length <= 0 && <Nodata />}
      {records.length > 0 && <NFTCard items={filteredList} type="assets" />}
    </section>
  );
};

export default observer(AssetsItems);
