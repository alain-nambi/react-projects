import { 
    faBed, faCar, faGamepad, faPlane, faTaxi
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";

import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__list">
                    <div className="header__list--item active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="header__list--item">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="header__list--item">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className="header__list--item">
                        <FontAwesomeIcon icon={faGamepad} />
                        <span>Attractions</span>
                    </div>
                    <div className="header__list--item">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header