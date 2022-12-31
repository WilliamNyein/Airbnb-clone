import React from 'react'
import Image from 'next/image'
import { IMAGES_MANIFEST } from 'next/dist/shared/lib/constants'


function MediumCard({img,title}) {
  return (
    <div className='hover:scale-105 transition duration-150
    ease-out transform cursor-pointer'>
    <div className='relative h-[300px] w-[300px]'>
   <Image src={img}  fill className='rounded-xl'/>
    </div>
    <h3 className='text-2xl mt-3'>{title}</h3>
  </div>
  )
}

export default MediumCard
