import React from "react";
import "../assets/styles/Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="lista-nav">
                <li><a className="links-nav" href="/">Servicios</a></li>
                <li><a className="links-nav" href="/login">Inicia Sesión</a></li>
                <li><a className="links-nav-register" href="/register">Regístrate</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
