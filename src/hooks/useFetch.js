import { useEffect, useState } from 'react';
import { fetchDataFromApi } from '../utils/api';

const useFetch = (endpoint) => {
  const [data, setData] = useState();

  useEffect(() => {
    makeApiCall(endpoint);
  }, [endpoint]);

  const makeApiCall = async (url) => {
    try {
      const res = await fetchDataFromApi(url);
      setData(res.data);
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  return { data };
};

export default useFetch;
