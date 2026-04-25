import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  return (
    <div className='flex items-center justify-between py-4'>
      <Link to='/'>
        <img src={assets.logo} alt="" className='w-28 sm:w-32 lg:w-40' />
      </Link>
      <div>
        {user ? (
          <div className='flex items-center gap-3'>
            <button className='flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full'>
              <img className='w-5' src={assets.credit_star} alt="" />
              <p className='text-xs font-medium text-black-100'>Credits left : 50</p>
            </button>
            <p className='text-black-100'>Hi, Virat Trivedi</p>

            {/* Profile icon with dropdown */}
            <div className='relative group'>
              <img
                src={assets.profile_icon}
                alt=""
                className='w-10 drop-shadow cursor-pointer'
              />
              <div className='absolute hidden group-hover:block
                top-10 right-0 z-10 bg-white text-black rounded shadow-lg'>
                <ul className='py-2 list-none m-0 p-2 bg-white rounded-md border text-sm'>
                  <i className="ri-logout-box-r-line hover:bg-gray-100 cursor-pointer"></i>
                </ul>
              </div>
            </div>

          </div>
        ) : (
          <div className='flex items-center gap-2 sm:gap-5'>
            <p
              onClick={() => navigate('/buycredits')}
              className='cursor-pointer'>
              Pricing
            </p>
            <button className='bg-zinc-800 text-white px-7 py-2 rounded-2xl'>
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar