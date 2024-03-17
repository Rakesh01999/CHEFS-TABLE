import PropTypes from 'prop-types';
import { IoTimeOutline } from "react-icons/io5";
import { AiOutlineFire } from "react-icons/ai";

const Recipe = ({ recipe, handleAddToCart }) => {
    // console.log(recipe);
    return (
        <div>
            {/* <h3>Recipe: {recipe.recipe_name}</h3> */}
            <div class="card w-96 h-[684px] bg-base-100 shadow-xl mt-6">
                <figure class="px-6 pt-6">
                    <img src={recipe.recipe_image} class="rounded-xl" />
                </figure>
                <div class="card-body">
                    <h2 class="text-[20px] font-semibold">{recipe.recipe_name}</h2>
                    <p className="text-[16px]">{recipe.short_description}</p>
                    <h2 class="text-[20px] font-medium mt-10">Ingredients: 6</h2>
                    {/* <p className="text-[16px] ">{recipe.ingredients}</p> */}

                    {/* <ul>
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul> */}

                    <div className='ml-6'>
                        <ul style={{ listStyleType: 'disc' }}>
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex justify-between mt-10">
                        <div className="flex flex-row gap-1">
                            <IoTimeOutline className="w-[18px] h-[18px]" />
                            <p>{recipe.preparing_time} minutes</p>
                        </div>
                        <div className="flex flex-row gap-1">
                            <AiOutlineFire className="w-[18px] h-[18px]" />
                            <p>{recipe.calories} calories</p>
                        </div>
                    </div>
                    <div class="card-actions mt-6">
                        <button onClick={() => handleAddToCart(recipe)} class="btn bg-[#0BE58A] rounded-full w-[170px] h-[49px]">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Recipe.PropTypes = {
    recipe: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func
}

export default Recipe;