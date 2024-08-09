import React, { ChangeEvent } from "react";

type priceMinMaxType = {
  minValue: string;
  maxValue: string;
  setMinValue: React.Dispatch<React.SetStateAction<string>>;
  setMaxValue: React.Dispatch<React.SetStateAction<string>>;
};

const PriceMinMax = ({
  minValue,
  maxValue,
  setMinValue,
  setMaxValue
}: priceMinMaxType) => {
  const handleMinChange = (event: ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    // 只允许输入0-10000之间的整数，不允许输入小数点
    value = value.replace(/\D/g, ""); // 移除非数字字符

    value = value.replace(/^0+(\d)/, "$1");

    // 处理空值，默认设置为0
    if (value === "") value = "0";

    // 转换为整数
    const numValue = parseInt(value, 10);
    if (numValue > 100000) value = "100000";
    setMinValue(value);

    if (parseInt(maxValue, 10) < numValue) {
      setMaxValue(value);
    }
  };
  const handleMaxChange = (event: ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    // 只允许输入0-10000之间的整数，不允许输入小数点
    value = value.replace(/\D/g, ""); // 移除非数字字符

    value = value.replace(/^0+(\d)/, "$1");

    // 处理空值，默认设置为0
    if (value === "") value = "0";

    // 转换为整数
    const numValue = parseInt(value, 10);
    if (numValue > 100000) value = "100000";
    setMaxValue(value);

    // 确保 max 大于等于当前的 min
    if (parseInt(minValue, 10) > numValue) {
      setMinValue(value);
    }
  };

  return (
    <div className="condition-price">
      <div className="lab text-[24px] font-[ftn45]">Price Range</div>
      <p className="bar-breakup"></p>
      <div className="flex items-center">
        <input
          type="number"
          placeholder="Min"
          value={minValue}
          onChange={handleMinChange}
        />
        <span className="line"></span>
        <input
          type="number"
          placeholder="Max"
          value={maxValue}
          onChange={handleMaxChange}
        />
      </div>
    </div>
  );
};

export default PriceMinMax;
