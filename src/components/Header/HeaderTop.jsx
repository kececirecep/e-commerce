import React from 'react'
import { PiMapPinLight } from "react-icons/pi";
import { BsTruck } from "react-icons/bs";


const HeaderTop = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between py-2 px-16'>
        <div>
          <p className='text-sm font-medium'>Need help? Call us: (+98) 0234 456 789</p>
        </div>
        <ul className='flex gap-4'>
          <li className='flex items-center gap-2'>
            <PiMapPinLight />
            Our store
          </li>
          <li className='flex items-center gap-2'>
            <BsTruck />
            Our store
          </li>
        </ul>
    </div>
  )
}

export default HeaderTop