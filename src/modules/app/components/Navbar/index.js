import React from "react";
import {Link, NavLink} from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home">MapTalk</Link>

                    <button className="navbar-toggler"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarContent">
                        <span className="navbar-toggler-icon"/>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link"
                                         activeClassName="active"
                                         to="/home">Home</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link"
                                         activeClassName="active"
                                         to="/comingsoon/1">My Account</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link"
                                         activeClassName="active"
                                         to="/comingsoon/2">Followers</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link"
                                         activeClassName="active"
                                         to="/comingsoon/3">Following</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link"
                                         activeClassName="active"
                                         to="/comingsoon/4">About</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
