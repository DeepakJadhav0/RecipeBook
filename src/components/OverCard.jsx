import React from 'react'

export default function OverCard({ item, handelClick }) {
  const ingredients = []
  for (let i = 1; i <= 20; i++) {
    const ingredient = item[`strIngredient${i}`]
    const measure = item[`strMeasure${i}`]
    if (ingredient && ingredient.trim() !== "") {
      ingredients.push({ ingredient, measure })
    }
  }

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10"
        onClick={handelClick}
      ></div>

      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-3/4 lg:w-1/2 max-h-[90vh] bg-white p-6 rounded-lg shadow-lg z-20 overflow-y-auto">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">{item.strMeal}</h2>
        <img
          src={item.strMealThumb}
          alt={item.strMeal}
          className="h-48 w-full object-cover rounded-md mb-4"
        />

        <h3 className="text-xl font-bold text-gray-800 mb-2">Ingredients:</h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mb-4">
          {ingredients.map((ing, idx) => (
            <div key={idx} className="flex flex-col items-center bg-amber-100 p-2 rounded-md shadow-sm">
              <img
                src={`https://www.themealdb.com/images/ingredients/${ing.ingredient}-Small.png`}
                alt={ing.ingredient}
                className="h-16 w-16 object-contain mb-1"
              />
              <p className="text-center text-sm">{ing.ingredient}</p>
              <p className="text-center text-xs font-light">{ing.measure}</p>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-2">Instructions:</h3>
        <p className="text-gray-700 whitespace-pre-line mb-4">{item.strInstructions}</p>

        <div className="text-center mt-4">
          <button
            onClick={handelClick}
            className="bg-green-800 text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
          >
            Close
          </button>
        </div>
      </div>
    </>
  )
}
