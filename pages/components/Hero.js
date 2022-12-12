import React from 'react';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';


export default function Hero(props) {
    

    return (
        <div className=' relative h-[90vh] bg-[#242526] w-4/5 mx-auto flex flex-col justify-center items-center' id="home">


            <div className='relative w-[250px] h-[250px] -top-[15%]'>
                <Image alt="" src="/Image.png" layout='fill'/>
            </div>
            <h1 className='relative text-white text-6xl text-900 -top-[10%]' ><Typewriter
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
            <h3 className='relative text-[#36bbc4]  tracking-[.75em] text-xl uppercase -top-[5%]'>Junior Software Developer</h3>
        
        </div>

    )
}

