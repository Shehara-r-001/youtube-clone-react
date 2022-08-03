import React from 'react';
import { FiMenu, FiLogOut } from 'react-icons/fi';
import { AiTwotoneHome } from 'react-icons/ai';
import { MdOutlineExplore, MdOutlineVideoLibrary } from 'react-icons/md';
import { BsCollectionPlay, BsPlayCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from '../redux/userSlice';

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <div className='top-0 -left-20 md:left-0 bg-black fixed h-screen w-[70px]  '>
      <div className='flex flex-col mt-4 text-gray-200'>
        <div className='flex justify-center mb-4'>
          <FiMenu className='sidebarIcon cursor-pointer' />
        </div>
        <Link to='/'>
          <div className='sidebarCont'>
            <AiTwotoneHome className='sidebarIcon' />
            <p className='sidebarText'>Home</p>
          </div>
        </Link>
        <Link to='trending'>
          <div className='sidebarCont'>
            <MdOutlineExplore className='sidebarIcon' />
            <p className='sidebarText'>Explore</p>
          </div>
        </Link>
        <div className='sidebarCont'>
          <BsPlayCircle className='sidebarIcon' />
          <p className='sidebarText'>Shorts</p>
        </div>
        <Link to='sub'>
          <div className='sidebarCont'>
            <BsCollectionPlay className='sidebarIcon' />
            <p className='sidebarText'>Subscriptions</p>
          </div>
        </Link>
        <div className='sidebarCont'>
          <MdOutlineVideoLibrary className='sidebarIcon' />
          <p className='sidebarText'>Library</p>
        </div>
        <div
          className='sidebarCont border-t border-b border-gray-900'
          onClick={() => dispatch(logOut())}
        >
          <FiLogOut className='sidebarIcon' />
          <p className='sidebarText'>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
