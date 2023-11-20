import React, { useEffect, useState } from 'react'
import ProductsCard from './ProductsCard'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/productSlice';

const Products = () => {
    const dispatch = useDispatch();

    const myProducts = useSelector((state) => state.myProducts)

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = myProducts.data.slice(indexOfFirstProduct, indexOfLastProduct);

    const totalPages = Math.ceil(myProducts.data.length / productsPerPage);

    return (
        <div className='flex flex-wrap justify-center items-center'>
            <div className='flex justify-center flex-wrap items-center'>
                {myProducts.loading && "fetching data"}
                {myProducts.error && myProducts.error}
                {currentProducts.map(product => {
                    return (
                        <ProductsCard product={product} key={product.id} image={product.image} name={product.name} price={product.price} />
                    )
                })
                }
            </div>
            <div className="mt-12">
                <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`bg-blue-500 text-white px-4 py-2 rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
                        }`}
                >
                    Önceki Sayfa
                </button>
                <span>Sayfa {currentPage} / {totalPages}</span>
                <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentProducts.length < productsPerPage}
                    className={`bg-blue-500 text-white px-4 py-2 rounded ${currentPage === totalPages || currentProducts.length < productsPerPage
                        ? 'opacity-50 cursor-not-allowed'
                        : 'hover:bg-blue-600'
                        }`}
                >
                    Sonraki Sayfa
                </button>
            </div>
        </div >

    )
}

export default Products