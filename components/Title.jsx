import React from 'react'

import { motion } from 'framer-motion'

function Title({title}) {
  return (
    <motion.div 
        className='relative flex text-red-200 uppercase pb-2 tracking-[0.25rem] md:-top-1 md:tracking-[0.5rem] md:text-xl md:uppercase whitespace-nowrap font-montserrat '
        variants={
          {"initial":{x:-10},
            "animate":{x:0}
        }
        }
    >
      
        {title.split("").map((letter,i)=>{
          return (
            <p key={i} initial="initial" whileHover="animate">
              {letter}
            </p>
          );
        })}
    </motion.div>
  )
}

export default Title