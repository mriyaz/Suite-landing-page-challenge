import React from 'react'
import imgHeroLs from '../assets/image-hero-landscape.png';

const BizStatistics = () => {
  return (
    <div className='text-center flex flex-col justify-center items-center gap-7 md:flex-row md:justify-between md:px-10 lg:flex-col lg:items-start lg:text-left lg:gap-x-16'>
    <img src={imgHeroLs} alt="Hero Landscape Image" className='w-full md:hidden' />

    <div>
      <h2 className='text-5xl font-bold'>2K+</h2>
      <h3 className='uppercase '>Companies</h3>
    </div>
    <div>
      <h2 className='text-5xl font-bold'>8</h2>
      <h3 className='uppercase '> Languages</h3>
    </div>
    <div>
      <h2 className='text-5xl font-bold'>1.2M</h2>
      <h3 className='uppercase'> Leads</h3>
    </div>
  </div>
  )
}

export default BizStatistics