import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="navBar">
            <div className="navBar__navContainer">
                <span className="navBar__logo">
                    Booking
                </span>
                <div className="navBar__navItems">
                    <button className="navBar__navButton">Register</button>
                    <button className="navBar__navButton">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar