import React from 'react'
import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';

import { FaReact,FaHtml5,FaCss3 ,FaPython, FaVuejs, FaJava } from 'react-icons/fa';
import { DiJavascript1, DiDjango, DiBootstrap, DiPhp,DiJqueryLogo, DiGit, DiNpm } from 'react-icons/di';
import { SiJavascript,SiTypescript } from 'react-icons/si';

export default function Contact(props) {
    

    return (
        <div className='relative h-auto p-5 bg-[#242526] w-screen mx-auto flex justify-center items-center' id="contact">
			

            <div className="flex flex-col justify-evenly items-center w-4/5 md:w-1/5 md:p-1 md:m-5">
                <h4 className="text-white relative text-white uppercase pb-2 tracking-[0.25rem] md:tracking-[0.5rem] md:text-xl uppercase md:p-2">
                    Contact
                </h4>
                <hr className="h-[2px] w-[25%]  md:h-[2px] md:w-[30%] bg-[#36bbc4] border-0" />
                </div>

			<div className='flex justify-around items-center flex-wrap grid-cols-5 w-2/5 h-60 p-1'>  
                
                
            </div>



	
		</div>
            
    )
}

