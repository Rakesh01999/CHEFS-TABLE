import React, { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import PropTypes from 'prop-types';

const Recipes = ({ handleAddToCart }) => {
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => {
                setRecipes(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error("Error fetching recipes:", error);
                setIsLoading(false);
            });
    }, []);

    return (
        <div className=" container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Delicious Recipes</h2>
            {isLoading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recipes.map(recipe => (
                        <Recipe 
                            key={recipe.id} 
                            recipe={recipe} 
                            handleAddToCart={handleAddToCart}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

Recipes.propTypes = {
    handleAddToCart: PropTypes.func.isRequired
};

export default Recipes;