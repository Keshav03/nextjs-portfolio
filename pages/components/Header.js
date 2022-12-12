import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { SocialIcon } from 'react-social-icons';

export default function Header(props) {
    
    return (
    <div className='absolute bg-[#242526] w-screen sticky top-0 z-20'>

        <div className="flex justify-evenly h-[10vh] w-4/5 mx-auto p-10  sm:justify-between">

            <div>   
                <Image alt="" src="/logo.png" width="100" height="100" className="w-[7vh] relative -top-6" />
            </div>

            <div className='hidden flex justify-evenly self-center text-sm md:hidden md:justify-between lg:flex w-1/3 text-white font-base tracking-[.2em] p-b-10 '>
                <Link href="/#home" className="hover:text-[#36bbc4] border-b-4 border-[#36bbc4] uppercase" >Home</Link>
                <Link href="/#about" className="hover:text-[#36bbc4] uppercase">About</Link>
                <Link href="/#project" className="hover:text-[#36bbc4] uppercase ">Projects</Link>
                <Link href="/#contact" className="hover:text-[#36bbc4] uppercase">Contact</Link>
            </div>


            <div className='flex justify-end self-center '>  
                <SocialIcon url="https://twitter.com/keshav_bokhoree" bgColor="transparent" fgColor="#ffffff"  className='h-4'/>
                <SocialIcon url="https://github.com/keshav03" bgColor="transparent" fgColor="#ffffff"/>
                <SocialIcon url="https://www.linkedin.com/in/keshav-yogeshwar-b-b73187167/" bgColor="transparent" fgColor="#ffffff"/>
                <SocialIcon url="https://www.instagram.com/keshav_bokhoree/" bgColor="transparent" fgColor="#ffffff"/>
            </div>

        </div>            

        </div>

    )
}

