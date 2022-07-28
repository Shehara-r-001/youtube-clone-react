import React from 'react';
import { ReactComponent as Logo } from '../assets/full_color_icon.svg';

const Login = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center flex-col'>
      <Logo />

      <button className='relative px-5 py-3 overflow-hidden font-medium text-white rounded-md shadow-inner group mt-6'>
        <span className='absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-red-600 group-hover:w-full ease'></span>
        <span className='absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-red-600 group-hover:w-full ease'></span>
        <span className='absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-red-600 group-hover:h-full ease'></span>
        <span className='absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-red-600 group-hover:h-full ease'></span>
        <span className='absolute inset-0 w-full h-full duration-300 delay-300 bg-[#ff3333] opacity-0 group-hover:opacity-100'></span>
        <span className='relative transition-colors duration-300 delay-200 group-hover:text-white ease uppercase'>
          Login to the Youtube
        </span>
      </button>
    </div>
  );
};

export default Login;
