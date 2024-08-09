import { axiosInstance } from "@/utils/axiosInstance";
import { useState, useEffect } from "react";
type FilterItem = {
  name: string;
  items: string[];
};

export const useFilterConfig = () => {
  const [records, setRecords] = useState<FilterItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getFilterConfig = async () => {
      try {
        const response = await axiosInstance.get(`/filter/config`);
        setRecords(response.data);
      } catch (error) {
        console.error("Error fetching banner config records:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getFilterConfig();
  }, []);

  return { records, isLoading, isError };
};
