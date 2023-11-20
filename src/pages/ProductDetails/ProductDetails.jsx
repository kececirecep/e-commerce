import React from 'react'; 
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { addToFav } from '../../redux/favSlice';
import { addToCart } from '../../redux/cardSlice';

import { PiHeartThin } from "react-icons/pi";

import {ToastContainer, toast } from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css';  


const ProductDetails = () => {
    const { id } = useParams();
    const products = useSelector(state => state.myProducts.data);

    const product = products.find(prod => prod.id === id);

    console.log(products);
    const dispatch = useDispatch();

    const handleaddToFav = (product) => {
        dispatch(addToFav(product))
        addSuccess2(product)
      }

      
    
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
    

    return (
        <div> 
            <ToastContainer />
            {product ? (
                <div className='flex items-start justify-center py-24 gap-24'> 
                    <div className='border-2 border-[#e7e7e7] p-12 rounded-2xl w-1/3'>
                        <img src={product.image} style={{ width: '500px', height: '400px', objectFit: 'contain' }} alt="" />
                    </div>
                    <div className='w-1/3'>
                        <h2 className='text-[#003F62] font-semibold text-2xl pb-4'>{product.name}</h2> 
                        <h2 className='text-[#4A4A4A] font-semibold text-xl pb-4'>${product.price}</h2> 
                        <p className='pb-24 border-b border-gray-300'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit iure minus architecto porro aliquid voluptates nostrum excepturi, dolor, eligendi expedita exercitationem a ipsum vel voluptatem voluptate vero non tempora esse distinctio? Laborum temporibus ipsam tenetur  </p>  
                        <div className="btns pt-14 flex items-center gap-8">
                            <button className='rounded-3xl bg-[#EDA415] text-white px-12 py-4' onClick={()=>handleAddToCart(product)}>Add to cart</button>
                            <button className='p-2 text-3xl  text-black bg-[#EEEEEE] rounded-full' onClick={() => handleaddToFav(product)}><PiHeartThin /></button>
                        </div>
                    </div> 
                </div>
            ) : (
                <p>Ürün bulunamadı.</p>
            )}
        </div>
    );
}

export default ProductDetails;
