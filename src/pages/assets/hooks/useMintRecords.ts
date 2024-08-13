import { useNFT } from "@/pages/nft/section/nftContext";
import { axiosInstance } from "@/utils/axiosInstance";
import { useState } from "react";

export const useMintRecords = () => {
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { setMintRecords } = useNFT();

  const getMintRecordsFn = async (filter = {}) => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await axiosInstance.post("/mint/records", filter);
      setRecords(response.data);
      setMintRecords(response.data);
    } catch (error) {
      console.error("Error fetching mint records:", error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return { records, isLoading, isError, getMintRecordsFn };
};
