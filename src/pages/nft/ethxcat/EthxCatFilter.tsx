import mobileStore from "@/stores/mobileStore";
import { observer } from "mobx-react";
import { useEthxCat } from "./EthxCatContext";
import { CloseOutlined } from "@ant-design/icons";
import { breedType, generationType, rarityType, skillType } from "./type";
import { Drawer } from "antd";
import { useNftHeaderContext } from "../NFT";
import CommonEachFilter from "../components/CommonEachFilter";
import PriceMinMax from "../components/PriceMinMax";

const Generation: generationType[] = ["All", "duck"];
const Rarity: rarityType[] = [
  "All",
  "Common",
  "Uncommon",
  "Rare",
  "Epic",
  "Legendary"
];
const Skill: skillType[] = ["All", "1", "2", "3", "4"];
const Breed: breedType[] = ["All", "7", "6", "5", "4", "3", "2", "1", "0"];

const EthxCatFilter = () => {
  const {
    setRarity,
    rarity,
    setGeneration,
    generation,
    minValue,
    maxValue,
    setMaxValue,
    setMinValue
  } = useEthxCat();
  const { showFilter, setShowFilter } = useNftHeaderContext();

  const RepeatDiv = () => {
    return (
      <>
        <CommonEachFilter
          filterArray={Generation}
          title="Generation"
          value={generation}
          setValue={setGeneration}
        />
        <CommonEachFilter
          filterArray={Rarity}
          title="Rarity"
          value={rarity}
          setValue={setRarity}
        />
      </>
    );
  };

  return (
    <>
      {showFilter && !mobileStore.isMobile && (
        <div className="condition bar-line pb-[2rem] mb-[2rem]">
          <RepeatDiv />
          <PriceMinMax
            minValue={minValue}
            maxValue={maxValue}
            setMaxValue={setMaxValue}
            setMinValue={setMinValue}
          />
        </div>
      )}
      {showFilter && mobileStore.isMobile && (
        <>
          <Drawer
            open={showFilter}
            placement="right"
            onClose={() => setShowFilter(false)}
            title={null}
            closable={false}
          >
            <div className="text-right mb-[10px]">
              <CloseOutlined onClick={() => setShowFilter(false)} />
            </div>
            <div className="condition">
              <RepeatDiv />
              <PriceMinMax
                minValue={minValue}
                maxValue={maxValue}
                setMaxValue={setMaxValue}
                setMinValue={setMinValue}
              />
            </div>
          </Drawer>
        </>
      )}
    </>
  );
};

export default observer(EthxCatFilter);
