import React from 'react'
import Image from 'next/image'

function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500]
    xl:h-[600]'>
      <Image src='https://images.squarespace-cdn.com/content/v1/558cb134e4b05d3685378596/1589193460996-UCUTFXKE53ZDGB5AMZ66/banner2.jpg?format=2500w'
      fill/>

      <div className='absolute top-1/2 right-[250px]'>
        <p className='text-sm text-green-10 sm:text-lg'>Not sure where to go?Perfect.</p>
        <button className='text-purple-500 bg-white shadow-md p-3 
       active:scale-90 transition duration-150 my-3 rounded-full'>I'm flexible</button>
      </div>
    </div>
  )
}

export default Banner
