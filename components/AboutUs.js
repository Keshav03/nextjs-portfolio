import React from "react";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";

export default function About(props) {
  return (
    <div className="w-screen bg-[#000]/30 dark:bg-neutral-100">
      <div
        className="relative h-auto p-5 w-screen flex flex-col mx-auto md:justify-between md:items-center md:max-w-7xl"
        id="about"
      >
        <div className="relative flex w-4/5 mx-auto flex-col items-center md:justify-evenly md:items-center md:w-1/5 md:h-15 md:p-1 md:m-6 md:space-y-1">
          <h4 className="relative text-white dark:text-slate-800 uppercase pb-2 tracking-[0.25rem] md:-top-1 md:tracking-[0.5rem] md:text-xl md:uppercase whitespace-nowrap font-montserrat ">
            Who I am
          </h4>
          <hr className="relative bg-[#36bbc4] border-0 w-[25%] h-[3px] md:w-[30%] md:h-[3px] " />
        </div>

        <div className=" flex flex-col justify-center items-center w-4/5 dark:text-slate-800 text-white text-sm mx-auto md:w-4/5 md:h-80 md:m-0 p-2 md:flex-col font-poppins font-thin">
          <p className="relative text-center pt-4 md:-top-6 md:text-white md:tracking-wider md:text-[1em]  ">
            Hello there! I&apos;m Keshav Bokhoree, a passionate and
            results-driven Full Stack Web Developer, with a knack for turning
            innovative ideas into reality. My journey in the world of technology
            began at a very young age which then led me to pursue my tertiary
            studies in Computer Science, and since then, I&apos;ve been on an
            exciting journey to explore, learn, and create new things. I love
            the challenge of spending hours to solve complex problems and
            feeling when you finally found a solution is something-else.
          </p>

          <p className="relative text-center pt-4 md:-top-6 md:text-white md:tracking-wider md:text-[1em] font-montserrat leading-6">
            With a solid foundation in <span className="text-[#36bbc4] font-semibold tracking-tightest cursor-pointer "> React.js , Next.js , Node.js, mongoDB,
            Django, Python, Typescript, Tailwind.css , GraphQL </span> and a lot more , I
            thrive in crafting robust and scalable solutions. I am always
            up-to-date with the latest industry trends and technologies,
            ensuring that my work is at the forefront of innovation.{" "}
          </p>

          <p className="relative text-center pt-4 md:-top-6 md:text-white md:tracking-wider md:text-[1em] ">
            Seeking for full time job position in the IT field to utilized and
            strengthen my skills and expand my knowledge and build on
            experience.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
