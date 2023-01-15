import React from 'react'
import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';

import { FaReact,FaHtml5,FaCss3 ,FaPython, FaVuejs, FaJava } from 'react-icons/fa';
import { DiJavascript1, DiDjango, DiBootstrap, DiPhp,DiJqueryLogo, DiGit, DiNpm } from 'react-icons/di';
import { SiJavascript,SiTypescript } from 'react-icons/si';

export default function Contact(props) {
    
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    let handleName = (event)=>{ 
        // setFullName(e.target.value)
        console.log(event.target.value)
    }


    return (
        <div className='relative h-auto p-5 bg-[#242526] w-screen mx-auto flex flex-col justify-center items-center' id="contact">
			

            <div className="flex flex-col justify-start items-center w-4/5 md:w-1/5 md:p-1 md:m-5">
                <h4 className="text-white relative  pb-2 tracking-[0.25rem] md:tracking-[0.5rem] md:text-xl uppercase md:p-2">
                    Contact
                </h4>
                <hr className="h-[2px] w-[25%]  md:h-[2px] md:w-[30%] bg-[#36bbc4] border-0" />
            </div>

			<div className='relative flex flex-col justify-around items-start w-4/5 h-auto mt-5 p-1 px-5 lg:w-3/5'>  
                
                <div className='w-full flex flex-col lg:flex-row lg:space-x-5'>
                    <div className='w-full pb-2 lg:w-1/2'> 
                        <label className='text-white tracking-[0.1rem] pb-1'>Full Name</label>
                        <input className='w-full text-white text-sm rounded py-[0.4rem] px-3 bg-red border-[1px] border-gray-700 outline-none focus:border-[#36bbc4]' 
                                onChange = {handleName}
                                placeholder='Enter your Full Name ...' ></input>
                    </div>
                    <div className='w-full pb-2 lg:w-1/2'> 
                        <label className='text-white tracking-[0.1rem] pb-1'>Email</label>
                        <input className='w-full  text-white text-sm rounded py-[0.4rem] px-3 bg-transparent border-[1px] border-gray-700 outline-none focus:border-[#36bbc4]' placeholder='Enter your Email ...' ></input>
                    </div>
                </div>
                <div className='w-3/5 pb-2 lg:w-1/5'> 
                    <label className='text-white tracking-[0.1rem] pb-1'>Subject</label>
                    <input className='w-full text-white  text-sm rounded py-[0.4rem] px-3 bg-transparent border-[1px] border-gray-700 outline-none focus:border-[#36bbc4]' placeholder='Enter Subject ...' ></input>
                </div>
                <div className='w-full pb-2'> 
                    <label className='text-white tracking-[0.1rem] pb-1'>Message</label>
                    <input className='w-full text-white  text-sm h-[2rem] rounded pt-[1rem] pb-[5rem] px-3 bg-transparent border-[1px] border-gray-700 outline-none focus:border-[#36bbc4]' placeholder='Enter your Message ...' ></input>
                </div>
                
                <div className='relative w-full h-auto pb-2' >
                    <button className='relative text-sm float-right bg-[#36bbc4]/70 py-1 px-6 rounded outline-none mt-2 text-white border-0 hover:bg-white hover:text-[#36bbc4] transition duration-700 ease-out'>Submit</button>
                </div>

            </div>



	
		</div>
            
    )
}

