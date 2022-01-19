import {useState} from 'react';

import {AxiosInstance} from './axiosConfig';

export const useGetRequest = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getRequest = endpoint => {
    setLoading(true);
    AxiosInstance({
      method: 'GET',
      url: endpoint,
    })
      .then(res => {
        // console.log(res.data);
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return {
    data,
    loading,
    getRequest,
  };
};
