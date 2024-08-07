import { EthxCatItemType } from "@/pages/nft/section/type";
import { axiosInstance } from "@/utils/axiosInstance";
import { useState, useEffect } from "react";

export const useNftDetail = (id: string) => {
  const [records, setRecords] = useState<EthxCatItemType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getNftDetail = async () => {
      try {
        const response = await axiosInstance.get(`/nft/details/${id}`);
        setRecords(response.data);
      } catch (error) {
        console.error("Error fetching mint records:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getNftDetail();
  }, [id]);

  return { records, isLoading, isError };
};
