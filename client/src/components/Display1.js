import React from 'react'

const Display1 = ({sell,day}) => {
  return (
    <div>
      <div className='flex flex-wrap justify-between items-center bg-gray-800'>
        <div className='text-teal-300 text-40 ml-8 '>0.1 %</div>
        <div className='text-teal-300 text-40 '>0.96 %</div>
        <div className='text-white text-50  '>{"₹"+sell}</div>
        <div className='text-teal-300 text-40 '>{day}</div>
        <div className='text-teal-300 text-40  mr-8'>7.51 %</div>
      </div>
    </div>
  )
}

export default Display1
