import React from 'react';
import logo from '../assets/full_color_icon.svg';

const Login = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center flex-col'>
      <div className='w-[300px] bg-black flex flex-col rounded-sm py-5'>
        <div className='mx-auto'>
          <img src={logo} alt='' className='h-10 w-15' />
        </div>
        <form action='submit' className='mt-6'>
          <div className='mx-[20px] space-y-2 flex flex-col justify-center group'>
            <input
              type='text'
              placeholder='Username'
              className='login__input'
            />
            <input
              type='Password'
              placeholder='Password'
              className='login__input'
            />
            <button className='login__btn'>Login</button>
          </div>
        </form>
        <form action='submit' className='mt-6'>
          <div className='mx-[20px] space-y-2 flex flex-col justify-center group'>
            <input
              type='text'
              placeholder='Username'
              className='login__input'
            />
            <input type='text' placeholder='Email' className='login__input' />
            <input
              type='Password'
              placeholder='Password'
              className='login__input'
            />
            <button className='login__btn'>Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
