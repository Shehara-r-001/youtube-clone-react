import React, { useEffect, useState } from 'react';
import { BiLike, BiDislike } from 'react-icons/bi';
import axios from 'axios';
import { format } from 'timeago.js';

const Comment = ({ comment }) => {
  const [userName, setUserName] = useState();
  const fetchUser = async () => {
    const res = await axios.get(
      `http://localhost:3300/api/users/find/${comment?.userID}`
    );
    setUserName(res.data?.name);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <div className='flex space-x-3 my-4'>
        <img
          src={`https://avatars.dicebear.com/api/open-peeps/${userName}.svg`}
          alt='channel logo'
          className='h-8 w-8 object-cover rounded-full bg-red-900'
        />
        <div>
          <div className='flex items-center space-x-2'>
            <h1 className='text-sm font-bold'>{userName}</h1>
            <p className='text-xs text-[#ccc]'>{format(comment?.createdAt)}</p>
          </div>
          <p className='text-sm font-semibold'>{comment?.desc}</p>
          <div className='flex items-center text-sm space-x-6 mt-2'>
            <div className='flex items-center space-x-1'>
              <BiLike className='cursor-pointer' />
              <p className='text-xs'>Like</p>
            </div>
            <div className='flex items-center space-x-1'>
              <BiDislike className='cursor-pointer' />
              <p className='text-xs'>Dislike</p>
            </div>
            <p className='text-sm font-semibold cursor-pointer'>REPLY</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
