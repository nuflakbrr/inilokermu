import { useState, useEffect } from 'react';
import axios from 'axios';

const rapidapi = 'c770d74d82msh2365e4c99cf70c2p125c83jsn2cf0121749e5'

const useFetch = <T>(endpoint: string, query: Record<string, unknown>) => {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const options = {
    method: "GET",
    url: `https://jobs-api14.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": rapidapi,
      "X-RapidAPI-Host": "jobs-api14.p.rapidapi.com",
    },
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);

      setData(response.data.jobs);
      setIsLoading(false);
    } catch (error) {
      setError((error as Error).message);
      console.error(error)
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;