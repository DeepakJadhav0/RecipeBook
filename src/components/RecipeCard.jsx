import { useState, useEffect } from 'react';

function RecipeCard() {
  const [meal, setMeal] = useState(null);
  const [isOpen, setIsOpen] = useState(false); // Track if the card is clicked or not

  // Fetch meal data on component mount
  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
      .then(response => response.json())
      .then(data => setMeal(data.meals[0])); // Assuming the first result is what you want
  }, []);

  if (!meal) return <div>Loading...</div>;

  const handleCardClick = () => {
    setIsOpen(true); // Set to true when card is clicked
  };

  const closeModal = () => {
    setIsOpen(false); // Close the details view
  };

  const getIngredientImage = (ingredient) => {
    return `https://www.themealdb.com/images/ingredients/${ingredient}-Small.png`;
  };

  return (
    <div className="relative">
      {/* Background overlay when clicked */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 z-10" onClick={closeModal}></div>
      )}

      {/* The Recipe Card */}
      <div
        className={`max-w-sm mx-auto bg-white border-2 border-gray-300 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ${isOpen ? 'scale-105' : ''}`}
        onClick={handleCardClick}
      >
        {/* Dish Image */}
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full h-64 object-cover cursor-pointer"
        />
        
        {/* Dish Name */}
        <div className="p-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">{meal.strMeal}</h2>
        </div>
      </div>

      {/* Show Details Section (Visible after click) */}
      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center z-20">
          <div className="bg-white p-8 rounded-xl shadow-lg w-[80%] md:w-[60%] max-w-3xl">
            <div className="text-center">
              {/* Dish Image */}
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-64 object-cover mb-4 rounded-lg"
              />
              {/* Dish Name */}
              <h2 className="text-3xl font-bold text-gray-800 mb-3">{meal.strMeal}</h2>
              {/* Category */}
              <p className="text-lg text-gray-600 mb-4">{meal.strCategory}</p>
              
              {/* Ingredients */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Ingredients:</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-gray-700 mb-4">
                {meal.strIngredient1 && (
                  <div className="flex flex-col items-center">
                    <img
                      src={getIngredientImage(meal.strIngredient1)}
                      alt={meal.strIngredient1}
                      className="w-16 h-16 object-cover mb-2"
                    />
                    <p>{meal.strIngredient1}</p>
                  </div>
                )}
                {meal.strIngredient2 && (
                  <div className="flex flex-col items-center">
                    <img
                      src={getIngredientImage(meal.strIngredient2)}
                      alt={meal.strIngredient2}
                      className="w-16 h-16 object-cover mb-2"
                    />
                    <p>{meal.strIngredient2}</p>
                  </div>
                )}
                {meal.strIngredient3 && (
                  <div className="flex flex-col items-center">
                    <img
                      src={getIngredientImage(meal.strIngredient3)}
                      alt={meal.strIngredient3}
                      className="w-16 h-16 object-cover mb-2"
                    />
                    <p>{meal.strIngredient3}</p>
                  </div>
                )}
                {meal.strIngredient4 && (
                  <div className="flex flex-col items-center">
                    <img
                      src={getIngredientImage(meal.strIngredient4)}
                      alt={meal.strIngredient4}
                      className="w-16 h-16 object-cover mb-2"
                    />
                    <p>{meal.strIngredient4}</p>
                  </div>
                )}
                {meal.strIngredient5 && (
                  <div className="flex flex-col items-center">
                    <img
                      src={getIngredientImage(meal.strIngredient5)}
                      alt={meal.strIngredient5}
                      className="w-16 h-16 object-cover mb-2"
                    />
                    <p>{meal.strIngredient5}</p>
                  </div>
                )}
                {/* Add more ingredients as needed */}
              </div>

              {/* Recipe Link */}
              <a
                href={meal.strSource}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-600 transition duration-300"
              >
                See Full Recipe
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RecipeCard;
