import React from 'react'

const Display2 = ({sell}) => {
  return (
    <div>
      <div className='flex flex-wrap justify-between items-center bg-gray-800'>
        <div className='text-gray-500 text-sm ml-8 '>5 Mins</div>
        <div className='text-gray-500 text-sm ml-6'>1 hour</div>
        <div className='text-gray-500 text-sm  '>Average BTC/INR net price including commision</div>
        <div className='text-gray-500 text-sm mr-8'>1 day</div>
        <div className='text-gray-500 text-sm  mr-12'>7 days</div>
      </div>
    </div>
  )
}

export default Display2
