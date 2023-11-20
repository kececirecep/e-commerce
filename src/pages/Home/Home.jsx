import React from 'react'
import Header from '../../components/Header/Header'
import Slider from './Slider'
import ProductSlider from './ProductSlider'
import Products from '../../components/Products'

const Home = () => {
  return (
    <div> 
       <Slider />
       <ProductSlider />
       <h1 className='px-20 py-6 text-xl font-medium'>All Products</h1> 
       <Products />
    </div>
  )
}

export default Home