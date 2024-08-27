import React from 'react';
import PropTypes from 'prop-types';
import { IoTimeOutline } from "react-icons/io5";
import { AiOutlineFire } from "react-icons/ai";

const Recipe = ({ recipe, handleAddToCart }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
            <img 
                src={recipe.recipe_image} 
                alt={recipe.recipe_name}
                className="w-full h-48 object-cover"
            />
            <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">{recipe.recipe_name}</h2>
                <p className="text-gray-600 mb-4">{recipe.short_description}</p>
                
                <h3 className="text-lg font-medium mb-2 text-gray-800">Ingredients:</h3>
                <ul className="list-disc list-inside mb-4 text-gray-600">
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
                
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center text-gray-600">
                        <IoTimeOutline className="w-5 h-5 mr-1" />
                        <span>{recipe.preparing_time} minutes</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                        <AiOutlineFire className="w-5 h-5 mr-1" />
                        <span>{recipe.calories} calories</span>
                    </div>
                </div>
                
                <button 
                    onClick={() => handleAddToCart(recipe)} 
                    className="w-full bg-green-400 text-white py-2 px-4 rounded-full hover:bg-green-500 transition-colors duration-300"
                >
                    Want to Cook
                </button>
            </div>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.shape({
        recipe_image: PropTypes.string.isRequired,
        recipe_name: PropTypes.string.isRequired,
        short_description: PropTypes.string.isRequired,
        ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
        preparing_time: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired,
    }).isRequired,
    handleAddToCart: PropTypes.func.isRequired
};

export default Recipe;

