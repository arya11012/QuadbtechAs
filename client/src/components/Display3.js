import React from 'react'

const Display3 = () => {
  return (
    <div className='bg-gray-800'>
      <div className='flex flex-wrap  items-center bg-gray-800  pt-6'>
        <div className='text-gray-500 text-xl w-5 flex-grow ml-4'>#</div>
        <div className='text-gray-500 text-xl w-10 flex-grow'>Platform</div>
        <div className='text-gray-500 text-xl  flex-grow'>Last Traded Price</div>
        <div className='text-gray-500 text-xl w-15 flex-grow'>Buy/Sell Price</div>
        <div className='text-gray-500 text-xl flex-grow'>Difference</div>
        <div className='text-gray-500 text-xl flex-grow '>Savings</div>
      </div>
    </div>
  )
}

export default Display3
