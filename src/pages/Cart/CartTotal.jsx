import React from 'react'

const CartTotal = () => {
  return (
    <div className='border border-gray-500 mt-20 fixed'>
        <h2 className='bg-[#E2F4FF] p-2 font-semibold text-center'>Cart total</h2>
        <div className='flex justify-between items-center p-12 pb-0 font-semibold text-[#232323]'>
            <p className=' text-sm'>Total amount</p>
            <p className=' text-xl'>$23,20</p>
        </div>
        <div className='flex flex-col p-12 pt-8 '>
            <button className='rounded-3xl bg-[#EDA415] text-white px-12 py-2 mb-4'>Continue</button>
            <button className='rounded-3xl bg-white text-[#C33131] border border-[#C33131] px-12 py-2 font-semibold'>Clear cart</button>
        </div>
    </div>
  )
}

export default CartTotal