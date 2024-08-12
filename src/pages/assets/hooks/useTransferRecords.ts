import { axiosInstance } from "@/utils/axiosInstance";
import { useState, useEffect } from "react";

type transferType = {
  tokenId: number;
  from: string;
  to: string;
  timestamp: string;
  price: string;
};

export const useTransferRecords = () => {
  const [records, setRecords] = useState<transferType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getTransferRecords = async () => {
      try {
        const response = await axiosInstance.get("/transfer/records");
        setRecords(response.data);
      } catch (error) {
        console.error("Error fetching transfer records:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getTransferRecords();
  }, []);

  return { records, isLoading, isError };
};
