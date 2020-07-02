import React from "react"
import SearchTag from "./SearchTag.js"


function SearchTagContainer(){
    return(
    <div className="searchTagContainer">
        <SearchTag
            name="Chicken"
        />
        <SearchTag
            name="Tomatoes"
        />
    </div>
    )
}

export default SearchTagContainer