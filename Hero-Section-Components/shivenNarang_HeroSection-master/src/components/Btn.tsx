import React from 'react'

function Btn(Props: any) {
  return (
    <button className='py-4 px-9 bg-green-700 rounded-2xl border-none text-lg text-white cursor-pointer'>
        {Props.Text}
    </button>
  )
}

export default Btn