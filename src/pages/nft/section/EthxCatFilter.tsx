import mobileStore from "@/stores/mobileStore";
import { observer } from "mobx-react";
import { useEthxCat } from "./EthxCatContext";
import { CloseOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import CommonEachFilter from "../components/CommonEachFilter";
import PriceMinMax from "../components/PriceMinMax";
import { useFilterConfig } from "../hooks/useFilterConfig";

const EthxCatFilter = () => {
  const { name, setName, minValue, maxValue, setMaxValue, setMinValue } =
    useEthxCat();

  const { records } = useFilterConfig();
  console.log("records", records);

  const RepeatDiv = () => {
    return (
      <>
        {records.map((item, index) => (
          <CommonEachFilter
            key={index}
            filterArray={item.items}
            title={item.name}
            value={name}
            setValue={setName}
          />
        ))}
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

export default observer(EthxCatFilter);
