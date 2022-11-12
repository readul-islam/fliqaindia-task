import React from 'react'
import { treading } from '../../Utils/mockData'

const TreadingCard = () => {
  return (
    <>
    <div>
        {treading.map(data => <>
        <div className='flex flex-col md:mb-0 mb-4 md:flex-row justify-center text-center md:text-left items-center md:gap-2   text-black'>
          <img className='w-full md:w-fit' src={data.img} alt="" />
          <div>
            <h4 className='font-semibold'>{data.title}</h4>
            <p className='text-sm md:text-md'>{data.description}</p>
          </div>
        </div>
        
        </>)}
    </div>
    
    </>
  )
}

export default TreadingCard