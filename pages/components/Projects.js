import React from 'react'
import {useState,useEffect} from 'react'
import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';
import Image from 'next/image'

import { app, database } from '../../firebaseConfig';
import { collection, getDocs } from "firebase/firestore";

export default function Projects(props) {

    const [projects, setProjects] = useState([
        {
                    "id": 1,
                    "name": "HighSchool Website",
                    "descriptions" : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
                    "links":"https://mgssnouvellefrance.com/",
                    "github":"",
                    "tags":["Wordpress","HTML","CSS","JavaScript","PHP"],
                    "image":"/project4.jpg"
            },{
                "id": 2,
                "name": "Portfolio",
                "descriptions" : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
                "links":"https://keshavbokhoree.com/",
                "github":"https://github.com/Keshav03/nextjs-portfolio",
                "tags":["HTML","CSS","JavaScript","React Js", "Next Js" , "Tailwind CSS", "Firebase"],
                "image":"/project2.jpg"
        },{
            "id": 3,
            "name": "Video Game Recommendation System",
            "descriptions" : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
            "links":"",
            "github":"https://github.com/Keshav03/QMUL_Final_Year_Project",
            "tags":["HTML","CSS","JavaScript","React Js", "Django" , "Python", "Recommendation Algorithms","Content Based","Collaborative Filtering"],
            "image":"/project3.png"
    }]);
    const dbInstance = collection(database, 'projects');
  
    useEffect(() => {
        const fetchProjects = async () => {
            await getDocs(dbInstance)
                .then((querySnapshot)=>{              
                    const newData = querySnapshot.docs
                        .map((doc) => ({...doc.data(), id:doc.id }));
                    setProjects(newData);                
                }).catch(err => {
                    console.log(err)
                })
        }
        fetchProjects();
    });

    return (
      <div
        className="relative h-auto p-4  bg-[#000]/30 w-screen mx-auto flex flex-col justify-center items-center"
        id="project"
      >
        <div className="flex flex-col justify-evenly items-center w-4/5 md:w-1/5 md:p-1 md:m-5">
          <h4 className="text-white relative text-white uppercase pb-2 tracking-[0.25rem] md:tracking-[0.5rem] md:text-xl uppercase md:p-2">
            Projects
          </h4>
          <hr className="h-[2px] w-[25%]  md:h-[2px] md:w-[30%] bg-[#36bbc4] border-0" />
        </div>

        <div className="relative flex flex-col justify-center w-4/5 h-auto mt-10 md:flex-row md:justify-evenly md:items-evenly md:w-3/5 md:h-[750px] md:p-2 ">
          {projects.map((project) => {
            return (
              <div className="relative bg-[#000]/30 h-[575px] md:h-[80%] w-full mt-6 md:w-1/4 " key={project.id}>

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
                <p className="text-xs p-3 text-[#fff]/70">
                  {project.descriptions}
                </p>

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

