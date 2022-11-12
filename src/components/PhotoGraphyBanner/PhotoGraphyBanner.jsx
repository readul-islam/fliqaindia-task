import React from 'react'

const PhotoGraphyBanner = () => {
  return (
    <div className="hero" style={{ backgroundImage: `url("https://i.ibb.co/Rcw1KBH/Rectangle-217.png")` }}>
  <div className='flex flex-col justify-center items-center h-[459px]'>
  <div className='flex items-center lg:flex-row lg:space-x-2 xl:space-x-10 flex-col justify-center '>
    <div className='text-white xl:leading-tight text-3xl md:text-4xl md:leading-10 xl:text-6xl pb-4'> 
        <p className='font-thin ' >ULTIMATE <p>
        COURSE IN </p> </p>
        <h1 className='font-bold '>PHOTOGRAPHY</h1>
    </div>
    <img className='w-fit px-4' src="https://i.ibb.co/QjWZ0k5/image-183.png" alt="" />
   </div>
  </div>
   
  </div>
  ) 
}

export default PhotoGraphyBanner