import React, { useState } from 'react'
import emptyCart from '../assets/Images/emptycart.png'
import { useDispatch, useSelector } from 'react-redux'
import { FaTrashAlt } from 'react-icons/fa';
import Modal from '../Components/Modal';
import ChangeAddress from '../Components/ChangeAddress';
import { decreaseCount, increaseCount, removeFromCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';


const Cart = () => {

    const cart = useSelector(state => state.cart);
    const [address, setAddress] = useState('測試地址1, 1號')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const dispatch = useDispatch() //拉Hook出來
    const navigate = useNavigate();

    return (
        <div className='container mx-auto py-8  px-4 md:px-16 lg:px-24'>
            {cart.products.length > 0 ? (
                <div>
                    <h3 className='text-2xl font-semibold mb-4'>購物車</h3>
                    <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
                        <div className='md:w-2/3'>
                            <div className='flex justify-between border-b items-center mb-4 text-xs font-bold'>
                                <p className='flex-1 text-base pl-6 md:justify-center'>產品</p>
                                <div className='flex space-x-18'>
                                    <p className='text-base'>價格</p>
                                    <p className='text-base'>數量</p>
                                    <p className='text-base'>小計</p>
                                    <p className='text-base'>移除</p>
                                </div>
                            </div>
                            {cart.products.map((product) => (
                                <div key={product.id}
                                    className='flex items-center justify-between p-3 border-b'
                                >
                                    <div className='md:flex flex-1 items-center space-x-4 md:space-x-1'>
                                        <img
                                            src={product.img}
                                            alt={product.name}
                                            className='w-16 h-16 object-contain rounded'
                                        />
                                        <div className='flex-1 ml-4'>
                                            <h3 className='text-lg md:text-base font-bold'>{product.name}</h3>
                                        </div>
                                    </div>
                                    <div className='flex space-x-12 items-center'>
                                        <p>${product.price}</p>
                                        <div className='flex items-center justify-center border'>
                                            <button
                                                className='text-xl font-bold px-1 border-r'
                                                onClick={() => {
                                                    dispatch(decreaseCount(product))
                                                }}
                                            >
                                                -
                                            </button>
                                            <p className='text-xl px-2'>{product.quantity}</p>
                                            <button
                                                className='text-xl px-1 border-l'
                                                onClick={() => {
                                                    dispatch(increaseCount(product))
                                                }}
                                            >
                                                +
                                            </button>
                                        </div>
                                        <p>${(product.quantity * product.price).toFixed(2)}</p>
                                        <button
                                            className='text-red-500 hover:text-red-700'
                                            onClick={() => {
                                                dispatch(removeFromCart(product))
                                                alert('移除成功')
                                            }}
                                        >
                                            <FaTrashAlt />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border'>
                            <h3 className='text-sm font-semibold mb-5'>購物車總計</h3>
                            <div className='flex justify-between mb-5 border-b pb-1'>
                                <span className='text-sm'>總數量:</span>
                                <span>{cart.totalQuantity}</span>
                            </div>
                            <div className='mb-4 border-b pb-2'>
                                <p>Shipping:</p>
                                <p className='ml-2'>Shipping to{"  "}
                                    <span className='text-xs font-bold'>{address}</span>
                                </p>
                                <button
                                    className='text-blue-500 hover:underline mt-1 ml-2'
                                    onClick={() => setIsModalOpen(true)}
                                >
                                    更換地址
                                </button>
                            </div>
                            <div className='flex justify-between mb-4'>
                                <span>Total Price:</span>
                                <span>${cart.totalPrice.toFixed(2)}</span>
                            </div>
                            <button
                                className='w-full bg-red-600 text-white py-2 hover:bg-red-800'
                                onClick={()=>{
                                    navigate('/checkout')
                                }}
                            >
                                結算
                            </button>
                        </div>
                    </div>
                    <Modal
                        isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen}
                    >
                        <ChangeAddress 
                            setAddress={setAddress}
                            setIsModalOpen={setIsModalOpen}
                        />
                    </Modal>
                </div>
            )
                : (
                    <div className='flex justify-center'>
                        <img src={emptyCart} className='mt-2 h-96' />
                    </div>
                )
            }
        </div>
    )
}

export default Cart