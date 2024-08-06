import { axiosInstance } from "@/utils/axiosInstance";
import { useState, useEffect } from "react";

export const useMintRecords = () => {
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getMintRecords = async () => {
      try {
        const response = await axiosInstance.get("/mint-records");
        setRecords(response.data);
      } catch (error) {
        console.error("Error fetching mint records:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getMintRecords();
  }, []);

  return { records, isLoading, isError };
};
