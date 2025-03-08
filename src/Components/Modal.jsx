import React, { useState } from 'react'

const Modal = ({ isModalOpen, setIsModalOpen, children }) => {
    if (!isModalOpen) {
        return null
    }

    return (
        <div style={{ background: 'rgba(128, 128, 128, 0.5)' }} className='fixed inset-0 flex items-center justify-center z-50 '>
            <div className='bg-white rounded-lg shadow-lg p-6 w-full max-w-md'>
                <button className='absolute top-4 right-4 text-gray-300 text-3xl'
                    onClick={e => setIsModalOpen(false)}
                >
                    X
                </button>
                {children}
            </div>
        </div>
    )
}

export default Modal