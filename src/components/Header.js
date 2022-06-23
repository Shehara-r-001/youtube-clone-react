import React from 'react';
import { BsFillMicFill, BsSearch, BsBell } from 'react-icons/bs';
import { BiVideoPlus } from 'react-icons/bi';
import { TbVideoPlus } from 'react-icons/tb';
import { CgMenuGridR } from 'react-icons/cg';
import { AiOutlineMenu } from 'react-icons/ai';
import { ReactComponent as Logo } from '../assets/utube2017_vector.svg';
// import User from '..assets/imageU.png';

const Header = () => {
  return (
    <div className='p-3 border-b border-gray-500'>
      <div className='flex items-center justify-between'>
        <AiOutlineMenu className='headerIcons' />
        <div className='w-28'>
          <Logo />
        </div>
        <div className='flex items-center justify-between w-[50vw]'>
          <BsSearch className='headerIcons' />
          <BsFillMicFill className='headerIcons' />
          <BiVideoPlus className='headerIcons h-7 w-7' />
          <CgMenuGridR className='headerIcons h-7 w-7' />
          <BsBell className='headerIcons' />
          <div>
            <img
              src='https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png'
              className='h-7 w-7 rounded-full'
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
