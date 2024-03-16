import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])

    return (
        <div>
            {/* <h3>Recipes: {recipes.length}</h3> */}
            <div className="w-[890px] p-6 grid grid-cols-2 ml-40">
                {
                    recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe}></Recipe>)
                }
            </div>
            
        </div>
    );
};

export default Recipes;