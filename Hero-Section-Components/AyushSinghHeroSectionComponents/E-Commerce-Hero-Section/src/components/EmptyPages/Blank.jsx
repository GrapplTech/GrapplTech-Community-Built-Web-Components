import React from 'react'
import { Link } from 'react-router-dom'

function Blank() {
  return (
    <div>
        <div className='flex flex-col gap-4 items-center justify-center h-[70vh]'>
        <p className='text-4xl font-semibold text-center text-gray-800'>
        Oops! This page is under construction.
      </p>
      <p className='text-lg text-center text-gray-600'>
        We’re working hard to bring you new content. Please check back soon.
      </p>
      <button className='bg-blue-600 px-8 py-3 text-2xl rounded-xl text-white font-semibold hover:bg-blue-700 transition duration-300'>
        <Link to='/'>Return Home</Link>
      </button>
        </div>
    </div>
  )
}

export default Blank