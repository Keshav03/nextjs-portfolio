import React from 'react'
import Typewriter from 'typewriter-effect';


export default function Hero(props) {
    

    return (
        <div className=' relative h-[90vh] bg-[#242526] w-4/5 mx-auto flex flex-col justify-center items-center' id="home">

            {/* <div className='absolute top-[17%] l-50 w-[50%] h-[50%] flex flex-col justify-evenly diagonal'>   
                <div className=' w-[100%] h-[1%] bg-[#D3D3D3]/10 -rotate-12'  > </div>
                <div className='w-[100%] h-[1%] bg-[#D3D3D3]/10 -rotate-12' > </div>
                <div className='w-[100%] h-[1%] bg-[#D3D3D3]/10 -rotate-12' > </div>
                <div className='w-[100%] h-[1%] bg-[#D3D3D3]/10 -rotate-12' > </div>
                <div className='w-[100%] h-[1%] bg-[#D3D3D3]/10 -rotate-12' > </div>
                <div className='w-[100%] h-[1%] bg-[#D3D3D3]/10 -rotate-12' > </div>
                <div className='w-[100%] h-[1%] bg-[#D3D3D3]/10 -rotate-12' > </div>
                <div className='w-[100%] h-[1%] bg-[#D3D3D3]/10 -rotate-12' > </div>
                <div className='w-[100%] h-[1%] bg-[#D3D3D3]/10 -rotate-12' > </div>
                <div className='w-[100%] h-[1%] bg-[#D3D3D3]/10 -rotate-12' > </div>
 
            </div> */}

            <img src="/Image.png" className='w-[200px] relative -top-[15%]'></img>
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

