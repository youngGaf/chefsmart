import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from "@fortawesome/free-solid-svg-icons"

function SearchTags(){
    return(
    <div className="searchTagContainer">
        <div className="searchTag">
            <FontAwesomeIcon icon="times" className="crossIcon" />
            <h4 className="ingrediant"> Chicken </h4>
        </div>
        <div className="searchTag">
            <FontAwesomeIcon icon="times" className="crossIcon" />
            <h4 className="ingrediant"> Tomatoes </h4>
        </div>
        <div className="searchTag">
            <FontAwesomeIcon icon="times" className="crossIcon" />
            <h4 className="ingrediant"> Basil </h4>
        </div>
        <div className="searchTag">
            <FontAwesomeIcon icon="times" className="crossIcon" />
            <h4 className="ingrediant"> Parmesan  </h4>
        </div>
        <div className="searchTag">
            <FontAwesomeIcon icon="times" className="crossIcon" />
            <h4 className="ingrediant"> Oranges </h4>
        </div>
        <div className="searchTag">
            <FontAwesomeIcon icon="times" className="crossIcon" />
            <h4 className="ingrediant"> Spaghetti  </h4>
        </div>
        <div className="searchTag">
            <FontAwesomeIcon icon="times" className="crossIcon" />
            <h4 className="ingrediant"> Apples  </h4>
        </div>
    </div>
    )
}

export default SearchTags