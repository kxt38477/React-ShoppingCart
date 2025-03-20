import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const CheckOut = ({ setOrder }) => {
    const [billingToggle, setBillingToggle] = useState(true)
    const [shopToggle, setShopToggle] = useState(false)
    const [paymentToggle, setPaymentToggle] = useState(false)

    const [paymentMethod, setPaymentMethod] = useState('dc')
    const [billInfo, setBillInfo] = useState({
        address: '',
        city: '',
        zipCode: '',
    })
    const cart = useSelector(state => state.cart)
    const navigate = useNavigate()
    const handleOrder = () => {  //購物車回傳給上層
        const newOrder = {
            product: cart.products,
            orderNumber: '12356',
            billInformation: billInfo,
            totalPrice: cart.totalPrice
        }

        if (Object.values(billInfo).some(value => !value)) {
            alert('欄位不能為空！');
            return
        } 
        setOrder(newOrder)
        navigate('/order-confirmation')
    }


    return (
        <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
            <h3 className='text-2xl font-semibold mb-4'>確認</h3>
            <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
                <div className='md:w-2/3'>
                    {/* 帳單資訊 */}
                    <div className='shadow-sm shadow-gray-400 p-2 mb-6'>
                        <div className='flex items-center justify-between'
                            onClick={() => setBillingToggle(!billingToggle)}
                        >
                            <h3 className='text-lg font-semibold mb-2'>
                                帳單資訊
                            </h3>
                            {billingToggle ? <FaAngleUp /> : <FaAngleDown />}
                        </div>
                        <div className={`space-y-4 ${billingToggle ? 'transition-max-height duration-800 ease-in-out overflow-hidden max-h-[250px]' : 'transition-max-height duration-800 ease-in-out overflow-hidden max-h-[0px]'}`}>
                            <div>
                                <label className='block text-gray-700'>名稱</label>
                                <input
                                    type="text"
                                    name='name'
                                    placeholder='輸入名稱'
                                    className='w-full px-3 py-2 border'
                                />
                            </div>
                            <div>
                                <label className='block text-gray-700'>電子郵件</label>
                                <input
                                    type="email"
                                    name='email'
                                    placeholder='輸入郵件'
                                    className='w-full px-3 py-2 border'
                                />
                            </div>
                            <div>
                                <label className='block text-gray-700'>電話</label>
                                <input
                                    type="text"
                                    name='phone'
                                    placeholder='輸入電話'
                                    className='w-full px-3 py-2 border'
                                />
                            </div>
                        </div>
                    </div>

                    {/* 購物資訊 */}
                    <div className='shadow-sm shadow-gray-400 p-2 mb-6'>
                        <div className='flex items-center justify-between'
                            onClick={() => setShopToggle(!shopToggle)}
                        >
                            <h3 className='text-lg font-semibold mb-2'>
                                購物資訊
                            </h3>
                            {shopToggle ? <FaAngleUp /> : <FaAngleDown />}
                        </div>
                        <div className={`space-y-4 ${shopToggle ? 'transition-max-height duration-800 ease-in-out overflow-hidden max-h-[250px]' : 'transition-max-height duration-800 ease-in-out overflow-hidden max-h-[0px]'}`}>
                            <div>
                                <label className='block text-gray-700'>地址</label>
                                <input
                                    type="text"
                                    name='Address'
                                    placeholder='輸入地址'
                                    className='w-full px-3 py-2 border'
                                    onChange={(e) => setBillInfo({ ...billInfo, address: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className='block text-gray-700'>城市</label>
                                <input
                                    type="text"
                                    name='city'
                                    placeholder='輸入城市'
                                    className='w-full px-3 py-2 border'
                                    onChange={(e) => setBillInfo({ ...billInfo, city: e.target.value })}

                                />
                            </div>
                            <div>
                                <label className='block text-gray-700'>郵遞區號</label>
                                <input
                                    type="text"
                                    name='ZipCode'
                                    placeholder='輸入郵遞區號'
                                    className='w-full px-3 py-2 border'
                                    onChange={(e) => setBillInfo({ ...billInfo, zipCode: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>

                    {/* 付款方式 */}
                    <div className='shadow-sm shadow-gray-400 p-2 mb-6'>
                        <div className='flex items-center justify-between'
                            onClick={() => setPaymentToggle(!paymentToggle)}
                        >
                            <h3 className='text-lg font-semibold mb-2'>
                                付款方式
                            </h3>
                            {paymentToggle ? <FaAngleUp /> : <FaAngleDown />}
                        </div>
                        <div className={`space-y-4 ${paymentToggle ? 'transition-max-height duration-800 ease-in-out overflow-hidden max-h-[700px]' : 'transition-max-height duration-800 ease-in-out overflow-hidden max-h-[0px]'}`}>
                            <div className='flex'>
                                <input
                                    type="radio"
                                    name='payment'
                                    checked={paymentMethod === 'cod'}
                                    onChange={() => setPaymentMethod('cod')}
                                />
                                <label className='block ml-2 text-gray-700'>貨到付款</label>
                            </div>
                            <div className='flex'>
                                <input
                                    type="radio"
                                    name='payment'
                                    checked={paymentMethod === 'dc'}
                                    onChange={() => setPaymentMethod('dc')}
                                />
                                <label className='block ml-2 text-gray-700'>金融卡</label>
                            </div>
                            {paymentMethod === 'dc' &&
                                (
                                    <div className='bg-gray-100 p-4 rounded-lg mb-4'>
                                        <h3 className='text-xl font-semibold mb-4'>
                                            金融卡資訊
                                        </h3>
                                        <div className='mb-4'>
                                            <label className='block text-gray-700 font-semibold mb-2'>
                                                卡片號碼
                                            </label>
                                            <input
                                                type="text"
                                                placeholder='輸入卡號'
                                                className='border p-2 bg-white w-full rounded'
                                                required
                                            />
                                        </div>
                                        <div className='mb-4'>
                                            <label className='block text-gray-700 font-semibold mb-2'>
                                                持卡人名稱
                                            </label>
                                            <input
                                                type="text"
                                                placeholder='輸入持有人名稱'
                                                className='border p-2 bg-white w-full rounded'
                                                required
                                            />
                                        </div>
                                        <div className='flex justify-between mb-4'>
                                            <div className='w-1/2 mr-2'>
                                                <label className='block text-gray-700 font-semibold mb-2'>
                                                    到期日
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder='MM/YY'
                                                    className='border bg-white p-2 w-full rounded'
                                                    required
                                                />
                                            </div>
                                            <div className='w-1/2 ml-2'>
                                                <label className='block text-gray-700 font-semibold mb-2'>
                                                    CVV
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder='CVV'
                                                    className='border bg-white p-2 w-full rounded'
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                )}
                        </div>
                    </div>
                </div>
                <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md'>
                    <h3>Order Summary</h3>
                    <div>
                        {cart.products.map(product => (
                            <div key={product.id} className='flex justify-between'>
                                <div className='flex items-center'>
                                    <img
                                        src={product.img}
                                        alt={product.name}
                                        className='w-16 h-16 object-contain rounded'
                                    />
                                    <div className='ml-4'>
                                        <h4 className='text-md font-semibold'>{product.name}</h4>
                                        <p className='text-gray-600'>
                                            ${product.price} x {product.quantity}
                                        </p>
                                    </div>
                                </div>
                                <div className='flex items-center text-gray-800'>
                                    ${product.totalPrice}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='mt-4 border-t pt-4'>
                        <div className='flex justify-between'>
                            <span>Total Price</span>
                            <span>
                                ${cart.totalPrice.toFixed(2)}
                            </span>
                        </div>
                    </div>
                    <button
                        className='w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800'
                        onClick={handleOrder}
                    >
                        結算
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CheckOut