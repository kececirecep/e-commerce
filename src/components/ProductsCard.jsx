import React from 'react'

import { useDispatch } from 'react-redux';


import { PiHeartThin } from "react-icons/pi";
import { AiOutlineShoppingCart, AiOutlineEye } from "react-icons/ai";
import { addToCart } from '../redux/cardSlice';
import { addToFav } from '../redux/favSlice';
import { NavLink } from 'react-router-dom';

import {ToastContainer, toast } from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css';  

const ProductsCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product)=>{
    dispatch(addToCart(product))
    addSuccess(product) 
    }
    
 

    const addSuccess = (product) => {
        toast.success(`${product.name} sepete eklendi`, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } 
      const addSuccess2 = (product) => {
        toast.success(`${product.name} favorilere eklendi`, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } 

  const handleaddToFav = (product) => {
    dispatch(addToFav(product))
    addSuccess2(product) 
  }
  


  const popularProductCss = {
    backgroundColor: "#EDA415",
    color: "#ffffff",
    padding: "4px",
    borderRadius: "50%"
  }
  const popularProductViewCss = {
    fontSize: "22px"
  }
  return (
    <div className='flex'>
      <ToastContainer/>
      <div className='cursor-pointer flex flex-col justify-between items-start p-4 rounded-3xl border-2 border-[#575757]] m-4 relative popularBox'>
        <NavLink to={`/product/${product.id}`}><img src={product.image} style={{ width: '330px', height: '200px', objectFit: 'contain' }} alt="" className='p-8' /></NavLink>
        <h2 className='text-[#003F62] font-medium text-[19px] py-2 titlePrice'>{product.name}</h2>
        <span className='text-[#4A4A4A] font-semibold text-[17px] py-2 titlePrice'>${product.price}</span>
        <button onClick={() => handleaddToFav(product)} className='absolute top-8 right-6 p-1 text-xl bg-[#87BCD9] rounded-full'><PiHeartThin /></button>
        <div className='flex w-80 justify-between items-center popularAddCart p-4'>
          <button onClick={()=>handleAddToCart(product)} className='flex items-center p-4 bg-[#87BCD9] gap-12 rounded-2xl'>Add to cart
            <span style={popularProductCss} ><AiOutlineShoppingCart /></span></button>
          <NavLink to={`/product/${product.id}`}>
            <div className='p-4 bg-[#87BCD9] rounded-2xl'>
              <AiOutlineEye style={popularProductViewCss} />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default ProductsCard