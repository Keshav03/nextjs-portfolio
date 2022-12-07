import React from 'react'

export default function Modal(props) {
    

    return (
        <div className='fixed z-20 bg-[#000]/60 top-0 left-0 w-[100vw] h-[100vh] flex flex-col justify-center items-center ' id="modal">

            <div className='flex flex-col justify-center items-center  bg-[#5a5a5a] w-2/5 h-[50vh]'>
                <h3 className='relative text-[#36bbc4]  tracking-[.75em] text-3xl font-bold uppercase text-center'>Disclaimer</h3>

                <p className='relative tracking-[.75em] text-sm uppercase top-6 text-center p-6 text-white '>Website is still under development.</p>
            
                <button id='closeBtn' className="relative bg-[#f46d75] text-white w-1/5 top-10 pt-2 pb-2 pl-2 pr-2" 
                
                    onClick={()=>{
                        console.log("click")
                        let modal = document.getElementById("modal")
                        console.log(modal)
                        modal.classList.add("hidden")
                        }}>
                    Close
                </button>

            </div>

        
        </div>

    )
}

