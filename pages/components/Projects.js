import React from 'react'
import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';

export default function Projects(props) {
    

    return (
        <div className='relative h-auto p-4  bg-[#000]/30 w-screen mx-auto flex flex-col justify-center items-center'>
			
            <div className='flex flex-col justify-evenly items-center w-1/5 p-1 m-5'>
                <h4 className= 'text-white tracking-[0.5rem] text-xl uppercase p-2'>Projects</h4>
                <hr className='h-[2px] w-[30%] bg-[#36bbc4] outline-0'/>
            </div>


			<div className='flex justify-evenly items-evenly w-3/5 h-[600px] p-2 mt-10'>  
                
                <div className="h-[80%] w-1/4 bg-[#000]/30 overflow-hidden" >
                    <img src="/project4.jpg" className="w-[100%] h-[150px]"></img>
                    <h2 className="p-3 text-lg text-white font-medium tracking-[0.15rem]">High-School Website</h2>
                    <p className="text-xs p-3 text-[#fff]/70">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>

                    <div className="w-[90%] p-2 flex flex-wrap ">
                        <p className="p-1 bg-[#fff]/10 text-[#fff]/70 text-xs rounded m-1">Wordpress</p>    
                        <p className="p-1 bg-[#fff]/10 text-[#fff]/70 text-xs rounded m-1">HTML</p>    
                        <p className="p-1 bg-[#fff]/10 text-[#fff]/70 text-xs rounded m-1">CSS</p>    
                        <p className="p-1 bg-[#fff]/10 text-[#fff]/70 text-xs rounded m-1">Javascript</p>    
                        <p className="p-1 bg-[#fff]/10 text-[#fff]/70 text-xs rounded m-1">PHP</p>    
                    </div> 



                    <div className="flex flex-row-reverse w-100 p-2 -mt-4">
                        <SocialIcon url="https://mgssnouvellefrance.com/" bgColor="transparent" fgColor="#ffffff"/>
                    </div>


                </div>

                <div className="h-[80%] w-1/4 bg-[#000]/30" >
                    <img src="/project2.jpg" className="w-[100%] h-[150px]"></img>
                    <h2 className="p-3 text-lg text-white font-medium tracking-[0.15rem]">Portfolio</h2>

                    <p className="text-xs p-3 text-[#fff]/70">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>

                    <div className="flex flex-row-reverse w-100">
                        <SocialIcon url="https://github.com/Keshav03/nextjs-portfolio" target="_blank" bgColor="transparent" fgColor="#ffffff"/>
                    </div>
                </div>

                <div className="h-[80%] w-1/4 bg-[#000]/30" >
                    <img src="/project3.png" className="w-[100%] h-[150px]"></img>
                    <h2 className="p-3 text-sm text-white font-medium tracking-[0.15rem]">Video Game Recommendation System </h2>
                    <p className="text-xs p-3 text-[#fff]/70">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>

                    <div className="flex flex-row-reverse w-100">
                        <SocialIcon url="https://github.com/Keshav03/QMUL_Final_Year_Project" target="_blank" bgColor="transparent" fgColor="#ffffff"/>
                    </div>

                </div>
        
            </div>


            
	
		</div>
            
    )
}

