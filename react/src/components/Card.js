import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Card(props){
    return(
        <div className="column">
                <div className="card">
                    <div className="cardTop">
                        <div className="leftCardTop">
                            <FontAwesomeIcon icon="heart" color="orangered" size="lg" />
                        </div>
                        <div className="center">
                            <h3 className="recipeTitle"> {props.recipeTitle} </h3>
                        </div>
                        <div className="rightCardTop">
                            <p className="cookingTime"> {props.cookingTime} </p>
                        </div>
                    </div>
                    <h1 className="recipeImage"> {props.recipeImage} </h1>
                    <p> {props.shortDescription} </p>
                </div>
        </div>
    )
}

export default Card