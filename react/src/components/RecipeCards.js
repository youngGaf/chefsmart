import React from "react"
import Card from "./Card.js"

function RecipeCards(){
    return(
    <div>
        <div className="row">
            <Card
                recipeTitle="Chicken Parmesan"
                cookingTime="45 mins"
                recipeImage="Recipe Image"
                shortDescription="A classic italian dish prepared with tomato sauce and mozerella with a few additions"
            />
            <Card
                recipeTitle="Spaghetti Meatballs"
                cookingTime="30 mins"
                recipeImage="Recipe Image"
                shortDescription="A simple and easy to make Spaghetti recipe that guides you through making the sauce from scratch"
            />
            <Card
                recipeTitle="Lamb Curry"
                cookingTime="1 hour"
                recipeImage="Recipe Image"
                shortDescription="A appetizing and simple that can be served as a main or side dish"
            />
        </div>
    </div>
    )
}
export default RecipeCards