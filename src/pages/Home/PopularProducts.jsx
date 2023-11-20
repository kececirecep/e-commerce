import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductsCard from '../../components/ProductsCard';
 
const PopularProducts = () => {
  const [products, setProduct] = useState([])

  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 8;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / productsPerPage);



  useEffect(() => {
    async function getProduct() {
      try {
        const response = await axios.get("https://kececirecep.github.io/products.json/products.json");
        setProduct(response.data.products)

      } catch (error) {
        console.error(error)
      }
    }
    getProduct()
  }, [])

  
  return (
    <div>
      <div className='px-16 py-14'>
        <div className="flex justify-between items-center text-[#1B5A7D]">
          <h1 className=' font-semibold text-[22px]'>Products</h1>
          <ul className='flex gap-4 font-medium'>
            <li>
              <button className='p-2 border rounded-3xl border-[#1B5A7D]'>Phone</button>
            </li>
            <li>
              <button className='p-2 border rounded-3xl border-[#1B5A7D]'>Computer</button>
            </li>
            <li>
              <button className='p-2 border rounded-3xl border-[#1B5A7D]'>Headphones</button>
            </li>
            <li>
              <button className='p-2 border rounded-3xl border-[#1B5A7D]'>Tablet</button>
            </li>
            <li>
              <button className='p-2 border rounded-3xl border-[#1B5A7D]'>Accessory</button>
            </li>
            <li>
              <button className='p-2 border rounded-3xl border-[#1B5A7D]'>Gaming</button>
            </li>
            <li>
              <button className='p-2 border rounded-3xl border-[#1B5A7D]'>Speaker</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="px-16 py-14 flex flex-wrap justify-between">
        {currentProducts.map((product,id) => (
          <ProductsCard key={id} product={product} />
        ))}
      </div>
      <div>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Önceki Sayfa
        </button>
        <span>Sayfa {currentPage} / {totalPages}</span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages || currentProducts.length < productsPerPage}
        >
          Sonraki Sayfa
        </button>
      </div>
    </div>
  )
}

export default PopularProducts 