import React from 'react'
import banner from '../assets/bannerImage/BANNER.jpeg'

function Header() {
  return (
    <div className="flex flex-col justify-center items-center">
        <div className='flex flex-col justify-center items-center font-bold text-white'>
            <h1 className='text-5xl my-5 text-center'>Copa America 2024 Qualified Teams</h1>
            <h2 className='text-3xl text-center'>All 10 Qualified Teams + Host Nation</h2>
        </div>
        <div className='mt-3'>
            <img src={banner} alt="Copa America 2024 Logo" className='h-auto w-4/5 object-contain my-5 mx-auto'/>
        </div>
    </div>
  )
}

export default Header