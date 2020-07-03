import React from "react"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function SearchTag(props){
    return(
        <div className="searchTag">
            <FontAwesomeIcon icon="times" className="crossIcon"/>
            <h4 className="ingrediant"> {props.name} </h4>
        </div>
    )
}
export default SearchTag