import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'

const CheckOut = () => {
    const [billingToggle, setBillingToggle] = useState(true)

    return (
        <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
            <h3 className='text-2xl font-semibold mb-4'>確認</h3>
            <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
                <div className='md:w-2/3'>
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
                                <label className='block text-gray-700'>名稱</label>
                                <input
                                    type="text"
                                    name='phone'
                                    placeholder='輸入電話'
                                    className='w-full px-3 py-2 border'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border'></div> */}
            </div>
        </div>
    )
}

export default CheckOut