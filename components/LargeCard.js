import React from 'react'
import Image from 'next/image'


function LargeCard({img,location}) {
  return (
    <section className='relative py-6'>
        <div className='relative h-96 min-w-[300px]'>
        <Image src={img} fill className='rounded-xl'/>
        </div>
        <div className='absolute top-[80px] left-12'>
        <h3 className='text-4xl w-64 mb-3'>The Greatest Outdoors</h3>
        <p>{location} golden land</p>
        <button className='bg-gray-900 text-white mt-3 px-4 py-2 rounded-lg
        text-sm'>Get Started</button>
        </div>
    </section>
  )
}

export default LargeCard
