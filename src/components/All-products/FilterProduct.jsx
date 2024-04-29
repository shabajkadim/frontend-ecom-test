import React from 'react'

const FilterProduct = ({category, onClick,isActive}) => {
  return (
    <div onClick={onClick}>
      <div className={`w-20 h-20 text-3xl text-center cursor-pointer p-5 text-slate-800 bg-yellow-500 rounded-full ${isActive? " bg-red-900 text-white" : "bg-yellow-500" }`}>
      <i class="fa-solid fa-utensils"></i>
      </div>

     <p className='text-center font-medium my-1 capitalize'>{category}</p>
    </div>
  )
}

export default FilterProduct
