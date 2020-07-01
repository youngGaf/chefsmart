import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navbar(){
    return(
        <nav>
            <div className="left">
                <a href="https://fontawesome.com" className="heartLink"> {/*Change this URL*/}
                    <FontAwesomeIcon icon="heart" color="orangered" size="lg" />
                </a>
            </div>
            <div className="center">
                <span>
                    <a href="https://github.com/alistairmccarten/chefsmart" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'github']} size="2x"/>
                    </a>
                </span>
                <span>
                    <a href="https://twitter.com">
                        <FontAwesomeIcon icon={['fab', 'twitter']} size="2x"/>
                    </a>
                </span>
            </div>
            <div className="right"> 
                <a href="url" className="login"> Login </a> 
            </div>
        </nav>
    )
}
export default Navbar