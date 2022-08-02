import React from 'react';
import Tagsbar from './Tagsbar';
import Video from './Video';

const Suggestions = () => {
  return (
    <div className='fixed top-[80px] w-[calc(40vw-72px)]'>
      <Tagsbar suggestions />
      <div className='w-full fixed top-[140px] h-[calc(100vh-140px)] overflow-y-scroll'>
        {/* <Video suggestions />
        <Video suggestions />
        <Video suggestions />
        <Video suggestions />
        <Video suggestions />
        <Video suggestions /> */}
      </div>
    </div>
  );
};

export default Suggestions;
