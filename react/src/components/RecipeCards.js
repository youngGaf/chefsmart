import React from "react"
import Card from "./Card.js"

function RecipeCards(){
    return(
    <div>
        <div className="row">
            <Card
                recipeTitle="Spagetti Meatballs"
                cookingTime="30 mins"
            />
            <Card
                recipeTitle="Spagetti Meatballs"
                cookingTime="30 mins"
            />
            <Card
                recipeTitle="Spagetti Meatballs"
                cookingTime="30 mins"
            />
        </div>
    </div>
    )
}
export default RecipeCards