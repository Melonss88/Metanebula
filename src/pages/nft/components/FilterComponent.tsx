import React, { useState, useEffect } from "react";
import { Radio, RadioChangeEvent } from "antd";

type RecordItem = {
  name: string;
  items: string[];
};

type FilterComponentProps = {
  records: RecordItem[];
  onFilterChange: (filters: { [key: string]: string }) => void;
};

const FilterComponent: React.FC<FilterComponentProps> = ({
  records,
  onFilterChange
}) => {
  // 初始化选中的 filters 为默认的 'All' 状态
  const initialFilters = records.reduce(
    (acc, record) => ({
      ...acc,
      [record.name]: "All" // 默认所有过滤器为 'All'
    }),
    {}
  );

  const [selectedFilters, setSelectedFilters] = useState<{
    [key: string]: string;
  }>(initialFilters);

  useEffect(() => {
    onFilterChange(selectedFilters);
  }, [selectedFilters, onFilterChange]);

  const handleFilterChange = (name: string, value: string) => {
    const updatedFilters = { ...selectedFilters, [name]: value };
    setSelectedFilters(updatedFilters);
  };

  return (
    <div className="filter-container">
      {records.map((record) => (
        <div key={record.name} className="filter-group">
          <div className="filter-title">{record.name}</div>
          <Radio.Group
            onChange={(e: RadioChangeEvent) =>
              handleFilterChange(record.name, e.target.value)
            }
            value={selectedFilters[record.name]}
          >
            {record.items.map((item) => (
              <Radio key={item} value={item}>
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
