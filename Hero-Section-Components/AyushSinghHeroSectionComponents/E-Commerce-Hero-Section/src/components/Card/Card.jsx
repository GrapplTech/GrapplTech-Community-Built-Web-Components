import React from 'react'

function Card({img,title,description}) {
  return (
    <div className='h-[500px]  flex flex-col justify-center  items-center'>
      <div className='w-[320px] h-[300px]'>
        <img 
        className='w-full h-full rounded object-cover hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer'
        src={img} alt="coffee images" />
      </div>
      <div className='w-[320px] h-[200px] px-1  py-2 '>
        <h5 className='text-2xl font-semibold'>{title}</h5>
        <p className='text-slate-600 font-medium '>{description}</p>
      </div>
    </div>
  )
}

export default Card;