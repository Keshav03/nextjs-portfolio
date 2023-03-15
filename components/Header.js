import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { SocialIcon } from 'react-social-icons';

// import styles from '../../styles/Header.modules.css'

import { AnimatePresence, motion,useCycle } from 'framer-motion'

export default function Header(props) {

    let animate1 = ()=>{
        let firstBar = document.getElementById("firstBar")
        let secondBar = document.getElementById("secondBar")
        let thirdBar = document.getElementById("thirdBar")
        let mobileMenu = document.getElementById("mobileMenu")
        mobileMenu.classList.toggle("hidden")
        mobileMenu.classList.toggle("menu")
    }

    let [animate,toggleAnimation] = useCycle("close","open")
    

    let mobileMenuVariants = {
        open:{
            opacity:1,
            transition:{duration:0.4,delayChildren:0.5}
        },
        close:{
            opacity:0,
            transition:{duration:0.2,delay:0.5},
            zIndex:0
        }
    }

    let hamMenuVariants = {
        open:{
            scale:1.1,
        },
        close:{
            scale:0.9,
        }
    }

    let navVariant = {
        open:{
            transition:{
                delayChildren:0.1,
                staggerChildren: 0.2,
            }
        },
        close:{
            transition:{
                delayChildren:0.1,
                staggerChildren: 0.1,
                when:"afterChildren" 
            }
        }       
    }

    let linksVariants = {
        open:{
            x:0,
            transition:{
                type:"spring",
                stiffness: 100,    
            }
        },
        close:{
            x:-400,
            transition:{
                type:"spring",
                stiffness: 100,    
            }
        }

    }


    let socialVariants = {
        open:{
            x:0,
            opacity:1,
            transition:{
                type:"spring",
                stiffness:100,
                delayChildren:0.1,
                staggerChildren:0.2
            }
        },
        close:{
            x:-400,
            opacity:0

        }
    }

    let firstBar = {
        open:{
            rotate:45,
            translateY:15,
            translateX:10,
            transition:{
                type:"ease",
                duration:0.5
            }

        },
        close:{
            x:0,
            rotateX:0,
        }

    } 

    let secondBar = {
        open:{
            x:-100,
            opacity:0,
        },
        close:{
            x:0,
            rotateX:0,
        }

    } 


    let thirdBar = {
        open:{
            rotate:-45,
            translateY:-17,
            translateX:10,
            transition:{
                type:"ease",
                duration:0.5
            }

        },
        close:{
            x:0,
            rotateX:0,
        }

    } 

    return (
    <motion.div className='fixed bg-[#242526]/90 px-10 py-1 md:py-0 w-screen sticky top-0 z-20'>

        <motion.div className="absolute flex flex-col justify-center self-center top-0 left-0 z-15 w-full h-[100vh] md:hidden lg:hidden">
            <motion.div onClick={toggleAnimation} className='absolute z-20 right-[10vw] top-[4vh] w-[10%] h-[4vh] md:hidden cursor-pointer'
                variants={hamMenuVariants}
                animate={animate}
                // intial="close"
            >
                <motion.div className='absolute top-0 w-[70%] h-[7%] bg-white' id="firstBar"
                            variants={firstBar}
                ></motion.div>
                <motion.div className='absolute top-[50%] -translate-y-[50%] w-[100%] h-[7%] bg-white' id="secondBar"
                            variants={secondBar}
                ></motion.div>
                <motion.div className='absolute bottom-0 w-[70%] h-[7%] bg-white' id="thirdBar"
                            variants={thirdBar}
                ></motion.div>
            </motion.div>

            <motion.div
                className='opacity-0 flex flex-col justify-center self-center bg-[#353935] w-[100%] h-[100%] '
                variants={mobileMenuVariants} 
                >

                <motion.div 
                    className='flex flex-col justify-center justify-evenly self-center text-lg w-2/3 text-white text-center tracking-[.4em] uppercase '
                    variants={navVariant}
                    > 
                    <ul className='list-none '>
                        <motion.li className='px-3 py-3 hover:text-[#36bbc4] hover:text-[1.3em]' variants={linksVariants}><Link href="/#home" >Home</Link></motion.li>
                        <motion.li className='px-3 py-3 hover:text-[#36bbc4] hover:text-[1.3em]' variants={linksVariants}><Link href="/#about" >About</Link></motion.li>
                        <motion.li className='px-3 py-3 hover:text-[#36bbc4] hover:text-[1.3em]' variants={linksVariants}><Link href="/#project" >Projects</Link></motion.li>
                        <motion.li className='px-3 py-3 hover:text-[#36bbc4] hover:text-[1.3em]' variants={linksVariants}><Link href="/#contact" >Contact</Link></motion.li>
                    </ul>
                </motion.div>

                <motion.div 
                    className='relative top-20 md:hidden justify-end self-center'
                    variants={socialVariants}
                >
                        <SocialIcon url="https://twitter.com/keshav_bokhoree" bgColor="transparent" fgColor="#ffffff"  className='h-4'/>
                        <SocialIcon url="https://github.com/keshav03" bgColor="transparent" fgColor="#ffffff"/>
                        <SocialIcon url="https://www.linkedin.com/in/keshav-yogeshwar-b-b73187167/" bgColor="transparent" fgColor="#ffffff"/>
                        <SocialIcon url="https://www.instagram.com/keshav_bokhoree/" bgColor="transparent" fgColor="#ffffff"/>
                </motion.div>

            </motion.div>

        </motion.div>







        <div className="relative flex justify-between items-center h-[10vh] w-full mx-auto md:w-full md:max-w-7xl md:p-10 md:justify-between md:items-baseline ">
            <div className="relative w-[60px] h-[60px]   md:w-[75px] md:h-[75px] md:-top-6" >   
                <Image alt="" src="/logo.png" layout='fill'/>
            </div>
            <div className='hidden flex justify-evenly self-center text-sm md:hidden md:justify-between lg:flex w-1/3 text-white font-base tracking-[.2em] p-b-10 '>
                <Link href="/#home" className="hover:text-[#36bbc4] border-b-4 border-[#36bbc4] uppercase" >Home</Link>
                <Link href="/#about" className="hover:text-[#36bbc4] uppercase">About</Link>
                <Link href="/#project" className="hover:text-[#36bbc4] uppercase ">Projects</Link>
                <Link href="/#contact" className="hover:text-[#36bbc4] uppercase">Contact</Link>
            </div>
            <div className='hidden md:flex justify-end self-center md:w-'>  
                <SocialIcon url="https://twitter.com/keshav_bokhoree" bgColor="transparent" fgColor="#ffffff"  className='h-4'/>
                <SocialIcon url="https://github.com/keshav03" bgColor="transparent" fgColor="#ffffff"/>
                <SocialIcon url="https://www.linkedin.com/in/keshav-yogeshwar-b-b73187167/" bgColor="transparent" fgColor="#ffffff"/>
                <SocialIcon url="https://www.instagram.com/keshav_bokhoree/" bgColor="transparent" fgColor="#ffffff"/>
            </div>
    
        </div>     

              

        </motion.div>

    )
}

