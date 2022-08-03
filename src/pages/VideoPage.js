import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CommentBox from '../components/CommentBox';
import Suggestions from '../components/Suggestions';
import VideoPlayer from '../components/VideoPlayer';

const VideoPage = () => {
  const { currentVideo } = useSelector((state) => state.video);
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const comments = await axios.get(
      `http://localhost:3300/comments/${currentVideo._id}`
    );
    setComments(comments.data);
  };

  useEffect(() => {
    fetchComments();
  }, [currentVideo]);
  return (
    <div className='scrollbar-hide flex'>
      <div>
        <VideoPlayer />
        <CommentBox comments={comments} />
      </div>
      <div className='hidden lg:inline'>
        <Suggestions />
      </div>
    </div>
  );
};

export default VideoPage;
