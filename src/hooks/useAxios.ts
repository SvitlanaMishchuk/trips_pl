import { useEffect, useState } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';

interface useAxiosProps {
  url: string;
  method: 'get' | 'post';
  data?: any;
}

export const useAxios = ({ url, method, data }: useAxiosProps) => {
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, [url, method, data]);

  const fetchData = () => {
    axios[method](url, data)
      .then((res: AxiosResponse) => {
        setResponse(res.data);
      })
      .catch((error: AxiosError) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return { response, error, loading };
};
