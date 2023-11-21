import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/cardSlice';
import CartTotal from './CartTotal';

const Cart = () => {

    const removeIcon = {
        fontSize: "20px"
    }

    const cartItems = useSelector(state => state.cart.cart)
    const dispatch = useDispatch()
    return (
        <div className='flex justify-around items-start px-12'>
            <div className='w-3/4'>
                {
                    cartItems.map(item => {
                        return (
                            <div className='flex items-center gap-12 border-b border-gray-300'>
                                <img src={item.image} style={{ width: '330px', height: '200px', objectFit: 'contain' }} alt="" className='p-8' />
                                <h2 className='w-36 text-[#003F62] font-semibold'>{item.name}</h2>
                                <h2 className='w-36 font-semibold text-[#2F2F2F]'>${item.price}</h2> 
                                <button onClick={() => dispatch(removeFromCart({ id: item.id }))}>{<AiOutlineCloseCircle style={removeIcon} />}</button>
                            </div>
                        )
                    })
                }
            </div>
            <div className='w-1/6'>
                <CartTotal />
            </div>
        </div>
    )
}

export default Cart
