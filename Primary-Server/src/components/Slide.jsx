import React from 'react'
import { slides } from '../constants'

const Slide = () => {
  return (
    <div className="relative">
      <div className='w-full relative lg:h-[60vh] md:h-[40vh] h-[60vh]' >
        <div className='absolute w-full' >
            <div className="flex w-full">
                {
                slides.map(( slides, index ) => (
                    <div key={index} className=''  >
                        <img src={slides.img} alt="slide" />
                    </div>
                ))}
            </div>
        </div>
       </div>
    </div>
  )
}

export default Slide
