import {
    faBed,
    faCalendarDays,
    faCar,
    faGamepad,
    faPerson,
    faPlane,
    faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";

import "./Header.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const Header = () => {
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        room: 1,
        children: 0,
    });
    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "inc" ? options[name] + 1 : options[name] - 1,
            };
        });
    };
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
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad aliquid
                    eaque veritatis atque quae alias?
                </p>
                <button className="header__button">SignIn / Register</button>
                <div className="header__search">
                    <div className="header__search-item">
                        <FontAwesomeIcon
                            icon={faBed}
                            className="header__search-item-icon"
                        />
                        <input
                            type="text"
                            className="header__search-item-input"
                            placeholder="Where are you going ?"
                        />
                    </div>
                    <div className="header__search-item">
                        <FontAwesomeIcon
                            icon={faCalendarDays}
                            className="header__search-item-icon"
                        />
                        <span
                            onClick={() => {
                                setOpenDate(!openDate);
                                setOpenOptions(false);
                            }}
                            className="header__search-item-text"
                        >
                            {`
                                    ${format(date[0].startDate, "dd-MM-yyyy")}
                                    to
                                    ${format(date[0].endDate, "dd-MM-yyyy")}
                                `}
                        </span>
                        {openDate && !openOptions && (
                            <DateRange
                                editableDateInputs={true}
                                onChange={(item) => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className="header__search-item-date-range"
                            />
                        )}
                    </div>
                    <div className="header__search-item">
                        <FontAwesomeIcon
                            icon={faPerson}
                            className="header__search-item-icon"
                        />
                        <span
                            onClick={() => {
                                setOpenOptions(!openOptions);
                                setOpenDate(false);
                            }}
                            className="header__search-item-text"
                        >
                            {`
                                ${options.adult} adult - ${options.children} children - ${options.room} room
                            `}
                        </span>
                        {openOptions && !openDate && (
                            <div className="options">
                                <div className="option__item">
                                    <span className="option__text">Adult</span>
                                    <div className="option__counter">
                                        <button
                                            disabled={options.adult < 1}
                                            className="option__counter-button"
                                            onClick={() => handleOption("adult", "dec")}
                                        >
                                            -
                                        </button>
                                        <span className="option__counter-number">
                                            {options.adult}
                                        </span>
                                        <button  
                                            className="option__counter-button"
                                            onClick={() => handleOption("adult", "inc")}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <div className="option__item">
                                    <span className="option__text">Children</span>
                                    <div className="option__counter">
                                        <button
                                            disabled={options.children < 1}
                                            className="option__counter-button"
                                            onClick={() => handleOption("children", "dec")}
                                        >
                                            -
                                        </button>
                                        <span className="option__counter-number">
                                            {options.children}
                                        </span>
                                        <button
                                            className="option__counter-button"
                                            onClick={() => handleOption("children", "inc")}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <div className="option__item">
                                    <span className="option__text">Room</span>
                                    <div className="option__counter">
                                        <button
                                            disabled={options.room < 1}
                                            className="option__counter-button"
                                            onClick={() => handleOption("room", "dec")}
                                        >
                                            -
                                        </button>
                                        <span className="option__counter-number">
                                            {options.room}
                                        </span>
                                        <button
                                            className="option__counter-button"
                                            onClick={() => handleOption("room", "inc")}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="header__search-item">
                        <button className="header__search-button">
                            <span className="header__search-button-text">Search</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
