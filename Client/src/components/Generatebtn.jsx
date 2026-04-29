import React,{useContext} from 'react'
import {assets} from '../assets/assets'
import { motion } from "motion/react"
import {AppContext} from '../context/AppContext'
import {useNavigate} from 'react-router-dom'
const Generatebtn = () => {
    const {user, setShowLogin} = useContext(AppContext)
    const navigate = useNavigate()
    const onClickHandler =() =>{
        if(user){
            navigate('/result')
        }else{
            setShowLogin(true)
        }
    }

  return (
    <motion.div
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}
     className='flex items-center flex-col justify-center pb-40'>
        <h1 className='mt-4 text-2xl md:text-3xl lg:text-4xl
        font-semibold text-neutral-800 py-6'>See the magic.Try now</h1>
         <button onClick={onClickHandler}
         className='text-white text-xl bg-black
           w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full hover:scale-105 cursor-pointer'>Generate Images
            <img className="h-6" src={assets.star_group} alt="" />
         </button>
        
    </motion.div>
  )
}

export default Generatebtn