import React from 'react'
import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';



export default function About(props) {
    

    return (
        <div className='relative h-auto p-5 bg-[#000]/30 w-screen mx-auto flex justify-center items-center'>
			
            <div className='relative flex flex-col justify-evenly items-center w-1/5 h-80 p-1 m-5'>
                <h4 className= 'relative -top-2 text-white -rotate-90 tracking-[0.5rem] text-xl uppercase'>About Me</h4>
                <hr className='relative h-[25%] -bottom-6 w-[2px] bg-[#36bbc4]'/>
            </div>

			<div className='flex justify-center items-center w-2/5 h-80 p-1'>  
                <p className='relative -top-6 text-white tracking-wider text-[1em]'>An enthusiastic, self-motivated, reliable, responsible, and hardworking person. A Computer science graduate having excellent Technical IT skills and experience as well as excellent interpersonal skills. Always up to be challenged and motivated to work on new project to improve my IT skills. Seeking for a graduate position in the IT field to utilized and strengthen my skills and expand my knowledge and build on experience.</p>
            </div>
	
		</div>
            
    )
}

