import NFTCard from "@/pages/nft/components/NFTCard";
import { AssetsItemType } from "./type";
import NFTTag from "./Tag";
import mobileStore from "@/stores/mobileStore";
import { observer } from "mobx-react";
import { useReadContract } from "wagmi";
import DUCK from "@/config/abi/DUCK.json";
import { useEffect, useState } from "react";

const AssetsItems = () => {
  const contractAddress = "0x05Aa229Aec102f78CE0E852A812a388F076Aa555";
  const [list, setList] = useState<string[]>([]);

  const { data, isError, isLoading } = useReadContract({
    address: contractAddress,
    abi: DUCK,
    functionName: "walletOfOwner",
    args: ["0x70997970C51812dc3A010C7d01b50e0d17dc79C8"]
  });
  console.log("res:", data);

  useEffect(() => {
    if (data) {
      if (Array.isArray(data)) {
        setList(Object.values(data as string[])); // 确保类型断言
      } else {
        console.error("Data is not an array");
      }
    }
  }, [data]);

  const AssetsCards: AssetsItemType[] = [];
  list.forEach((e, i) => {
    AssetsCards[i] = {
      id: list[i],
      generation: "duck",
      rarity: "Common"
    };
  });

  return (
    <section className="assets-cards big:clear-both">
      <div className="nft-info flex">
        {mobileStore.isMobile && <NFTTag />}
        <div className="num">{list.length.toLocaleString()} Ducks</div>
      </div>
      <NFTCard items={AssetsCards} type="assets" />
    </section>
  );
};

export default observer(AssetsItems);
