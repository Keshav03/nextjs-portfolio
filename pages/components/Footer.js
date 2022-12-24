import React from 'react'
import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';



export default function Footer(props) {
    

    return (
        <div className=' relative h-auto p-2 md:p-5 bg-[#000]/30 w-screen mx-auto flex flex-col justify-center items-center'>
			
			<div className='flex justify-end self-center p-1'>  
                <SocialIcon url="https://twitter.com/keshav_bokhoree" bgColor="transparent" fgColor="#ffffff"  className='h-4'/>
                <SocialIcon url="https://github.com/keshav03" bgColor="transparent" fgColor="#ffffff"/>
                <SocialIcon url="https://www.linkedin.com/in/keshav-yogeshwar-b-b73187167/" bgColor="transparent" fgColor="#ffffff"/>
                <SocialIcon url="https://www.instagram.com/keshav_bokhoree/" bgColor="transparent" fgColor="#ffffff"/>
            </div>
            <div className='w-4/5 flex justify-evenly self-center uppercase text-xs px-2 py-5 md:p-5 md:justify-between md:w-2/5 text-white tracking-widest p-b-10 '>
                <Link href="/" className='hover:text-[#36bbc4]' >Home</Link>
                <Link href="" className='hover:text-[#36bbc4]'>About</Link>
                <Link href="" className='hover:text-[#36bbc4]'>Projects</Link>
                <Link href="" className='hover:text-[#36bbc4]'>Contact</Link>
            </div>
				

			<hr className='bg-white h-[1px] w-4/5 md:w-3/5 '/>

			<p className='text-white text-xs py-2 md:p-4'>Copyright 2022 © Keshav Bokhoree </p>
			
		</div>
            
    )
}

