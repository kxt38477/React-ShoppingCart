import React, { useEffect, useState } from 'react'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const cartProducts = useSelector(state => state.cart.products)

  return (
    <nav className='bg=white shadow-md'>
      <div className='container mx-auto px-4 py-4 md:px-16 lg:px-24 flex justify-between items-center '>
        <div className='text-lg font-bold'>
          <Link to="/">e-SHOP</Link>
        </div>
        <div className='relative flex-1 mx-4'>
          <form>
            <input type="text" placeholder='搜尋產品' className='w-full border py-2 px-4' />
            <FaSearch className='absolute top-3 right-3 text-red-500' />
          </form>
        </div>
        <div className='flex items-center space-x-4'>
          <Link to="/cart" className='relative'>
            <FaShoppingCart className='text-lg' />
            {cartProducts.length > 0 ? <p className='absolute top-0 text-xs top-2 w-4 left-3 bg-red-600 rounded-full flex justify-center items-center text-white'>{cartProducts.length}</p>
              : ''}
          </Link>
          <button className='hidden md:block'>
            Login | Register
          </button>
          <button className='block md:hidden'>
            <FaUser />
          </button>
        </div>
      </div>
      <div className='flex justify-center items-center space-x-12 py-4 font-bold'>
        <Link to="/" className='hover:underline'>Home</Link>
        <Link to="/shop" className='hover:underline'>Shop</Link>
        <Link to="/" className='hover:underline'>Contact</Link>
        <Link to="/" className='hover:underline'>About</Link>
      </div>
    </nav>
  )
}

export default Navbar