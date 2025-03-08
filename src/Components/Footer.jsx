import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-8 px-4 md:px-16 lg:px-24'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div>
          <h3 className='text-xl font-semibold'>e-Shop</h3>
          <p className='mt-4'>
            購物車網站訂購
          </p>
        </div>
        <div className='flex flex-col md:items-center'>
          <h4 className='text-lg font-semibold'>連結</h4>
          <ul className='mt-4 space-y-2'>
            <li>
              <Link to="/" className='hober:underline'>Home</Link>
            </li>
            <li>
              <Link to="/shop" className='hober:underline'>Shop</Link>
            </li>
            <li>
              <Link to="/contact" className='hober:underline'>Contact</Link>
            </li>
            <li>
              <Link to="/about" className='hober:underline'>About</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className='text-lg font-semibold'>追蹤我們</h4>
          <div className='flex space-x-4 mt-4'>
            <a href="" className='hover:text-gray-400'><FaFacebook /></a>
            <a href="" className='hover:text-gray-400'><FaTwitter /></a>
            <a href="" className='hover:text-gray-400'><FaGithub /></a>
            <a href="" className='hover:text-gray-400'><FaInstagram /></a>
          </div>
          <form className='flex items-center justify-center mt-8'>
            <input type="email" placeholder='輸入電子信箱'
              className='w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600' />
            <button className='bg-red-600 text-white px-4 py-2 rounded-r-lg border border-gray-600  whitespace-nowrap '>訂閱</button>
          </form>
        </div>
      </div>
      <div className='mt-8 border-t border-gray-700 pt-4'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
          <p>&copy; 2024 版權所有</p>
          <div className='flex space-x-4 mt-4 md:mt-0'>
            <a href="" className='hover:underline'>隱私權政策</a>
            <a href="" className='hover:underline'>條款與條件</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer