import React from 'react';
import { BiLike, BiDislike } from 'react-icons/bi';

const Comment = () => {
  return (
    <div>
      <div className='flex space-x-3 my-4'>
        <img
          src='https://www.seekpng.com/png/full/356-3562377_personal-user.png'
          alt='channel logo'
          className='h-8 w-8 object-cover rounded-full'
        />
        <div>
          <div className='flex items-center space-x-2'>
            <h1 className='text-sm font-bold'>User name</h1>
            <p className='text-xs text-[#ccc]'>2 hours ago</p>
          </div>
          <p className='text-sm font-semibold'>This is a comment..</p>
          <div className='flex items-center text-sm space-x-6 mt-2'>
            <div className='flex items-center space-x-1'>
              <BiLike className='cursor-pointer' />
              <p className='text-xs'>123</p>
            </div>
            <div className='flex items-center space-x-1'>
              <BiDislike className='cursor-pointer' />
              <p className='text-xs'>123</p>
            </div>
            <p className='text-sm font-semibold cursor-pointer'>REPLY</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
