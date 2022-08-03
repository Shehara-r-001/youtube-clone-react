import axios from 'axios';
import React, { useState } from 'react';
import logo from '../assets/full_color_icon.svg';
import { useDispatch } from 'react-redux';
import { loginFailed, loginStart, loginSuccessful } from '../redux/userSlice';

const authUrl = 'http://localhost:3300/api/auth';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const loginHandler = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post(`${authUrl}/signin`, {
        name,
        password,
      });
      // console.log(res.data);
      dispatch(loginSuccessful(res.data));
    } catch (error) {
      dispatch(loginFailed());
    }
  };

  const signUpHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${authUrl}/signup`, {
        name,
        email,
        password,
      });
      console.log(res.data);
    } catch (error) {}
  };
  return (
    <div className='h-screen w-full flex justify-center items-center flex-col'>
      <div className='w-[300px] bg-black flex flex-col rounded-sm py-5 shadow-shadow-1'>
        <div className='mx-auto'>
          <img src={logo} alt='' className='h-10 w-15' />
        </div>
        <form action='submit' className='mt-6'>
          <div className='mx-[20px] space-y-2 flex flex-col justify-center group'>
            <input
              type='text'
              placeholder='Username'
              className='login__input'
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type='Password'
              placeholder='Password'
              className='login__input'
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={loginHandler} className='login__btn'>
              Login
            </button>
          </div>
        </form>
        <form action='submit' className='mt-6'>
          <div className='mx-[20px] space-y-2 flex flex-col justify-center group'>
            <input
              type='text'
              placeholder='Username'
              className='login__input'
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type='text'
              placeholder='Email'
              className='login__input'
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type='Password'
              placeholder='Password'
              className='login__input'
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={signUpHandler} className='login__btn'>
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
