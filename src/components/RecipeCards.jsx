import React, { useState } from 'react'
import OverCard from './OverCard'

export default function RecipeCards({ recipe }) {
  const [selectedRecipe, setSelectedRecipe] = useState(null)

  function handleOpen(item) {
    setSelectedRecipe(item)
  }

  function handleClose() {
    setSelectedRecipe(null)
  }

  return (
    <div className='relative flex flex-wrap justify-center gap-5 my-6 p-5'>
      {recipe.map((item) => (
        <div
          key={item.idMeal}
          onClick={() => handleOpen(item)}
          className='bg-amber-500 p-3 w-[280px] rounded-md flex flex-col shadow-2xl hover:scale-105 transition duration-200 cursor-pointer'
        >
          <img
            src={item.strMealThumb}
            alt={item.strMeal}
            className='h-52 w-52 border-2 border-white rounded-md object-cover'
          />
          <p className='text-xl font-bold text-gray-800 pt-1.5'>
            {item.strMeal} <br /> 
            <span className='text-md font-extralight'>{item.strCategory}</span>
          </p>
        </div>
      ))}

      {/* Modal */}
      {selectedRecipe && (
        <OverCard item={selectedRecipe} handelClick={handleClose} />
      )}
    </div>
  )
}
