import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Feed from '../components/Feed';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Tagsbar from '../components/Tagsbar';

const Homepage = ({ type }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`http://localhost:3300/api/videos/${type}`);
      setVideos(res.data);
    };
    fetchVideos();
  }, [type]);

  return (
    <div className=''>
      <Header />
      <div className=''>
        <Sidebar />
        <div className='md:ml-[70px]'>
          <Tagsbar />
          <Feed videos={videos} />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
