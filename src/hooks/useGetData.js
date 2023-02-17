import { useEffect, useState } from "react";
import { axiosInstance } from "../apiConfigs/axiosInstances";

/**

Retrieves data from an API endpoint using Axios.
@param {Object} options - The options object.
@param {string} options.endpoint - The URL of the API endpoint to retrieve data from.
@param {string|null} options.title - The title of the data.
@returns {Object} An object containing the retrieved data, loading state, and any errors that occurred.

*/

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
