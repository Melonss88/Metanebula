import mobileStore from "@/stores/mobileStore";
import { observer } from "mobx-react";
import { useNFT } from "./nftContext";
import { CloseOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import CommonEachFilter from "../components/CommonEachFilter";
import PriceMinMax from "../components/PriceMinMax";
import { useFilterConfig } from "../hooks/useFilterConfig";

const nftFilter = () => {
  const {
    name,
    setName,
    gender,
    setGender,
    rarity,
    setRarity,
    color,
    setColor,
    accessories,
    setAccessories,
    minValue,
    maxValue,
    setMaxValue,
    setMinValue
  } = useNFT();

  const { records } = useFilterConfig();
  console.log("records:", records);
  console.log("name:", name);

  const RepeatDiv = () => {
    return (
      <>
        {records.map((item, index) => {
          let currentValue;
          let setValue;

          switch (item.name) {
            case "name":
              currentValue = name;
              setValue = setName;
              break;
            case "gender":
              currentValue = gender;
              setValue = setGender;
              break;
            case "rarity":
              currentValue = rarity;
              setValue = setRarity;
              break;
            case "color":
              currentValue = color;
              setValue = setColor;
              break;
            case "accessories":
              currentValue = accessories;
              setValue = setAccessories;
              break;
            default:
              return null;
          }

          return (
            <CommonEachFilter
              key={index}
              filterArray={item.items}
              title={item.name}
              value={currentValue}
              setValue={setValue}
            />
          );
        })}
      </>
    );
  };

  return (
    <>
      {!mobileStore.isMobile && (
        <div className="condition pb-[2rem] mb-[2rem]">
          <RepeatDiv />
          <PriceMinMax
            minValue={minValue}
            maxValue={maxValue}
            setMaxValue={setMaxValue}
            setMinValue={setMinValue}
          />
        </div>
      )}
      {mobileStore.isMobile && (
        <>
          <Drawer open={true} placement="right" title={null} closable={false}>
            <div className="text-right mb-[10px]">
              <CloseOutlined />
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

export default observer(nftFilter);
