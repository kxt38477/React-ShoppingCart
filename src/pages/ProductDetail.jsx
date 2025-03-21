import React, { useState } from 'react'
import { useEffect } from 'react'
import { FaCarSide } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { increaseCount } from '../redux/cartSlice'

const ProductDetail = () => {
  const { id } = useParams()
  const products = useSelector(state => state.product.products)
  const [product, setProduct] = useState()
  const [quantity, setQuantity] = useState()

  const dispatch = useDispatch()

  useEffect(() => {
    const newProduct = products.find(product => product.id === parseInt(id))
    setProduct({...newProduct,quantity:quantity})
        
  }, [id,quantity])
  const handleAddToCart = (e) => {
    e.preventDefault()
    if (!product.quantity) {
      alert('您未輸入正確數量')
    } else {
      dispatch(increaseCount(product))
      alert('成功加入產品')
    }    
  }


  if (!product) return <div>Loading</div>

  return (
    <div className='container mx-auto py-8 px-4 md:px-16 lg:px-24'>
      <div className='flex flex-col md:flex-row gap-x-16'>
        <div className='md:w-1/2 shadow-md md:px-8 h-96 flex justify-center'>
          <img src={product.image}
            alt={product.name}
            className='h-full'
          />
        </div>
        <div className='md:w-1/2 p-4 shadow-md md:p-16 flex flex-col items-center gap-y-2'>
          <h2 className='text-3xl font-semibold mb-2'>{product.name}</h2>
          <p className='text-xl font-semibold text-gray-800 mb-4'>
            ${!quantity ? product.price : product.price * quantity}
          </p>
          <div className='flex items-center mb-4 gap-x-2'>
            <input type='number'
              id='quantity'
              min='1'
              className='border p-1 w-16'
              onChange={e => setQuantity(parseInt(e.target.value))}
            />
            <button className='whitespace-nowrap bg-red-600 text-white py-1.5 px-4 hover:bg-red-800'
              onClick={handleAddToCart}
            >
              加入購物車
            </button>
          </div>
          <div className='flex flex-col gap-y-4 mt-4'>

            <p className='flex items-center'>
              <FaCarSide className='mr-1' />
              問題回報
            </p>
          </div>
        </div>
      </div>
      <div className='mt-8'>
        <h3 className='text-xl font-bold mb-2'>產品敘述</h3>
        <p>產品敘述置於此行</p>
      </div>
    </div>
  )
}

export default ProductDetail