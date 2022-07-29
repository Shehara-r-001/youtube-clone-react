import React from 'react';
import { MdSort } from 'react-icons/md';
import Comment from './Comment';

const CommentBox = () => {
  return (
    <div className='mx-4 border-t border-[#333] mt-3 sm:w-[calc(100vw-120px)] sm:mx-auto md:w-[calc(100vw-180px)] lg:w-[60vw] lg:mx-8'>
      <div>
        <div className='text-sm flex items-center space-x-6 mt-2'>
          <h1>1.9k Comments</h1>
          <div className='flex items-center space-x-2'>
            <MdSort className='h-5 w-5 cursor-pointer' />
            <h1 className='font-semibold text-xs'>SORT BY</h1>
          </div>
        </div>
        <form className='flex items-center space-x-3 my-4'>
          <img
            src='https://www.seekpng.com/png/full/356-3562377_personal-user.png'
            alt='channel logo'
            className='h-9 w-9 object-cover rounded-full'
          />
          <input
            type='text'
            placeholder='Comment publicly as user..'
            className='bg-[#1a1a1a] outline-none text-sm px-3 py-1 flex-1 rounded-sm text-[#ccc] border-b border-[#333]'
          />
        </form>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>
  );
};

export default CommentBox;
