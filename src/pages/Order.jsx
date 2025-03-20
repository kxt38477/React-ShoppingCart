import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Order = ({ order }) => {
    const navigate = useNavigate()
    useEffect(() => {
        if (!order) {
            navigate('/')
        }
    }, [])

    if (!order || !order.orderNumber) return null

    return (
        <div className='container mx-auto py-8 px-4 md:px-16 lg:px-24'>
            <h2 className='text-2xl font-semibold mb-4'>謝謝您的選購</h2>
            <p>您的訂單已送出，您將會收到電子郵件</p>
            <div className='mt-6 p-4 rounded-lg bg-gray-100'>
                <h3 className='text-lg font-semibold mb-2'>訂單明細</h3>
                <p>訂單編號{order.orderNumber}</p>
                <div className='mt-4'>
                    <h4 className='text-md font-semibold mb-2'>購買資訊</h4>
                    <p>{order.billInformation.address}</p>
                    <p>{order.billInformation.city}</p>
                    <p>{order.billInformation.zipCode}</p>
                </div>
                <div className='mt-4'>
                    <h4 className='text-md font-semibold mb-2'>購買清單</h4>
                    {order.product.map(item => (
                        <div key={item.id} className='flex justify-between mt-2'>
                            <p>{item.name} (x{item.quantity})</p>
                            <p>{item.price * item.quantity}</p>
                        </div>
                    ))}
                </div>
                <div className='mt-4 flex justify-between'>
                    <span>TotalPrice:</span>
                    <span className='font-semibold'>{order.totalPrice}</span>
                </div>
                <div className='mt-6'>
                    <button className='bg-green-500 text-white py-2 px-4 hover:bg-green-600'>Order Tracking</button>
                    <button
                        className='ml-4 bg-red-600 text-white py-2 px-4 hover:bg-red-800'
                        onClick={() => navigate('/')}
                    >
                        Continue Shopping
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Order