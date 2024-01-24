import React from 'react'
import { FaTelegramPlane } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Switch } from '@mui/material';
const Header = () => {
  return (
    <div>
      
      <div className='flex  flex-wrap bg-gray-800 pb-5'>
        <div className='text-teal-400 text-40 ml-4 flex-grow'>HODLINFO</div>
        <div className='text-gray-800 mx-20'>HI</div>
        <div className='flex ml-20 items-center flex-grow pt-4'>
            <div className='text-white rounded-lg px-2  bg-gray-700 text-lg '>
                INR
            </div>
            <div className='ml-4 text-white rounded-lg px-2 bg-gray-700 text-lg '>
                BTC
                
            </div>
            <div className='text-white ml-4 rounded-lg px-2 bg-gray-700 text-lg '>
                BUY BTC
            </div>
        </div>
        <div className='border-2  border-teal-400 flex items-center justify-center text-teal-400 rounded-full w-4 h-4 p-4 mt-3 ml-20 contain'><div>57</div></div>
        <div className='bg-teal-400 text-white h-8 mt-4 text-sm flex justify-center items-center rounded-lg ml-4'><FaTelegramPlane /><div>Connect Telegram</div></div>
        <Switch className='mt-4' defaultChecked color="default" />
      </div>
    </div>
  )
}

export default Header
