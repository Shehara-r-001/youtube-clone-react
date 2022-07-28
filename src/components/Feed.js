import React from 'react';
import Video from './Video';

const Feed = () => {
  return (
    <div className='p-2 mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
    </div>
  );
};

export default Feed;
