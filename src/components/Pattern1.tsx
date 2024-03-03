import React from 'react'
import pattern1 from '../assets/pattern-curved-line-1.svg';

const Pattern1 = () => {
  return (
    <div className="flex justify-end items-center -mb-10 
      md:justify-center md:-mb-24 md:z-10 md:mt-5
      lg:-mb-36 lg:-ml-44
      ">
        <img src={pattern1} alt="pattern1" className='w-[50%] pr-10 md:w-[40%] lg:w-[30%]' />
      </div>
  )
}

export default Pattern1