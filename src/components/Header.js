import React from 'react';
import { BsFillMicFill, BsSearch, BsBell } from 'react-icons/bs';
import { BiVideoPlus } from 'react-icons/bi';
import { CgMenuGridR } from 'react-icons/cg';
import { FiMenu } from 'react-icons/fi';
import logo from '../assets/utube_edited.jpg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const { currentUser } = useSelector((state) => state.user.currentUser);
  return (
    <div className='p-3 border-b border-gray-500 bg-black fixed top-0 left-0 w-full z-50'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-6 md:w-[20vw] sm:w-[30vw] md:ml-6'>
          <FiMenu className='headerIcons h-7 w-7' />

          {/* <Logo /> */}
          <img src={logo} alt='' className='h-8' />
        </div>

        <div className='flex items-center justify-between md:w-[70vw] sm:w-[65vw]'>
          <div className='flex items-center flex-1 '>
            <input
              type='text'
              placeholder='Search'
              className='hidden sm:inline  p-1.5 text-md  md:flex-1 outline-none bg-[#1a1a1a] text-white rounded-sm pl-4'
            />
            <div className='sm:bg-[#333333] p-2 rounded-sm -ml-0.5 w-[50px] flex justify-center'>
              <BsSearch className='headerIcons' />
            </div>
          </div>
          <div className='flex items-center justify-between w-[36vw] sm:w-[26vw] md:w-[18vw] mx-2 md:ml-6'>
            <BsFillMicFill className='headerIcons sm:h-7 sm:w-7 sm:bg-[#333333] rounded-full sm:p-1.5' />
            <BiVideoPlus className='headerIcons h-7 w-7' />
            <CgMenuGridR className='headerIcons h-7 w-7' />
            <BsBell className='headerIcons' />
            <div>
              <Link to='/login'>
                {currentUser ? (
                  <img
                    src={`https://avatars.dicebear.com/api/open-peeps/${currentUser?.name}.svg`}
                    className='h-7 w-7 rounded- border border-1 border-white'
                    alt=''
                  />
                ) : (
                  <img
                    src={`https://avatars.dicebear.com/api/open-peeps/icon.svg`}
                    className='h-7 w-7 rounded-full border border-1 border-white'
                    alt=''
                  />
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
