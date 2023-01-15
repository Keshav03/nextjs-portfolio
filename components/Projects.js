import React from 'react'
import {useState,useEffect} from 'react'
import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';
import Image from 'next/image'

import { app, database } from '../firebaseConfig';
import { collection, getDocs } from "firebase/firestore";



export default function Projects(props) {


    const [projects, setProjects] = useState([
        {
                    "id": 1,
                    "name": "Formula 1 Wed App (under development)",
                    "descriptions" : [" o	Web-app to present formula one data such as drivers, constructors , race results for any time." , 
                      " o	Achieved with NextJs - React JS framework with the aim to experience with the tools that Next Js provides such as CSR, SSR, SSG, Routing and more. Application data was fetched from a public formula One API.",
                      " o	User Interface styled with  open-source Tailwind CSS framework. " ,
                      " o	Future Work : To expand project to implement a fantasy game like football Premiere League with integrated social functionality. "
                       ],
                    "links":"",
                    "github":"https://github.com/Keshav03/nextjs-formulaOneApp",
                    "tags":["HTML","CSS","JavaScript","React Js","Next Js" , "Tailwinds" , "API"],
                    "image":"/formulaOneApp.png"
            },{
                "id": 2,
                "name": "Portfolio",
                "descriptions" : ["o Tool to showcase my projects as a developer and show off my skills and abilities as well as to provide personal information about myself." , "o Constantly reviewing, redesigning website and try new technologies to improve user experience and hence build up my skills even further."],
                "links":"https://keshavbokhoree.com/",
                "github":"https://github.com/Keshav03/nextjs-portfolio",
                "tags":["HTML","CSS","JavaScript","React Js", "Next Js" , "Tailwind CSS", "Firebase"],
                "image":"/project2.jpg"
        },{
            "id": 3,
            "name": "Video Game Recommendation System",
            "descriptions" : ["o Implemented a Full Stack Application that recommends video games to users using 2 type of recommendation algorithm content based and collaborative filtering" , "o Application implemented using React as frontend & Django as Backend Designed REST API from scratch","o Project achieved by studying and analysing different machine learning algorithms to predict the best possible result by comparing them" , "o User Registration and Login System" ],
            "links":"",
            "github":"https://github.com/Keshav03/QMUL_Final_Year_Project",
            "tags":["HTML","CSS","JavaScript","React Js", "Django" , "Python", "Recommendation Algorithms","Content Based","Collaborative Filtering"],
            "image":"/project3.png"
    }]);
    const dbInstance = collection(database, 'projects');
    // useEffect(() => {
    //     const fetchProjects = async () => {
    //         await getDocs(dbInstance)
    //             .then((querySnapshot)=>{              
    //                 const newData = querySnapshot.docs
    //                     .map((doc) => ({...doc.data(), id:doc.id }));
    //                 // setProjects(newData);                
    //             }).catch(err => {
    //               throw Error("Could Not load data!")
    //                 console.log(err)
    //             })
    //     }
    //     fetchProjects();
    // });

    return (
      <div
        className="relative h-auto p-4  bg-[#000]/30 w-screen mx-auto flex flex-col justify-center items-center "
        id="project"
      >
        <div className="flex flex-col justify-evenly items-center w-4/5 md:w-1/5 md:p-1 md:m-5">
          <h4 className="text-white relative pb-2 tracking-[0.25rem] md:tracking-[0.5rem] md:text-xl uppercase md:p-2">
            Projects
          </h4>
          <hr className="h-[2px] w-[25%]  md:h-[2px] md:w-[30%] bg-[#36bbc4] border-0" />
        </div>
        <div className="relative flex flex-col justify-center w-4/5 h-auto mt-10 md:flex-row md:justify-between md:items-evenly md:w-4/5 md:h-[750px] md:p-2 md:max-w-7xl ">
          {projects.map((project) => {
            return (
              <div className="relative bg-[#000]/30 h-[575px] h-max-auto md:h-[80%] w-full mt-6 md:w-1/4  " key={project.id}>

                <div className="relative w-[100%] h-[150px]">
                    <Image 
                    alt=""
                    src={project.image}
                    layout='fill'
                    />
                </div>
                <h2 className="p-3 text-lg text-white font-medium tracking-[0.15rem]">
                  {project.name}
                </h2>

                <ul>
                  {project.descriptions.map((item)=>{
                    return(
                      <li key= {item.id} className="text-xs p-2  text-[#fff]/70">
                      {item}
                    </li>
                    )
                  })}
                </ul>

                <div className="w-[90%] p-2 flex flex-wrap ">
                  {project.tags.map((tag,index) => {
                    return (
                      <p className="p-1 bg-[#fff]/10 text-[#fff]/70 text-xs rounded m-1" key={index}>
                        {tag}
                      </p>
                    );
                  })}
                </div>

                <div className="absolute bottom-0 flex flex-row-reverse w-full ">
                  {project.links != "" ? (
                    <SocialIcon
                    url={project.links}
                    bgColor="transparent"
                    fgColor="#ffffff"
                    />
                    ) : null}

                  {project.github != "" ? (
                    <SocialIcon
                    url={project.github}
                    bgColor="transparent"
                    fgColor="#ffffff"
                    />
                    ) : null}
                </div>
              </div>
            );
          })}
        </div> 

      </div>
    );
}
