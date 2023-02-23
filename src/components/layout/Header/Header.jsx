import { 
    faBed, faCalendarDays, faCar, faGamepad, faPerson, faPlane, faTaxi
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";

import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__list">
                    <div className="header__list-item active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="header__list-item">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="header__list-item">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className="header__list-item">
                        <FontAwesomeIcon icon={faGamepad} />
                        <span>Attractions</span>
                    </div>
                    <div className="header__list-item">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>
                <h1 className="header__title">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h1>
                <p className="header__description">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad aliquid eaque veritatis atque quae alias?
                </p>
                <button className="header__button">
                    SignIn / Register
                </button>
                <div className="header__search">
                    <div className="header__search-item">
                        <FontAwesomeIcon 
                            icon={faBed} 
                            className="header__search-item-icon"
                        />
                        <input 
                            type="text" 
                            className="header__search-input"
                            placeholder="Where are you going ?"
                        />
                    </div>
                    <div className="header__search-item">
                        <FontAwesomeIcon 
                            icon={faCalendarDays} 
                            className="header__search-item-icon"
                        />
                        <span className="header__search-text">Date to date</span>
                    </div>
                    <div className="header__search-item">
                        <FontAwesomeIcon 
                            icon={faPerson} 
                            className="header__search-item-icon"
                        />
                        <span className="header__search-text">2 Adults 2 children</span>
                    </div>
                    <div className="header__search-item">
                        <button className="header__search-button">
                            <span className="header__search-text">Search</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header