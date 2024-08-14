import { axiosInstance } from "@/utils/axiosInstance";
import { useState, useEffect } from "react";
type NFTItem = {
  id: string;
  name: string;
  price: string;
  website: string;
};

export const usePopularNFTs = () => {
  const [records, setRecords] = useState<NFTItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPopularNFTs = async () => {
      try {
        const response = await axiosInstance.get(`/popular/nfts`);
        setRecords(response.data);
      } catch (error) {
        console.error("Error fetching banner config records:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getPopularNFTs();
  }, []);

  return { records, isLoading, isError };
};
