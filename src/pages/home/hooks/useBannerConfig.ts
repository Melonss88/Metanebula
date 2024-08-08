import { axiosInstance } from "@/utils/axiosInstance";
import { useState, useEffect } from "react";
type bannerItem = {
  id: number;
  imgURL: string;
  title: string;
  content: string;
};

export const useBannerConfig = () => {
  const [records, setRecords] = useState<bannerItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getBannerConfig = async () => {
      try {
        const response = await axiosInstance.get(`/banner/config`);
        setRecords(response.data);
      } catch (error) {
        console.error("Error fetching banner config records:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getBannerConfig();
  }, []);

  return { records, isLoading, isError };
};
