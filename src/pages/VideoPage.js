import React from 'react';
import CommentBox from '../components/CommentBox';
import Suggestions from '../components/Suggestions';
import VideoPlayer from '../components/VideoPlayer';

const VideoPage = () => {
  return (
    <div className='scrollbar-hide flex'>
      <div>
        <VideoPlayer />
        <CommentBox />
      </div>
      <div className='hidden lg:inline'>
        <Suggestions />
      </div>
    </div>
  );
};

export default VideoPage;
