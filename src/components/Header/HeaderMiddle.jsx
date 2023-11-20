import React from 'react'
import Logo from '../../images/logo.png'
import { BiUser } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
 



const HeaderMiddle = () => {
    const myCssIcon = {
        fontSize:"22px"
    }

    const cartItems = useSelector(state=>state.cart.cart)
    const favItems = useSelector(state=>state.favourite.favouriteItems)
    
  return (
    <div className='px-16 bg-[#003F62] h-[100px] flex justify-between flex-col md:flex-row'>
        <div className="logo-search flex items-center gap-14">
        <NavLink to="/"><img src={Logo} width="120px" alt="" /></NavLink>
        <div className='flex items-center justify-end relative'>
        <input type='text' placeholder='Search any things' className='p-4 rounded-2xl w-[408px] h-[52px] text-sm focus:outline-none placeholder:text-black' />
        <button type='submit' className='text-white bg-[#EDA415] p-3 rounded-2xl w-[102px] h-[52px] absolute'>Search</button>
        </div>
        </div>
        <ul className='text-white flex justify-center items-center gap-4'>
            <li className='flex items-center gap-2'>
                <BiUser style={myCssIcon} />
                <p>Sign in</p>
            </li>
            <NavLink to="/favourite" className='flex items-center gap-2'>
                <AiOutlineHeart style={myCssIcon} />
                <span className='bg-[#EDA415] rounded-full w-4 h-4 flex items-center justify-center text-sm'>{favItems.length}</span>
                <p>Favorite</p>
            </NavLink>
            <NavLink to="/cart" className='flex items-center gap-2'>
                <AiOutlineShoppingCart style={myCssIcon} />
                <span className='bg-[#EDA415] rounded-full w-4 h-4 flex items-center justify-center text-sm'>{cartItems.length}</span>
                <p>Cart</p>
            </NavLink> 
        </ul>
    </div>
  )
}

export default HeaderMiddle