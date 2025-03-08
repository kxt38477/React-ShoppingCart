import React, { useState } from 'react'

const ChangeAddress = ({ setAddress, setIsModalOpen }) => {
    const [newAddress, setNewAddress] = useState('')
    const handleSave = () => {
        setAddress(newAddress)
        setIsModalOpen(false)
    }

    return (
        <div>
            <input
                type="text"
                placeholder='輸入地址'
                className='border p-2 w-full mb-4'
                onChange={e => setNewAddress(e.target.value)}
            />
            <div className='flex justify-end'>
                <button className='bg-gray-500 text-white py-2 px-4 rounded mr-2'
                    onClick={e => setIsModalOpen(false)}
                >
                    取消
                </button>
                <button className='bg-blue-500 text-white py-2 px-4 rounded'
                    onClick={handleSave}
                >
                    儲存地址
                </button>

            </div>
        </div>
    )
}

export default ChangeAddress