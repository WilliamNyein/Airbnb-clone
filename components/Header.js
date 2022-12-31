import React from 'react'
import Image from 'next/image'
import {MagnifyingGlassIcon,GlobeAltIcon,
UserCircleIcon,Bars3Icon} from '@heroicons/react/24/solid';

function Header() {
  return (
    <header className='sticky grid grid-cols-3 z-50 bg-white shadow-md p-2 
    top-0'>
      <div className='relative h-10 flex items-center my-auto cursor-pointer'>
        <Image src='http://static.dezeen.com/uploads/2014/07/Airbnb-rebrand-by-DesignStudio_dezeen_468_8.jpg' 
         height={50} width={50}/>
      </div>

        <div className='flex items-center border rounded-full 
        md:shadow-sm'>
            <input className='flex-grow mx-5 outline-none bg-transparent
            text-sm text-gray-600' type='text' placeholder='search with name'/>
            <MagnifyingGlassIcon className='h-6 bg-red-600 rounded-xl p-1
            text-white cursor-pointer hidden md:inline-flex mx-2' />
        </div>

        <div className='flex justify-end items-center space-x-3 text-gray-500'>
            <p className='hidden md:inline'>Become a host</p>
            <GlobeAltIcon className='h-6'/>

        <div className='flex items-center border rounded-full p-2'>
            <UserCircleIcon className='h-6'/>
            <Bars3Icon className='h-6'/>
        </div>
</div>      

      </header>
  )
}

export default Header;
