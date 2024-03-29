import React from "react";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";

import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

import { motion } from "framer-motion";

export default function Contact(props) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = (e) => {
    if (fullName != "" && email != "" && subject != "" && message != "") {
      alert("Email sent.");
    } else {
      alert("Make sure all input field are filled!");
    }
  };

  return (
    <div
      className="relative h-auto p-5 bg-[#242526] w-screen mx-auto flex flex-col justify-center items-center pb-14"
      id="contact"
    >
      <div className="flex flex-col justify-start items-center w-4/5 md:w-1/3 md:p-1 md:m-5">
        <h4 className=" relative text-white pb-2 tracking-[0.25rem] md:tracking-[0.5rem] md:text-xl uppercase md:p-2">
          Contact
        </h4>
        <hr className="h-[2px] w-[25%]  md:h-[2px] md:w-[30%] bg-[#36bbc4] border-0" />
        <p className="relative text-neutral-300 text-base text-center w-full top-6 pb-6 tracking-widest font-poppins font-light leading-7">
          I am currently open to new opportunities and collaborations, If you
          have a passion for technology or fancy to start a new project.<br></br><span className="font-bold text-blue-500 text-xl">Lets
          Connect!</span> 
        </p>
      </div>

      <div className="relative flex flex-col justify-around items-start w-4/5 h-auto mt-5 p-10 lg:w-3/5 border-dashed border-2 border-neutral-600 ">
        <div className="w-full flex flex-col lg:flex-row lg:space-x-5">
          <div className="w-full pb-2 lg:w-1/2">
            <label className="text-white tracking-[0.1rem] pb-1">
              Your Name {fullName}
            </label>
            <input
              className="w-full text-[#36bbc4] text-sm py-[0.4rem] bg-transparent border-b-[1px] border-gray-700 outline-none focus:border-[#36bbc4]"
              placeholder="Enter your Full Name ..."
              onChange={(e) => setFullName(e.target.value)}
            ></input>
          </div>
          <div className="w-full pb-2 lg:w-1/2">
            <label className="text-white tracking-[0.1rem] pb-1">Email</label>
            <input
              className="w-full  text-white text-sm  py-[0.4rem] bg-transparent border-b-[1px] border-gray-700 outline-none focus:border-[#36bbc4]"
              placeholder="Enter your Email ..."
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="w-3/5 pb-2 lg:w-2/5">
          <label className="text-white tracking-[0.1rem] pb-1">Subject</label>
          <input
            className="w-full text-white  text-sm  py-[0.4rem] bg-transparent border-b-[1px] border-gray-700 outline-none focus:border-[#36bbc4]"
            placeholder="Enter Subject ..."
            onChange={(e) => setSubject(e.target.value)}
          ></input>
        </div>
        <div className="w-full pb-2">
          <label className="text-white tracking-[0.1rem] pb-1">
            Message {message}
          </label>
          <input
            className="w-full text-white  text-sm h-[2rem] pt-[1rem] pb-[5rem] bg-transparent border-b-[1px] border-gray-700 outline-none focus:border-[#36bbc4]"
            placeholder="Enter your Message ..."
            onChange={(e) => setMessage(e.target.value)}
          ></input>
        </div>

        <div className="relative w-full h-auto pb-2">
          <button
            className="relative flex justify-center items-center text-sm float-right bg-[#36bbc4]/70 py-2 px-5 rounded uppercase outline-none mt-2 text-white border-0 hover:bg-white hover:text-[#36bbc4] transition duration-700 ease-out"
            onSubmit={handleSubmit}
          >
            Send Message
            <AiOutlineArrowRight
              size={35}
              className="pl-3"
            ></AiOutlineArrowRight>
          </button>
        </div>
      </div>
    </div>
  );
}
