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
            <div className="my-8 font-semibold">
                <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`p-4 bg-[#87BCD9] gap-12 rounded-2xl text-white ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#6191aa]'
                        }`}
                >
                    Önceki Sayfa
                </button>
                <span className='font-semibold'> {currentPage} / {totalPages}</span>
                <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentProducts.length < productsPerPage}
                    className={`p-4 bg-[#87BCD9] gap-12 rounded-2xl text-white ${currentPage === totalPages || currentProducts.length < productsPerPage
                        ? 'opacity-50 cursor-not-allowed'
                        : 'hover:bg-[#6191aa]'
                        }`}
                >
                    Sonraki Sayfa
                </button>
            </div>
        </div >

    )
}

export default Products
