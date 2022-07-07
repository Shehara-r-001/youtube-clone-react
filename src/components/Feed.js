import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPopularVideos } from '../redux/actions/videos';
import Video from './Video';

const Feed = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularVideos);
  }, [dispatch]);
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
