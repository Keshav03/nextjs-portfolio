import React from 'react'
import { useState } from 'react'
import {AnimatePresence, motion} from 'framer-motion'

function ToDoListDemo() {
    const [list,setList] = useState(["Lando Norris","Lewis Hamilton", "Charles Leclerc","Carlos Sainz"])
    const [item,setItem] = useState("")

    let addItem = ((e)=>{
        setItem(e.target.value)

    })


  
    let listVariants = {
        hidden:{
            opacity:0,
            x:-100
        },
        visible:{
            opacity:1,
            x:-0,
            transition:{
                type:"spring",
                staggerChildren: 0.2, delayChildren: 0.5
            }
        }
    }

    let listItemVariants = {
        hidden:{
            opacity:0,
            x:-100,
            y:-25
        },
        visible:{
            opacity:1,
            x:0,
            y:0,
        }
    }




    return (
        <div className='w-full h-[100vh] flex flex-col justify-center items-center ' >

            <p>{item}</p>
            <AnimatePresence>
                <motion.ul
                    className='bg-orange-500 px-5 py-10 w-[75%]'
                    variants={listVariants}
                    initial="hidden"
                    animate="visible" 
                >
                {list.map((list,index)=>{
                    return <>
                            <motion.li
                                className='p-5' 
                                variants={listItemVariants}
                                key={index}
                            >
                                {list}
                            </motion.li>
                            <hr className='w-[100%]'></hr>
                        </>
                })
                }
                </motion.ul>
            </AnimatePresence>


            <input className="bg-red-500" name="list" onChange={(e)=>{setItem(e.target.value)}}/>
            <button onSubmit={()=>{
                list.push(item)
                setItem("")
                }}>SUBMIT
            </button>
            
        </div>

    )
        
}

export default ToDoListDemo