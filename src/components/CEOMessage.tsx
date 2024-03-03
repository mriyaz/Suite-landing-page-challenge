import React from 'react'
import imgJeremySmall from '../assets/image-jeremy-small.png';
import imgJeremyLarge from '../assets/image-jeremy-large.png';
import pattern2 from '../assets/pattern-curved-line-2.svg';

const CEOMessage = () => {
  return (
    <div className='text-center flex flex-col justify-center items-center gap-5 md:gap-7 bg-slate-800 text-white w-full rounded-xl px-7 pb-16 mt-44 md:px-14 lg:flex-row lg:mt-16 lg:pb-0'>

      <img src={imgJeremySmall} alt="Jeremy small image" className='w-[60%] -mt-44 md:w-[40%] lg:hidden' />
      <img src={imgJeremyLarge} alt="Jeremy large image" className='hidden lg:block w-full lg:-mt-16' />

      <img src={pattern2} alt="pattern 2" className='w-[15%] md:w-[10%]' />

      <div className='text-center flex flex-col justify-center items-center gap-5 md:gap-7 lg:text-left lg:items-start
    lg:px-10 '>
        <h2 className='text-4xl lg:text-5xl'>It just <span className='font-bold'>works.</span>
        </h2>
        <p className='text-gray-300'>“I really like how it is an all -in -one solution that handle many of
          the tasks that you would normally need separate tools to do the same
          job.This thing is a miracle worker.”</p>
        <div>
          <h3 className='uppercase text-base font-bold'> Jeremy Robinson</h3>
          <h3 className='uppercase text-base font-light'>CMO, Fylo</h3>
        </div>
      </div>

    </div>
  )
}

export default CEOMessage