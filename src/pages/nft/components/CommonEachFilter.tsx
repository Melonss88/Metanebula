import React from "react";
import { generationType, rarityType, skillType } from "../ethxcat/type";
import CheckboxItem from "./CheckboxItem";
import classNames from "classnames";

type ValueType = generationType | rarityType | skillType;

type EachFilterInterface<T> = {
  filterArray: T[];
  title: string;
  value: T;
  setValue: React.Dispatch<React.SetStateAction<T>>;
};

const CommonEachFilter = <T extends ValueType>({
  filterArray,
  title,
  setValue,
  value
}: EachFilterInterface<T>) => {
  return (
    <div className="condition-item">
      <div className="lab">{title}:</div>
      <div className="condition-right">
        {filterArray.map((item, index) => (
          <div className={classNames(item)} key={index}>
            <CheckboxItem
              key={index}
              item={item}
              isSelected={value === item}
              onClick={() => setValue(item)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommonEachFilter;
