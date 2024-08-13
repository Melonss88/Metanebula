import FilterComponent from "../components/FilterComponent";
import { useFilterConfig } from "../hooks/useFilterConfig";
import { useMintRecords } from "@/pages/assets/hooks/useMintRecords";
import { useEffect, useState } from "react";
import { useNFT } from "./nftContext";

const NFTFilters = () => {
  const { records } = useFilterConfig();
  const { getMintRecordsFn } = useMintRecords();
  // const [filterData, setFilterData] = useState({});
  const { filterData, setFilterData } = useNFT();

  const handleFilterChange = (filters: { [key: string]: string }) => {
    setFilterData(filters);
  };

  useEffect(() => {
    if (filterData) {
      getMintRecordsFn(filterData);
    }
  }, [filterData]);

  return (
    <div className="app-container">
      <FilterComponent records={records} onFilterChange={handleFilterChange} />
    </div>
  );
};

export default NFTFilters;
