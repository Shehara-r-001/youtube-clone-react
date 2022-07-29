import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';

const Tags = [
  'Football',
  'Cricket',
  'Funny',
  'Trailer',
  'Prank',
  'Action',
  'ReactJS',
  'NextJs',
  'GraphQL',
  'Physics',
  'Maths',
  'Gaming',
  'Science',
  'Frontend',
  'NodeJS',
  'Backend',
  'Firebase',
];

const Tagsbar = ({ suggestions }) => {
  return (
    <div
      className={`border-b border-gray-500  ${
        suggestions ? 'bg-[#1a1a1a]' : 'bg-[#0d0d0d]'
      }`}
    >
      <ScrollContainer
        horizontal={true}
        vertical={false}
        className='flex items-center overflow-x-scroll h-[50px] space-x-3 px-2 text-sm text-gray-200'
      >
        <div className='flex items-center space-x-3'>
          <div className='border rounded-full px-3 py-1 cursor-pointer bg-white text-black'>
            <h1>All</h1>
          </div>
          {Tags.map((tag, index) => (
            <div
              className='border border-gray-500 rounded-full px-3 py-1 cursor-pointer bg-[#262626]'
              key={index}
            >
              <h1>{tag}</h1>
            </div>
          ))}
        </div>
      </ScrollContainer>
    </div>
  );
};

export default Tagsbar;
