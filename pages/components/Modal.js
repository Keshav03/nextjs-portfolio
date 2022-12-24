import React from 'react'

export default function Modal(props) {
    

    return (
        <div className='fixed z-20 bg-[#000]/60 top-0 left-0 w-[100vw] h-[100vh] flex flex-col justify-center items-center ' id="modal">

            <div className='w-4/5 h-[60vh] flex flex-col justify-center items-center bg-[#5a5a5a] md:w-2/5 md:h-[50vh]'>
                <h3 className='relative text-[#36bbc4] text-2xl tracking-[.25em] md:tracking-[.75em] md:text-3xl font-bold uppercase text-center '>Disclaimer</h3>

                <p className='relative tracking-[.30em] text-xs md:text-sm md:tracking-[.75em] uppercase top-6 text-center p-6 text-white '>Website is still under development.</p>
            
                <button id='closeBtn' className="relative bg-[#f46d75] text-white md:w-1/5 top-20 py-2 px-10 md:pt-2 md:pb-2 md:pl-2 md:pr-2" 
                
                    onClick={()=>{
                        let modal = document.getElementById("modal")
                        modal.classList.add("hidden")
                        }}>
                    Close
                </button>

            </div>

        
        </div>

    )
}

