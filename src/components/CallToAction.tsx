import React from 'react';
import imgHeroPr from '../assets/image-hero-portrait.png';

const CallToAction = () => {
  return (
    <div className='md:flex lg:w-[72%]'>
          <div className="space-y-10 md:mt-20 md:z-10">
            <h1 className='text-4xl md:text-5xl md:-mr-20 lg:-mr-32 lg:text-6xl'>A 
            <span className='font-bold'>super solution</span > for your <span className='font-bold'>business.</span></h1>

            <p className='md:pr-10'>Our marketing and sales automations help you scale your outreach to
              get more leads for your company.</p>

            <button className='bg-black text-white rounded-lg px-5 py-3 font-bold '>Request Beta Access</button>
          </div>

          <div className='hidden md:block w-full'>
            <img src={imgHeroPr} alt="Hero Portrait Image" className='w-full' />
          </div>
        </div>
  )
}

export default CallToAction