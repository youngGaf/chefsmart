import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navbar(){
    return(
        <nav>
            <div className="left">
                <FontAwesomeIcon icon="heart" color="orangered" size="lg" />
            </div>
            <div className="center">
                <span>
                    <a href="https://github.com/alistairmccarten/chefsmart" >
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