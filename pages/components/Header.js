import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { SocialIcon } from 'react-social-icons';

// import styles from '../../styles/Header.modules.css'

export default function Header(props) {

    let animate = ()=>{
        console.log("click");

        let firstBar = document.getElementById("firstBar")
        let secondBar = document.getElementById("secondBar")
        let thirdBar = document.getElementById("thirdBar")


        let mobileMenu = document.getElementById("mobileMenu")
        mobileMenu.classList.toggle("hidden")
        mobileMenu.classList.toggle("menu")

    }


    
    return (
    <div className='fixed bg-[#242526] px-10 py-1 md:py-0 w-screen sticky top-0 z-20'>

        <div className="absolute flex flex-col justify-center self-center top-0 left-0 z-15 w-full h-[100vh] hidden bg-gray-600 md:hidden lg:hidden" id="mobileMenu">

            <div className='flex flex-col justify-center justify-evenly self-center text-lg w-2/3 text-white text-center tracking-[.2em]'>
                <Link href="/#home" className="text-white hover:text-[#36bbc4] uppercase" px-3 py-2 >Home</Link>
                <Link href="/#about" className="text-white hover:text-[#36bbc4] uppercase px-3 py-2">About</Link>
                <Link href="/#project" className="text-white hover:text-[#36bbc4] uppercase  px-3 py-2">Projects</Link>
                <Link href="/#contact" className="text-white hover:text-[#36bbc4] uppercase px-3 py-2">Contact</Link>
            </div>


            <div className='relative top-20 md:hidden justify-end self-center '>  
                <SocialIcon url="https://twitter.com/keshav_bokhoree" bgColor="transparent" fgColor="#ffffff"  className='h-4'/>
                <SocialIcon url="https://github.com/keshav03" bgColor="transparent" fgColor="#ffffff"/>
                <SocialIcon url="https://www.linkedin.com/in/keshav-yogeshwar-b-b73187167/" bgColor="transparent" fgColor="#ffffff"/>
                <SocialIcon url="https://www.instagram.com/keshav_bokhoree/" bgColor="transparent" fgColor="#ffffff"/>
            </div>


        </div>

        <div className="relative flex justify-between items-center h-[10vh] w-full mx-auto md:w-4/5 md:p-10 md:justify-evenly md:items-baseline">

            <div className="relative w-[60px] h-[60px]   md:w-[75px] md:h-[75px] md:-top-6" >   
                <Image alt="" src="/logo.png" layout='fill'/>
            </div>

            <div className='hidden flex justify-evenly self-center text-sm md:hidden md:justify-between lg:flex w-1/3 text-white font-base tracking-[.2em] p-b-10 '>
                <Link href="/#home" className="hover:text-[#36bbc4] border-b-4 border-[#36bbc4] uppercase" >Home</Link>
                <Link href="/#about" className="hover:text-[#36bbc4] uppercase">About</Link>
                <Link href="/#project" className="hover:text-[#36bbc4] uppercase ">Projects</Link>
                <Link href="/#contact" className="hover:text-[#36bbc4] uppercase">Contact</Link>
            </div>


            <div className='hidden md:flex justify-end self-center '>  
                <SocialIcon url="https://twitter.com/keshav_bokhoree" bgColor="transparent" fgColor="#ffffff"  className='h-4'/>
                <SocialIcon url="https://github.com/keshav03" bgColor="transparent" fgColor="#ffffff"/>
                <SocialIcon url="https://www.linkedin.com/in/keshav-yogeshwar-b-b73187167/" bgColor="transparent" fgColor="#ffffff"/>
                <SocialIcon url="https://www.instagram.com/keshav_bokhoree/" bgColor="transparent" fgColor="#ffffff"/>
            </div>

            <div className='relative w-[12%] h-[40%] md:hidden' onClick={animate} >
                <div className='absolute top-0 w-[70%] h-[10%] bg-white' id="firstBar"></div>
                <div className='absolute top-[50%] -translate-y-[50%] w-[100%] h-[10%] bg-white' id="secondBar"></div>
                <div className='absolute bottom-0 w-[50%] h-[10%] bg-white' id="thirdBar"></div>
            </div>

            
        </div>     

              

        </div>

    )
}

