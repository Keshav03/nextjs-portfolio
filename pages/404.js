import React, { use, useEffect, useState } from 'react'
import Image from 'next/image';

import Link from 'next/link'
import {useRouter} from 'next/router';

function Custom404Page() {

    let [path,setPath] = useState("");
    const router = useRouter()

    useEffect(() => {
         setPath(router.asPath)  
    }, [])
    
    

  return (
    <div className=' relative w-screen h-screen flex flex-col justify-center items-center  bg-gray-800 '>
        
        <div className=' relative w-[250px] h-[250px]'>
            <Image src="/404.png" alt="" layout="fill"></Image>
        </div>


        <h2 className='text-4xl bolder tracking-widest uppercase text-white'> 404 - <span className="text-lg ">Page not found</span> </h2>
        <p className="text-white mt-10 text-center text-base max-w-[25%]" > The URL <span className="text-gray-500">{path}</span> you have requested was not found on the server.</p>
        
        <Link href="/" className="relative mt-5 text-white font-semibold tracking-widest hover:text-white hover:bg-gray-500 uppercase px-10 py-2 bg-[#36bbc4] rounded"  >Home</Link>

    </div>
  )
}

export default Custom404Page