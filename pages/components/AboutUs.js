import React from 'react'
import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';



export default function About(props) {
    

    return (
        <div className='relative h-auto p-5 bg-[#000]/30 w-screen flex flex-col mx-auto md:flex-row md:justify-center md:items-center' id="about">
			
            <div className='relativ flex w-4/5 mx-auto flex-col items-center md:justify-evenly md:items-center md:w-1/5 md:h-80 md:p-1 md:m-5'>
                <h4 className= 'relative text-white uppercase pb-2 tracking-[0.25rem] md:-top-2 md:-rotate-90 md:tracking-[0.5rem] md:text-xl md:uppercase'>About Me</h4>
                <hr className='relative bg-[#36bbc4] border-0 w-[25%] h-[3px] md:w-[2px] md:h-[25%] md:-bottom-6 '/>
            </div>

			<div className=' flex justify-center items-center w-4/5 text-white text-sm mx-auto md:w-2/5 md:h-80 md:m-0 p-1'>   
                <p className='relative text-center pt-4 md:-top-6 md:text-white md:tracking-wider md:text-[1em] '>An enthusiastic, self-motivated, reliable, responsible, and hardworking person. A Computer science graduate having excellent Technical IT skills and experience as well as excellent interpersonal skills. Always up to be challenged and motivated to work on new project to improve my IT skills. Seeking for a graduate position in the IT field to utilized and strengthen my skills and expand my knowledge and build on experience.</p>
            </div>
	
		</div>
            
    )
}

