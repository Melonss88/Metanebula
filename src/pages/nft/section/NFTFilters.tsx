import FilterComponent from "../components/FilterComponent";
import { useFilterConfig } from "../hooks/useFilterConfig";
import { useNFT } from "./nftContext";

const NFTFilters = () => {
  const { records } = useFilterConfig();
  const { mintRecords, setMintRecords } = useNFT();

  const handleFilterChange = (filters: { [key: string]: string }) => {
    let updatedData = mintRecords;
    console.log("updatedData", updatedData);
  };

  return (
    <div className="app-container">
      <FilterComponent records={records} onFilterChange={handleFilterChange} />
    </div>
  );
};

export default NFTFilters;
