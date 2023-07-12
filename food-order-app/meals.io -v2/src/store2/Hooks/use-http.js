import { useState } from "react";

function useHttp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async (url, transformData) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("something went wrong");
      }
      const data = await response.json();
      transformData(data);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  return {
    fetchData,
    error,
    loading,
  };
}
export default useHttp;
