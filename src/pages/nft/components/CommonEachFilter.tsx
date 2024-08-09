import React from "react";
import { ValueType } from "../section/type";
import CheckboxItem from "./CheckboxItem";
import classNames from "classnames";

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
      <div className="lab text-[24px] font-[ftn45]">{title}</div>
      <p className="bar-breakup"></p>
      <div className="condition-right text-[#0c0c0c]">
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
