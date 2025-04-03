import { useState, useEffect } from "react";
import { Radio, RadioChangeEvent } from "antd";
import PriceMinMax from "./PriceMinMax";

type RecordItem = {
  name: string;
  items: string[];
};

type FilterComponentProps = {
  records: RecordItem[];
  onFilterChange: (filters: { [key: string]: string[] }) => void; //string[]这是才改的类型，因为报错，没有验证
};

const FilterComponent = ({ records, onFilterChange }: FilterComponentProps) => {
  const [selectedFilters, setSelectedFilters] = useState<{
    [key: string]: string;
  }>({});

  useEffect(() => {
    const initialFilters = records.reduce(
      (acc, record) => ({
        ...acc,
        [record.name]: "all"
      }),
      {}
    );
    setSelectedFilters(initialFilters);
  }, [records]);

  const [minValue, setMinValue] = useState<string>("");
  const [maxValue, setMaxValue] = useState<string>("");
  // useEffect(() => {
  //   onFilterChange(selectedFilters);
  // }, [selectedFilters]);

  useEffect(() => {
    onFilterChange({
      ...selectedFilters,
      price: [minValue, maxValue]
    });
  }, [selectedFilters, minValue, maxValue]);

  const handleFilterChange = (name: string, value: string) => {
    const updatedFilters = { ...selectedFilters, [name]: value };
    setSelectedFilters(updatedFilters);
  };

  return (
    <div className="condition-item">
      {records.map((record) => (
        <>
          {record.name != "price" && (
            <div key={record.name} className="filter-group">
              <div className="lab text-[24px] font-[ftn45] capitalize text-[#0d0d0d]">
                {record.name}
              </div>
              <p className="bar-breakup"></p>
              <Radio.Group
                onChange={(e: RadioChangeEvent) =>
                  handleFilterChange(record.name, e.target.value)
                }
                value={selectedFilters[record.name]}
              >
                {record.items.map((item) => (
                  <Radio
                    key={item}
                    value={item}
                    className="capitalize text-[#0c0c0c] text-[20px] mr-[20px] mb-[10px] font-[ftn35]"
                  >
                    {item}
                  </Radio>
                ))}
              </Radio.Group>
            </div>
          )}
          {record.name == "price" && (
            <PriceMinMax
              minValue={minValue}
              maxValue={maxValue}
              setMinValue={setMinValue}
              setMaxValue={setMaxValue}
            />
          )}
        </>
      ))}
    </div>
  );
};

export default FilterComponent;
