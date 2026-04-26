import React from 'react'
import {assets} from '../assets/assets'
const Generatebtn = () => {
  return (
    <div className='flex items-center flex-col justify-center pb-40'>
        <h1 className='mt-4 text-2xl md:text-3xl lg:text-4xl
        font-semibold text-neutral-800 py-6'>See the magic.Try now</h1>
         <button className='text-white text-xl bg-black
           w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full hover:scale-105'>Generate Images
            <img className="h-6" src={assets.star_group} alt="" />
         </button>
        
    </div>
  )
}

export default Generatebtn