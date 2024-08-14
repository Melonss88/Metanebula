import React, { ChangeEvent, FocusEvent, useState } from "react";

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
  const [tempMinValue, setTempMinValue] = useState(minValue);
  const [tempMaxValue, setTempMaxValue] = useState(maxValue);

  const handleValueChange = (
    event: ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>>,
    tempSetter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    let value = event.target.value;
    value = value
      .replace(/[^0-9.]/g, "")
      .replace(/(?!^)(^0+)(\d)/, "$2")
      .replace(/(\.\d*?)\./g, "$1");

    tempSetter(value);
  };

  const handleBlur = (
    event: FocusEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>>,
    otherValue: string,
    updateOther: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const value = event.target.value;
    setter(value);

    if (parseFloat(otherValue) > parseFloat(value)) {
      updateOther(value);
    }
  };

  return (
    <div className="condition-price">
      <div className="lab text-[24px] font-[ftn45]">Price Range</div>
      <p className="bar-breakup"></p>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Min"
          value={tempMinValue}
          onChange={(event) =>
            handleValueChange(event, setMinValue, setTempMinValue)
          }
          onBlur={(event) =>
            handleBlur(event, setMinValue, maxValue, setMaxValue)
          }
        />
        <span className="line"></span>
        <input
          type="text"
          placeholder="Max"
          value={tempMaxValue}
          onChange={(event) =>
            handleValueChange(event, setMaxValue, setTempMaxValue)
          }
          onBlur={(event) =>
            handleBlur(event, setMaxValue, minValue, setMinValue)
          }
        />
      </div>
    </div>
  );
};

export default PriceMinMax;
