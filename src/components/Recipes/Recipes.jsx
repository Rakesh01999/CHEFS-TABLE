import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import PropTypes from 'prop-types'

const Recipes = ({handleAddToCart}) => {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])

    return (
        <div className="mx-10 md:mx-32">
            {/* <h3>Recipes: {recipes.length}</h3> */}
            <div className="w-[890px] p-6 grid md:grid-cols-2">
                {
                    recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} handleAddToCart={handleAddToCart}></Recipe>)
                }
            </div>

        </div>
    );
};

Recipes.protoTypes = {
    handleAddToCart: PropTypes.func   
}

export default Recipes;