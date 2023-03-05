import React from 'react'
import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';

import { FaReact,FaHtml5,FaCss3 ,FaPython, FaVuejs, FaJava } from 'react-icons/fa';
import { DiJavascript1, DiDjango, DiBootstrap, DiPhp,DiJqueryLogo, DiGit, DiNpm } from 'react-icons/di';
import { SiJavascript,SiTypescript } from 'react-icons/si';

import {easeIn, easeInOut, motion} from 'framer-motion'

export default function Skills(props) {

    let skillVariants = {
        show:{
            transition:{type:"string",delayChildren:0.2,staggerChildren:0.2}
        }
    }

    let itemVariants = {
        show:{
            x:0,

        },
        hide:{
            x:-20
        }

    }


    
    return (
        <div className='relative h-auto p-5 pb-10 bg-[#242526] w-screen mx-auto md:flex md:justify-between md:items-center md:max-w-7xl'>
			

            <div className='relativ flex w-4/5 mx-auto flex-col items-center md:justify-evenly md:items-center md:w-1/5 md:h-80 md:p-1 md:m-5'>
                <h4 className= 'relative text-white uppercase pb-2 tracking-[0.25rem] md:-top-2 md:-rotate-90 md:tracking-[0.5rem] md:text-xl md:uppercase'>Skills</h4>
                <hr className='relative bg-[#36bbc4] border-0 w-[20%] h-[3px] md:w-[2px] md:h-[25%] md:-bottom-6 '/>
            </div>

			<motion.div className='w-4/5 pt-10 mx-auto flex justify-around items-center flex-wrap md:w-4/5 md:mx-0 h-60 p-1'
                variants={skillVariants}
                animate="show"
                initial="hide"
                whileInView="show"
            
            >  
                <motion.div variants={itemVariants} className="w-[25%] md:w-[12%] h-auto ">  
                    <FaReact className='text-[#fff]/60 w-[100%] h-[100%] p-3 hover:text-[#36bbc4] cursor-pointer' />
                </motion.div>

                <motion.div variants={itemVariants} className="w-[25%] md:w-[12%] h-auto ">  
                    <FaHtml5 className='text-[#fff]/60 w-[100%] h-[100%] p-3 hover:text-[#36bbc4] cursor-pointer' />
                </motion.div>

                <motion.div variants={itemVariants}  className="w-[25%] md:w-[12%] h-auto ">  
                    <FaCss3 className='text-[#fff]/60 w-[100%] h-[100%] p-3 hover:text-[#36bbc4] cursor-pointer' />
                </motion.div>

                <motion.div variants={itemVariants} className="w-[25%] md:w-[12%] h-auto ">  
                    <FaPython className='text-[#fff]/60 w-[100%] h-[100%] p-3 hover:text-[#36bbc4] cursor-pointer' />
                </motion.div>

                <motion.div variants={itemVariants}  className="w-[25%] md:w-[12%] h-auto ">  
                    <FaJava className='text-[#fff]/60 w-[100%] h-[100%] p-3 hover:text-[#36bbc4] cursor-pointer' />
                </motion.div>

                <motion.div variants={itemVariants}  className="w-[25%] md:w-[12%] h-auto ">  
                    <SiJavascript className='text-[#fff]/60 w-[100%] h-[100%] p-3 hover:text-[#36bbc4] cursor-pointer' />
                </motion.div>

                <motion.div variants={itemVariants} className="w-[25%] md:w-[12%] h-auto ">  
                    <DiDjango className='text-[#fff]/60 w-[100%] h-[100%] p-3 hover:text-[#36bbc4] cursor-pointer' />
                </motion.div>

                <motion.div variants={itemVariants} className="w-[25%] md:w-[12%] h-auto ">  
                    <DiBootstrap className='text-[#fff]/60 w-[100%] h-[100%] p-3 hover:text-[#36bbc4] cursor-pointer' />
                </motion.div>

                <motion.div variants={itemVariants}  className="w-[25%] md:w-[12%] h-auto ">  
                    <DiPhp className='text-[#fff]/60 w-[100%] h-[100%] p-3 hover:text-[#36bbc4] cursor-pointer' />
                </motion.div>

                <motion.div variants={itemVariants} className="w-[25%] md:w-[12%] h-auto ">  
                    <DiJqueryLogo className='text-[#fff]/60 w-[100%] h-[100%] p-3 hover:text-[#36bbc4] cursor-pointer' />
                </motion.div>

                <motion.div variants={itemVariants} className="w-[25%] md:w-[12%] h-auto ">  
                    <DiGit className='text-[#fff]/60 w-[100%] h-[100%] p-3 hover:text-[#36bbc4] cursor-pointer' />
                </motion.div>

                <motion.div variants={itemVariants} className="w-[25%] md:w-[12%] h-auto ">  
                    <DiNpm className='text-[#fff]/60 w-[100%] h-[100%] p-3 hover:text-[#36bbc4] cursor-pointer' />
                </motion.div>

            </motion.div>



	
		</div>
            
    )
}

