import React from 'react'
import Image from 'next/image'

function SmallCard({img,distance,location}) {
  return (
    <div className='flex items-center  mt-3 space-x-5
    hover:bg-gray-100 hover:scale-105 transition transform duration-200
    ease-out mb-3 cursor-pointer rounded-xl'>
    <div className='relative h-16 w-16'>
      <Image src={img} fill />
</div>
    <div>
        <h2>{location}</h2>
        <h3 className='text-gray-500'>{distance}</h3>
    </div>
    </div>
  )
}

export default SmallCard
