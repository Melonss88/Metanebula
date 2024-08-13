import { useState, useEffect } from "react";
import { Radio, RadioChangeEvent } from "antd";

type RecordItem = {
  name: string;
  items: string[];
};

type FilterComponentProps = {
  records: RecordItem[];
  onFilterChange: (filters: { [key: string]: string }) => void;
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

  useEffect(() => {
    onFilterChange(selectedFilters);
  }, [selectedFilters, onFilterChange]);

  const handleFilterChange = (name: string, value: string) => {
    const updatedFilters = { ...selectedFilters, [name]: value };
    setSelectedFilters(updatedFilters);
  };

  return (
    <div className="condition-item">
      {records.map((record) => (
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
      ))}
    </div>
  );
};

export default FilterComponent;
