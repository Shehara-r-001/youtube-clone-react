import React from 'react';
import Feed from '../components/Feed';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Tagsbar from '../components/Tagsbar';
import useFetch from '../useFetch';

const Homepage = ({ type }) => {
  const [videos] = useFetch(type);

  return (
    <div className=''>
      <Header />
      <div className=''>
        <Sidebar />
        <div className='md:ml-[70px] mt-[60px]'>
          <Tagsbar />
          <Feed videos={videos} />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
