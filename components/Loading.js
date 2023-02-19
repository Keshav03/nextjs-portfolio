import React from 'react'
import { BounceLoader } from 'react-spinners'

function Loading(props) {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-[#242526]' onClick={()=> props.loading(false) }>


        <BounceLoader size={150} color='#36bbc4'></BounceLoader>


    </div>
  )
}

export default Loading