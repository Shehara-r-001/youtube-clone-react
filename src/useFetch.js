import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`http://localhost:3300/api/videos/${url}`);
      setVideos(res.data);
    };
    fetchVideos();
  }, [url]);

  return [videos];
};

export default useFetch;
