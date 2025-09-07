import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = ({ onLogout }) => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">Klickks</div>
            <ul className="navbar-links">
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><button onClick={onLogout} className="logout-btn">Logout</button></li>
            </ul>
        </nav>
    );
};

export default Navbar;
