import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { SimilarRecipes } from "../components/SimilarRecipes";
import axios from "axios";
import { Badge } from "primereact/badge";
import { ExtendedIngredients } from "../components/ExendedIngredients";
import { products } from "./products";
import { RecipeTime } from "../components/RecipeTime";

export function Recipe() {
  const [serchParams, setSerchParams] = useSearchParams();
  const id = serchParams.get("id");
  
  const recipe = products.recipes[0];  


    //  const [recipe, setRecipe] = useState({});
    
    //  useEffect (() => {
    //      axios.get("https://api.spoonacular.com/recipes/" + id +"/information?apiKey=5384da7c15dc4a60afcdbb2f492e9a0f")
    //  .then((res) => setRecipe(res.data));
    //  }, [id])


    return recipe ? (
        <>
        <h1> {recipe.title}</h1>
        <RecipeTime recipe={recipe}/>
        <ExtendedIngredients extendedIngredients={recipe.extendedIngredients}/>;
        <img src= {recipe.image} alt="" />
        <hr />
        <analyzedInstructions analyzedInstructions={recipe.analyzedInstructions}/>
        <SimilarRecipes id={id} />
        </>

    ) : <></>;
}


