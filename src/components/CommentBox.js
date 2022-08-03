import React, { useState } from 'react';
import { MdSort } from 'react-icons/md';
import Comment from './Comment';
import { useTruncate } from '../useTruncate';
import { useSelector } from 'react-redux';
import axios from 'axios';

const CommentBox = ({ comments }) => {
  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo } = useSelector((state) => state.video);
  const nOfComments = useTruncate(comments?.length);
  const [comment, setComment] = useState();
  const [id] = useState(currentVideo?._id);

  const addComment = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3300/api/comments', {
        comment,
        id,
      });
      setComment('');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='mx-4 border-t border-[#333] mt-3 sm:w-[calc(100vw-120px)] sm:mx-auto md:w-[calc(100vw-180px)] lg:w-[60vw] lg:mx-8'>
      <div>
        <div className='text-sm flex items-center space-x-6 mt-2'>
          <h1>{nOfComments} comments</h1>
          <div className='flex items-center space-x-2'>
            <MdSort className='h-5 w-5 cursor-pointer' />
            <h1 className='font-semibold text-xs'>SORT BY</h1>
          </div>
        </div>
        <form className='flex items-center space-x-3 my-4'>
          <img
            src={`https://avatars.dicebear.com/api/open-peeps/${currentUser?.name}.svg`}
            alt='channel logo'
            className='h-9 w-9 object-cover rounded-full bg-red-900'
          />
          <input
            type='text'
            onChange={(e) => setComment(e.target.value)}
            placeholder='Comment publicly as user..'
            className='bg-[#1a1a1a] outline-none text-sm px-3 py-1 flex-1 rounded-sm text-[#ccc] border-b border-[#333]'
          />
          <button
            className='bg-gray-500 rounded-sm px-3 py-1 text-sm font-semibold hover:animate-pulse duration-200'
            // onClick={addComment}
          >
            POST
          </button>
        </form>
        {comments.map((comment, index) => (
          <div key={index}>
            <Comment comment={comment} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentBox;
