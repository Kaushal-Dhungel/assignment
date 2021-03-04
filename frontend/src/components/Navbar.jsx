import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const navStyle = {
        color : "#ff006a",
    }

    const menuStyle = {
        color : "#ff006a",
        fontSize : "35px"
    }

    return (
        <div className = "container mt-3">
            <nav className="navbar navbar-expand-lg navbar-secondary">

                <button className="navbar-toggler" type="button" data-toggle="collapse" 
                    data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"
                    style = {menuStyle}
                    ><i className="fas fa-bars"></i></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

                    <ul className="container navbar-nav mr-auto mt-2 mt-lg-0">

                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/"
                            activeStyle={navStyle}
                            >Home <span className="sr-only">(current)</span></NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/addstudent"
                            activeStyle={navStyle}
                            >Add Student</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/leaderboard"
                            activeStyle={navStyle}
                            >Leaderboard</NavLink>
                        </li>
                    </ul>
                </div>
                </nav>
        </div>
    )
}

export default Navbar;