import React from 'react'
import { PiCaretDown } from "react-icons/pi";

const HeaderMenus = () => {
    const myCssIcon = {
        fontSize: "24px"
    }
    return (
        <div className='hidden md:flex px-16 bg-[#F4F4F4] items-center justify-between gap-28'>
            <ul className='bg-[#EDA415] w-[218px] h-[70px] flex justify-center items-center text-white cursor-pointer'>
                <li className='flex justify-center items-center gap-4'>Browse categories <PiCaretDown style={myCssIcon} /></li>
            </ul>
            <ul className='flex gap-4 font-medium '>
                <li className='flex justify-center items-center gap-4 cursor-pointer'>Home <PiCaretDown style={myCssIcon} /></li>
                <li className='flex justify-center items-center gap-4 cursor-pointer'>Catalog <PiCaretDown style={myCssIcon} /></li>
                <li className='flex justify-center items-center gap-4 cursor-pointer'>Blog <PiCaretDown style={myCssIcon} /></li>
                <li className='flex justify-center items-center gap-4 cursor-pointer'>Pages <PiCaretDown style={myCssIcon} /></li>
                <li className='flex justify-center items-center gap-4 cursor-pointer'>About us </li>
            </ul> 
            <p className='text-[#003F62] font-bold '>30 Days Free Return</p>
        </div>
    )
}

export default HeaderMenus