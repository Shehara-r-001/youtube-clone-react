import React, { useEffect, useState } from 'react';
import { BiCut, BiDotsHorizontalRounded } from 'react-icons/bi';
import { MdPlaylistAdd } from 'react-icons/md';
import { FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { videoSuccessful } from '../redux/videoSlice';
import { useLocation } from 'react-router-dom';

const VideoPlayer = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo } = useSelector((state) => state.video);
  const dispatch = useDispatch();
  const [channel, setChannel] = useState();
  console.log(currentVideo);

  const path = useLocation().pathname.split('/')[2];
  // console.log(path);

  const fetchData = async () => {
    try {
      const videoRes = await axios.get(
        `http://localhost:3300/api/videos/find/${path}`
      );
      const channelRes = await axios.get(
        `http://localhost:3300/api/users/find/${videoRes.data.userID}`
      );
      setChannel(channelRes.data);
      dispatch(videoSuccessful(videoRes.data));
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, [path, dispatch]);
  return (
    <div className='mt-[90px] w-full'>
      <div className='mx-4 sm:mx-[60px] md:mx-[90px] border-b border-[#333] lg:w-[60vw] lg:mx-8'>
        <iframe
          // width='800'
          // height='500'
          src={currentVideo.videoUrl}
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full'
          className='w-[calc(100vw-32px)] sm:w-[calc(100vw-120px)] md:w-[calc(100vw-180px)] h-[300px] sm:h-[360px] md:h-[420px] mx-auto lg:w-[60vw] lg:mx-0 lg:h-[40vw]'
        ></iframe>
        <div className='flex items-center space-x-2 mt-4'>
          <p className='video__tags'>#netflix</p>
          <p className='video__tags'>#blonde</p>
          <p className='video__tags'>#anna</p>
          <p className='video__tags'>#monroe</p>
        </div>
        <div>
          <h1 className='text-md font-semibold'>{currentVideo.title}</h1>
        </div>
        <div>
          <div className='flex text-xs text-[#ccc] space-x-2'>
            <p>1.3M views</p>
            <p>{'\u00B7'}</p>
            <p>1 day ago</p>
          </div>
          <div className='flex items-center justify-between mt-2 px-1 pb-2 lg:w-[60vw] lg:mx-0'>
            <div className='flex items-center space-x-2'>
              <FaRegThumbsUp className='video__icon' />
              <p className='video__iconText'>12.1k</p>
            </div>
            <div className='flex items-center space-x-2'>
              <FaRegThumbsDown className='video__icon' />
              <p className='video__iconText'>DISLIKE</p>
            </div>
            <div className='flex items-center space-x-2'>
              <BiCut className='video__icon' />
              <p className='video__iconText'>CUT</p>
            </div>
            <div className='flex items-center space-x-2'>
              <MdPlaylistAdd className='video__icon w-5 h-5' />
              <p className='video__iconText mb-1'>SAVE</p>
            </div>
            <div className='flex items-center space-x-2'>
              <BiDotsHorizontalRounded className='video__icon h-5 w-5' />
            </div>
          </div>
        </div>
      </div>
      <div className='px-4 sm:w-[calc(100vw-120px)] sm:mx-auto sm:px-0 md:w-[calc(100vw-180px)] lg:w-[60vw] lg:mx-8'>
        <div className='flex items-center space-x-2 py-3'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9lbZ6Qa7KgWUMZ6Y04SRhQTGjnj541h2vUQ&usqp=CAU'
            alt='channel logo'
            className='h-10 w-10 object-cover rounded-full'
          />
          <div className='flex items-center flex-1'>
            <div className='flex-1'>
              <h1 className='text-md font-semibold'>NETFLIX</h1>
              <p className='text-xs text-[#ccc]'>20M subscribers</p>
            </div>

            <button className='bg-red-600 rounded-sm px-3 py-1 text-sm font-semibold hover:animate-pulse duration-200'>
              SUBSCRIBE
            </button>
          </div>
        </div>
        <h1 className='text-md font-semibold'>
          BLONDE | Official Trailer | Netflix
        </h1>
        <div className='flex items-center space-x-2 mt-1'>
          <p className='video__tags'>#netflix</p>
          <p className='video__tags'>#blonde</p>
          <p className='video__tags'>#anna</p>
          <p className='video__tags'>#monroe</p>
        </div>
        <p className='text-xs text-[#ccc] mt-2 cursor-pointer'>SHOW MORE</p>
      </div>
    </div>
  );
};

export default VideoPlayer;
