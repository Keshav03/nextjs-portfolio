import React, { useEffect, useRef } from "react";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";

import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaPython,
  FaVuejs,
  FaJava,
} from "react-icons/fa";
import {
  DiJavascript1,
  DiDjango,
  DiBootstrap,
  DiPhp,
  DiJqueryLogo,
  DiGit,
  DiNpm,
} from "react-icons/di";
import { SiJavascript, SiTypescript } from "react-icons/si";

import { easeIn, easeInOut, motion, useScroll } from "framer-motion";

export default function Skills(props) {
  return (
    <div className="relative h-auto p-5 w-screen flex flex-col mx-auto md:justify-between md:items-center md:max-w-7xl pb-10 md:pb-12">
      <div className="relativ flex w-4/5 mx-auto flex-col items-center md:justify-evenly md:items-center md:w-1/5 md:h-15 md:p-1 md:m-6 md:space-y-1">
        <h4 className="relative text-white uppercase pb-2 tracking-[0.25rem] md:-top-2  md:tracking-[0.5rem] md:text-xl md:uppercase">
          Skills
        </h4>
        <hr className="relative bg-[#36bbc4] border-0 w-[25%] h-[3px] md:w-[30%] md:h-[3px] " />
      </div>

      <motion.div className="relative  w-[80vw] mx-auto mt-6 overflow-hidden max-h-60 md:mt-0 md:w-[70vw]">
        {/* Left gradient div */}
        <div className="w-14 md:w-40 h-full  absolute top-0 left-0 z-20 bg-gradient-to-r from-[#242526]"></div>

        <div className="w-fit h-full top-0 animate-scroll flex space-x-6 whitespace-nowrap p-0 tracking-widest text-sm md:text-lg font-light text-blue-500 ">
        <div>
            <FaReact className="relative text-[#fff]/60 w-14  h-auto md:w-32   hover:text-[#36bbc4] cursor-pointer" />
            <p className="text-white text-center ">React</p>
          </div>
          <div>
            <FaHtml5 className="relative text-[#fff]/60 w-14  h-auto md:w-32  hover:text-[#36bbc4] cursor-pointer" />
            <p className="text-white text-center ">HTML</p>
          </div>
          <div>
            <FaCss3 className="text-[#fff]/60 w-14  h-auto md:w-32  hover:text-[#36bbc4] cursor-pointer" />
            <p className="text-white text-center ">CSS</p>
          </div>
          <div>
            <FaPython className="text-[#fff]/60 w-14  h-auto md:w-32  hover:text-[#36bbc4] cursor-pointer" />
            <p className="text-white text-center ">Python</p>
          </div>
          <div>
            <FaJava className="text-[#fff]/60 w-14  h-auto md:w-32  hover:text-[#36bbc4] cursor-pointer" />
            <p className="text-white text-center ">Java</p>
          </div>
          <div>
            <SiJavascript className="text-[#fff]/60 w-14  h-auto md:w-32  hover:text-[#36bbc4] cursor-pointer" />
            <p className="text-white text-center ">JavaScript</p>
          </div>
          <div>
          <DiDjango className="text-[#fff]/60 w-14  h-auto md:w-32  hover:text-[#36bbc4] cursor-pointer" />
          <p className="text-white text-center ">Django</p>
          </div>
          <div>
            <DiBootstrap className="text-[#fff]/60 w-14  h-auto md:w-32  hover:text-[#36bbc4] cursor-pointer" />
            <p className="text-white text-center ">Bootstrap</p>
          </div>
          <div>
            <DiPhp className="text-[#fff]/60 w-14  h-auto md:w-32 hover:text-[#36bbc4] cursor-pointer" />
            <p className="text-white text-center ">PHP</p>
          </div>
          <div>
            <DiJqueryLogo className="text-[#fff]/60 w-14  h-auto md:w-32  hover:text-[#36bbc4] cursor-pointer" />
            <p className="text-white text-center ">JQuery</p>
          </div>
          <div>
            <DiGit className="text-[#fff]/60 w-14  h-auto md:w-32  hover:text-[#36bbc4] cursor-pointer" />
            <p className="text-white text-center ">GIT</p>
          </div>
          <div>
            <DiNpm className="text-[#fff]/60 w-14  h-auto md:w-32  hover:text-[#36bbc4] cursor-pointer" />
            <p className="text-white text-center ">NPM</p>
          </div>

          <div>
            <FaReact className="relative text-[#fff]/60 w-14  h-auto md:w-32   hover:text-[#36bbc4] cursor-pointer" />
            <p className="text-white text-center ">React</p>
          </div>
          <div>
            <FaHtml5 className="relative text-[#fff]/60 w-14  h-auto md:w-32  hover:text-[#36bbc4] cursor-pointer" />
            <p className="text-white text-center ">HTML</p>
          </div>
          <div>
            <FaCss3 className="text-[#fff]/60 w-14  h-auto md:w-32  hover:text-[#36bbc4] cursor-pointer" />
            <p className="text-white text-center ">CSS</p>
          </div>
          <div>
            <FaPython className="text-[#fff]/60 w-14  h-auto md:w-32  hover:text-[#36bbc4] cursor-pointer" />
            <p className="text-white text-center ">Python</p>
          </div>
          <div>
            <FaJava className="text-[#fff]/60 w-14  h-auto md:w-32  hover:text-[#36bbc4] cursor-pointer" />
            <p className="text-white text-center ">Java</p>
          </div>
          <div>
            <SiJavascript className="text-[#fff]/60 w-14  h-auto md:w-32  hover:text-[#36bbc4] cursor-pointer" />
            <p className="text-white text-center ">JavaScript</p>
          </div>
          <div>

          <DiDjango className="text-[#fff]/60 w-14  h-auto md:w-32  hover:text-[#36bbc4] cursor-pointer" />
          <p className="text-white text-center ">Django</p>
          </div>

          <div>
            <DiBootstrap className="text-[#fff]/60 w-14  h-auto md:w-32  hover:text-[#36bbc4] cursor-pointer" />
            <p className="text-white text-center ">Bootstrap</p>
          </div>
          <div>
            <DiPhp className="text-[#fff]/60 w-14  h-auto md:w-32 hover:text-[#36bbc4] cursor-pointer" />
            <p className="text-white text-center ">PHP</p>
          </div>
          <div>
            <DiJqueryLogo className="text-[#fff]/60 w-14  h-auto md:w-32  hover:text-[#36bbc4] cursor-pointer" />
            <p className="text-white text-center ">JQuery</p>
          </div>
          <div>
            <DiGit className="text-[#fff]/60 w-14  h-auto md:w-32  hover:text-[#36bbc4] cursor-pointer" />
            <p className="text-white text-center ">GIT</p>
          </div>
          <div>
            <DiNpm className="text-[#fff]/60 w-14  h-auto md:w-32  hover:text-[#36bbc4] cursor-pointer" />
            <p className="text-white text-center ">NPM</p>
          </div>
        </div>

        {/* Right gradient div */}
        <div className="w-14 md:w-40 h-full absolute top-0 right-0 z-20 bg-gradient-to-l from-[#242526]"></div>
      </motion.div>
    </div>
  );
}
