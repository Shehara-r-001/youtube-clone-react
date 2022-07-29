import React from 'react';
import Feed from '../components/Feed';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Tagsbar from '../components/Tagsbar';

const Homepage = () => {
  return (
    <div className=''>
      <Header />
      <div className=''>
        <Sidebar />
        <div className='md:ml-[70px]'>
          <Tagsbar />
          <Feed />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
