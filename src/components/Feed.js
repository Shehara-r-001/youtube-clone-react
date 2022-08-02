import React from 'react';
import Video from './Video';

const Feed = ({ videos }) => {
  console.log(videos);
  return (
    <div className='p-2 mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {videos.map((video) => (
        <div key={video._id}>
          <Video video={video} />
        </div>
      ))}
    </div>
  );
};

export default Feed;
