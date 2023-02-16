import { useEffect, useState } from "react";
import { axiosInstance } from "../apiConfigs/axiosInstances";

export default function useGetData(options) {
  const title = options.title || null;
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axiosInstance
      .get(options.endpoint)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  }, [options.endpoint]);

  return { title, data, isLoading, error };
}
