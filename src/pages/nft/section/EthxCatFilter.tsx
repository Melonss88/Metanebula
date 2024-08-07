import mobileStore from "@/stores/mobileStore";
import { observer } from "mobx-react";
import { useEthxCat } from "./EthxCatContext";
import { CloseOutlined } from "@ant-design/icons";
import { nameType, rarityType } from "./type";
import { Drawer } from "antd";
import { useNftHeaderContext } from "../NFT";
import CommonEachFilter from "../components/CommonEachFilter";
import PriceMinMax from "../components/PriceMinMax";

const Name: nameType[] = ["All", "duck"];
const Rarity: rarityType[] = ["All", "1", "2", "3", "4", "5"];

const EthxCatFilter = () => {
  const {
    setRarity,
    rarity,
    setName,
    name,
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
          filterArray={Name}
          title="name"
          value={name}
          setValue={setName}
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
