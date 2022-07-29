import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import Interpunct from 'react-interpunct';
import { Link } from 'react-router-dom';

const Video = ({ suggestions }) => {
  return (
    <Link to='/video/test_id'>
      <div className='transition-all duration-300 my-3'>
        <div className={`px-10 group sm:px-3 ${suggestions ? 'flex' : ''}`}>
          <div className='relative'>
            <img
              src='https://i.ytimg.com/vi/duJNVv9m2NY/maxresdefault.jpg'
              alt='thumb'
              className={`${suggestions && 'h-[100px] w-[180px]'}`}
            />
            <div className='absolute bottom-2 right-2 text-sm bg-black opacity-70 px-1 rounded-sm'>
              <p className=''>10.23</p>
            </div>
          </div>
          <div className={` flex  ${!suggestions ? 'items-center py-2' : ''}`}>
            <img
              src='https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png'
              alt=''
              className={`h-10 w-10 rounded-full sm:h-8 sm:w-8 ${
                suggestions && 'hidden'
              }`}
            />
            <div className={`flex-1 ml-2 ${suggestions && 'w-[200px]'}`}>
              <h1 className='font-semibold text-white'>name of the video</h1>
              <div className='text-sm text-[#8c8c8c] '>
                <p className='truncate'>name of the channel</p>
                <div className='flex items-center text-xs'>
                  <p className='mr-1 truncate'>111K views</p>
                  <Interpunct> </Interpunct>
                  <p className='ml-1 truncate'>3 weeks ago</p>
                </div>
              </div>
            </div>
            <BsThreeDotsVertical className='hidden group-hover:block h-5 w-5 text-[#8c8c8c] cursor-pointer' />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Video;
