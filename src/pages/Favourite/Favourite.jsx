import React from 'react'
import Header from '../../components/Header/Header'
import { useDispatch } from 'react-redux'
import {useSelector} from 'react-redux'
import { AiOutlineCloseCircle } from "react-icons/ai";
import { removeFromFav } from '../../redux/favSlice';

const Favourite = () => {
    const favItems = useSelector(state=>state.favourite.favouriteItems)
    const dispatch = useDispatch();
    

    const removeIcon ={
        fontSize:"20px"
    }

  return (
    <div> 
        {
            favItems.map(item=>{
                return(
                    <div className='flex justify-center items-center gap-12 shadow p-4'>
                        <img src={item.image} style={{ width: '330px', height: '200px', objectFit: 'contain' }} alt="" className='p-8' />
                        <h2 className='w-36 text-[#003F62] font-semibold'>{item.name}</h2>
                        <h2 className='w-36 font-semibold text-[#2F2F2F]'>${item.price}</h2> 
                        <button onClick={()=>dispatch(removeFromFav({id:item.id}))}>{<AiOutlineCloseCircle style={removeIcon} />}</button> 
                    </div>
                )
            })
        }
    </div>
  )
}

export default Favourite
