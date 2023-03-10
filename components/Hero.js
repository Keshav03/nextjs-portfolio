import React from 'react';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';

import { motion } from 'framer-motion';

export default function Hero(props) {
    

    return (
        <div className=' relative h-[90vh] bg-[#242526] w-4/5 mx-auto flex flex-col justify-center items-center md:h-[90vh] md:w-screen  md:max-w-7xl' id="home">


            <motion.div 
                className='relative w-[250px] h-[250px] -top-[15%]'
                initial={{y:-100,opacity:0}}
                animate={{y:0}}
                whileInView={{
                    y:0,
                    opacity:1,
                    transition:{
                        duration:1,
                        type:"spring",
                        stiffness: 200 
                    }
                }}
                
            >
                <Image alt="" src="/Image.png" layout='fill'/>
            </motion.div>
            <h1 className='relative text-white -top-[5%] text-center h-[40px] text-3xl md:text-6xl md:text-900 '><Typewriter
                    options={{
                        strings: [' < Hello There, ', 'I am Keshav Bokhoree! />'],
                        autoStart: true,
                        loop: true,
                        pauseFor:1500,
                        skipAddStyles:true,
                        cursorClassName:"text-[#36bbc4]",
                        wrapperClassName:""

                      }}
            />
            </h1>
            <h3 className='relative text-[#36bbc4] w-[100%] text-center tracking-[.5em] text-base leading-8 uppercase top-[2%]  md:text-xl md:tracking-[0.75em]'>Junior Software Developer</h3>
        
        </div>

    )
}

