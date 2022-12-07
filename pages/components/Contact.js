import React from 'react'
import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';

import { FaReact,FaHtml5,FaCss3 ,FaPython, FaVuejs, FaJava } from 'react-icons/fa';
import { DiJavascript1, DiDjango, DiBootstrap, DiPhp,DiJqueryLogo, DiGit, DiNpm } from 'react-icons/di';
import { SiJavascript,SiTypescript } from 'react-icons/si';

export default function Contact(props) {
    

    return (
        <div className='relative h-auto p-5 bg-[#242526] w-screen mx-auto flex justify-center items-center' id="contact">
			

            <div className='flex flex-col justify-evenly items-center w-1/5 h-80 p-1 m-5'>
                <h4 className= 'text-white -rotate-90 tracking-[0.5rem] text-xl uppercase'>Skills</h4>
                <hr className='h-[30%] w-[2px] bg-[#36bbc4]'/>
            </div>

			<div className='flex justify-around items-center flex-wrap grid-cols-5 w-2/5 h-60 p-1'>  
                
                
            </div>



	
		</div>
            
    )
}

