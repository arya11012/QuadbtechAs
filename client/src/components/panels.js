import React from 'react'

const Panels = ({number,platform,ltp,bsp,diff,savings,margin}) => {
    const isPositiveSavings = parseFloat(savings) >= 0;
    const savingsTextColor = isPositiveSavings ? 'text-green-400' : 'text-red-500';
  return (
    <div>
      <div className={`bg-gray-600 rounded-lg h-10 opacity-90 mx-2 items-center flex ${margin}`}>
        <div className='text-white font-bold text-lg flex-grow maxw-5 ml-2 '>{number}</div>
        <div className='text-white font-bold text-lg flex-grow maxw-10 '> {platform}</div>
        <div className='text-white font-bold text-lg flex-grow maxw- 20 '>{ltp}</div>
        <div className='text-white font-bold text-lg flex-grow maxw-45 '> {bsp}</div>
        <div className={` font-bold text-lg flex-grow  maxw-10 ${savingsTextColor}`}>{diff} </div>
        <div className={` font-bold text-lg flex-grow maxw-10  ${savingsTextColor}`}>{savings}</div>
      </div>
    </div>
  )
}

export default Panels
