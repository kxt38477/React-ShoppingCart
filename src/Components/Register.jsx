import React from 'react'

const Register = ({openLogin}) => {
    return (
        <div>
            <h2 className='text-2xl font-bold mb-4'>Sign Up</h2>
            <form>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Email</label>
                    <input type="text" className='w-full px-3 py-2 border'
                        placeholder='輸入名字' />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700'>Password</label>
                    <input type="password" className='w-full px-3 py-2 border'
                        placeholder='輸入密碼' />
                </div>

                <div className='mb-4'>
                    <button type='submit' className='w-full bg-red-600 text-white py-2'>註冊</button>
                </div>
            </form>
            <div className='text-center'>
                <span className='text-gray-700'>已經有帳號了嗎? </span>
                <button className='text-red-800' onClick={openLogin}>登入</button>
            </div>
        </div>)
}

export default Register