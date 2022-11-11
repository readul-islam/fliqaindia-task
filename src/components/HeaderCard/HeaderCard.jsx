import React from 'react'
import { headerCard } from '../../Utils/mockData'

const HeaderCard = () => {
  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-full my-10 gap-10 md:gap-8 lg:place-items-center px-8'>
    {headerCard.map(data => <div className='flex md:flex-row flex-col items-center gap-3'>
        <img src={data.img} alt="" />
        <div className='md:text-left text-center'>
            <h3 className='text-black text-2xl font-bold'>{data.title}</h3>
            <p className='text-gray-500 '>{data.description}</p>
        </div>
    </div>)}
    </div>
  )
}

export default HeaderCard