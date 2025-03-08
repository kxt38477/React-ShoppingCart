import React from 'react'
import ManCategory from '../assets/Images/man.png'
import WomanCategory from '../assets/Images/woman.png'
import KidCategory from '../assets/Images/kid.png'



const Category = () => {
    const categories = [
        {
            title: 'Men',
            imageUrl: ManCategory
        },
        {
            title: 'Women',
            imageUrl: WomanCategory
        }, 
        {
            title: 'Kids',
            imageUrl: KidCategory
        }
    ]

    return (
        <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 cursor-pointer'>
            {categories.map((cat, index)=>(
                <div key={index} className='relative h-64 transform transition-transform duration-300 hover:scale-105'>
                    <img src={cat.imageUrl} className='w-full h-full object-cover rounded-lg shadow-md'/>
                    <div className='absolute top-20 left-12'>
                        <p className='text-xl font-bold'>{cat.title}</p>
                        <p className='text-gray-600'>View All</p>
                    </div>

                </div>

            ))}
        </div>
    )
}

export default Category