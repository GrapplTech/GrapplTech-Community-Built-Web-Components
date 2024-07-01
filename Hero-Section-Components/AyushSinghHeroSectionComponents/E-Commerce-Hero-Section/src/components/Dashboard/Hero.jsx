import React from 'react'
import heroImage from '../../assets/heroImage.jpg'
function Hero() {
  return (
    <div >
      <div className='relative'>
      <div className='h-60 w-full lg:h-96'>
      <img 
      className='h-full w-full object-fill lg:object-fill rounded-lg'
      src={heroImage} 
      alt="" />
    </div>
    <div className=' flex flex-col justify-center items-center absolute left-[42%] top-[80%]'>
      <div className='w-32 h-32  p-3'>
        <img src="https://static.vecteezy.com/system/resources/previews/000/404/447/original/retro-coffee-shop-logo-vector.jpg" className='w-full h-full rounded-full' alt="" />
      </div>
      <div>
        <h6 className='font-bold text-3xl'>The Coffee Shop</h6>
      </div>
    </div>
      </div>
    </div>
  )
}

export default Hero