import React from 'react';
import { FiMenu } from 'react-icons/fi';
import { AiTwotoneHome } from 'react-icons/ai';
import { MdOutlineExplore, MdOutlineVideoLibrary } from 'react-icons/md';
import { BsCollectionPlay, BsPlayCircle } from 'react-icons/bs';

const Sidebar = () => {
  return (
    <div className='top-0 -left-20 md:left-0 bg-black fixed h-screen w-[70px]  '>
      <div className='flex flex-col mt-4 text-gray-200'>
        <div className='flex justify-center mb-4'>
          <FiMenu className='sidebarIcon cursor-pointer' />
        </div>
        <div className='sidebarCont'>
          <AiTwotoneHome className='sidebarIcon' />
          <p className='sidebarText'>Home</p>
        </div>
        <div className='sidebarCont'>
          <MdOutlineExplore className='sidebarIcon' />
          <p className='sidebarText'>Explore</p>
        </div>
        <div className='sidebarCont'>
          <BsPlayCircle className='sidebarIcon' />
          <p className='sidebarText'>Shorts</p>
        </div>
        <div className='sidebarCont'>
          <BsCollectionPlay className='sidebarIcon' />
          <p className='sidebarText'>Subscriptions</p>
        </div>
        <div className='sidebarCont'>
          <MdOutlineVideoLibrary className='sidebarIcon' />
          <p className='sidebarText'>Library</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
