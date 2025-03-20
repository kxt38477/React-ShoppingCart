import React from 'react'
import { FaStar } from 'react-icons/fa'
import { addToCart } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'


const ProductCard = ({ product }) => {
    const dispatch = useDispatch()
    const handleAddToCart = (e, product) => {
        e.stopPropagation()
        e.preventDefault()
        dispatch(addToCart(product))
        alert("購物車添加成功")
    }



    return (
        <Link to={`product/${product.id}`}>
            <div className='bg-white p-4 shadow rounded relative
                transform transition-transform duration-300 hover:scale-105'>
                <img src={product.image} alt=""
                    className='w-full h-48 object-contain mb-4' />
                <h3 className='text-lg font-semibold'>{product.name}</h3>
                <p className='text-gray-500'>${product.price}</p>
                <div className='flex items-center'>
                    <FaStar className='text-yellow-500'></FaStar>
                    <FaStar className='text-yellow-500'></FaStar>
                    <FaStar className='text-yellow-500'></FaStar>
                    <FaStar className='text-yellow-500'></FaStar>
                </div>
                <div className='absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600
                rounded-full group text-white text-sm hover:w-32 hover:bg-red-700 transition-all duration-500 cursor-pointer'
                    onClick={e => handleAddToCart(e, product)}>
                    <span className='group-hover:hidden'>+</span>
                    <p className='hidden group-hover:block whitespace-nowrap overflow-hidden'>add to cart</p>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard