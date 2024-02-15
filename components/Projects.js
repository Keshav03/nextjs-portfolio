import React from "react";
import { useState, useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import Image from "next/image";
import Title from "./Title";
import { app, database } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export default function Projects(props) {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Formula 1 Wed App (under development)",
      descriptions: [
        " o	Web-app to present formula one data such as drivers, constructors , race results for any time.",
        " o	Achieved with NextJs - React JS framework with the aim to experience with the tools that Next Js provides such as CSR, SSR, SSG, Routing and more. Application data was fetched from a public formula One API.",
        " o	User Interface styled with  open-source Tailwind CSS framework. ",
        " o	Future Work : To expand project to implement a fantasy game like football Premiere League with integrated social functionality. ",
      ],
      links: "",
      github: "https://github.com/Keshav03/nextjs-formulaOneApp",
      tags: [
        "HTML",
        "CSS",
        "JavaScript",
        "React Js",
        "Next Js",
        "Tailwinds",
        "API",
      ],
      image: "/mockuper.png",
    },
    {
      id: 2,
      name: "Portfolio",
      descriptions: [
        "o Tool to showcase my projects as a developer and show off my skills and abilities as well as to provide personal information about myself.",
        "o Constantly reviewing, redesigning website and try new technologies to improve user experience and hence build up my skills even further.",
        "o Experiencing and making use of Framer Motion to animate part of the projects",
      ],
      links: "https://keshavbokhoree.com/",
      github: "https://github.com/Keshav03/nextjs-portfolio",
      tags: [
        "HTML",
        "CSS",
        "JavaScript",
        "React Js",
        "Next Js",
        "Tailwind CSS",
        "Firebase",
        "Framer Motion",
      ],
      image: "/mockuper3.png",
    },
    {
      id: 3,
      name: "Video Game Recommendation System",
      descriptions: [
        "o Implemented a Full Stack Application that recommends video games to users using 2 type of recommendation algorithm content based and collaborative filtering",
        "o Application implemented using React as frontend & Django as Backend Designed REST API from scratch",
        "o Project achieved by studying and analysing different machine learning algorithms to predict the best possible result by comparing them",
        "o User Registration and Login System",
        "o CRUD operation",
      ],
      links: "",
      github: "https://github.com/Keshav03/QMUL_Final_Year_Project",
      tags: [
        "HTML",
        "CSS",
        "JavaScript",
        "React Js",
        "Django",
        "Python",
        "Recommendation Algorithms",
        "Content Based",
        "Collaborative Filtering",
      ],
      image: "/mockuper1.png",
    },
  ]);
  const dbInstance = collection(database, "projects");
  useEffect(() => {
    const fetchProjects = async () => {
      // await getDocs(dbInstance)
      //     .then((querySnapshot)=>{
      //         const newData = querySnapshot.docs
      //             .map((doc) => ({...doc.data(), id:doc.id }));
      //         // setProjects(newData);
      //     }).catch(err => {
      //       throw Error("Could Not load data!")
      //         console.log(err)
      //     })
    };
    fetchProjects();
  });

  return (
    <div className="relative min-h-[60vh] w-screen bg-[#000]/30 py-10" id="project">
      <div className="relative flex w-4/5  h-auto mx-auto flex-col items-center md:justify-evenly md:items-center md:w-1/5 md:h-15 md:p-1 md:m-6 md:space-y-1 left-[50%] -translate-x-[50%]">
        
        {/* <h4 className="absolute text-white uppercase top-96 tracking-[0.25rem] md:-top-1 md:tracking-[0.5rem] md:text-xl md:uppercase whitespace-nowrap font-montserrat ">
          Projects
        </h4> */}
        <h4 className="relative text-white opacity-40 uppercase pb-2 tracking-[0.25rem] md:-top-1 md:tracking-[0.5rem] md:text-4xl font-bold whitespace-nowrap font-montserrat ">
        {"<"} Projects{" />"}
        </h4>

        {/* <Title title="Projects" /> */}
        <hr className="relative bg-[#36bbc4] border-0 w-[25%] h-[3px] md:w-[30%] md:h-[3px] " />
      </div>

      <div className="relative w-[80vw] h-full mt-10 mx-auto scroll-smooth overflow-scroll scrollbar-track-gray-600 scrollbar-thumb-[#36bbc4]/60 scrollbar-thin">
        <div className="w-fit min-h-[90] mx-auto flex space-x-6 p-0  ">
          {projects.map((project, i) => {
            return (
              <div
                className=" w-[60rem] bg-zinc-800 flex flex-row px-6 rounded-lg"
                key={i}
              >
                <div className="w-[60%] py-10 px-10 ">
                  <h3 className="relative text-2xl font-montserrat font-semibold tracking-widest text-neutral-200">
                    {project.name}
                  </h3>
                  <p className="relative text-sm py-6 text-neutral-400 tracking-tightest ">
                    {project.descriptions}
                  </p>

                  <div className="relative top-2 w-[90%] top flex flex-wrap ">
                    {project.tags.map((tag,i)=>
                      <p 
                        key={i}
                      className=" p-1 border-[2px] border-[#fff]/10 text-[#fff]/70 text-xs rounded m-1">
                     {tag}
                    </p>                      
                    )}
                    
                  </div>

                  <div className="flex flex-row">
                    <button>View Code</button>
                    <button>Visit Site</button>
                  </div>

                </div>
                <div className="relative w-[40%] ">
                  <div className="absolute w-full h-[70%] top-[50%] left-[50%]-translate-x-[50%] -translate-y-[50%] rounded-lg">
                    <Image
                      src={project.image}
                      alt=""
                      layout={"fill"}
                      objectFit="cover"
                    ></Image>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
