import React from 'react'
import {assets} from '../assets/assets'
import { motion } from "motion/react"
const footer = () => {
  return (
    <motion.div
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}
     className='flex items-center justify-between gap-4 py-3
    mt-1'>
       <img src={assets.logo} alt="" width={150}/>
       <p className='flex-1 border-l border-gray-400 pl-4
       test-sm text-gray-600 max-sm:hidden'>Copyright @Virat Trivedi | All right reserved.</p>
       <div className='flex gap-2.5'>
         <img src={assets.facebook_icon} alt="" width={35} />
         <img src={assets.instagram_icon} alt="" width={35} />
         <img src={assets.twitter_icon} alt="" width={35} />
       </div>
    </motion.div>
  )
}

export default footer