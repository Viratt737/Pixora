import React from 'react'
import {assets} from '../assets/assets'
const Login = () => {
  return (
    <div className='absolute top-0 left-0 right-0
    bottom-0 backdrop-blur-sm bg-black/30 flex
    justify-center items-center'>
      <form className='relative bg-black p-10 rounded-2xl
      text-slate-500'>
         <h1 className='text-center text-2xl text-white
         font-medium mb-2'>Sign Up</h1>
          <p className='text-sm text-amber-100 mb-2'>Welcome back! Please sign in to continue</p>
          <div className='border px-6 py-2 flex items-center
          gap-2 rounded-full mt-4'>
            <img width={18}src={assets.profile_icon} alt="" />
            <input type="text" placeholder='Enter your name' required
            className='outline-none text-sm'/>
          </div>

          <div className='border px-6 py-2 flex items-center
          gap-2 rounded-full mt-4'>
            <img width={18}src={assets.email_icon} alt="" />
            <input type="email" placeholder='Enter your email' required
            className='outline-none text-sm'/>
          </div>

          <div className='border px-6 py-2 flex items-center
          gap-2 rounded-full mt-4'>
            <img width={18}src={assets.lock_icon} alt="" />
            <input type="password" placeholder='Password' required
            className='outline-none text-sm'/>
          </div>

          <p className='mt-3.5 text-gray-500
          text-sm cursor-pointer'>Forgot Password?</p>

          <button className='bg-amber-200 mt-2 w-full text-shadow-indigo-100 py-2
          rounded-full cursor-pointer'>create account</button>

          <p className='mt-5 text-center'>Don't have an account? 
          <span className='text-blue-600 cursor-pointer'>Sign Up</span>
          </p>

          <p className='mt-5 text-center'>Already have an account? 
          <span className='text-blue-600 cursor-pointer'>Login</span>
          </p>

          <img src={assets.cross_icon} alt="" 
          className='absolute top-5 right-5 cursor-pointer'/>
      </form>
    </div>
  )
}

export default Login