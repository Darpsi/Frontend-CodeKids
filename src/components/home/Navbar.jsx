import React from "react";
import "../../assets/styles/home/Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="lista-nav">
                <li><p className="codekids">Codekids</p></li>
                <li><a className="links-nav" href="#section3">Servicios</a></li>
            </ul>
            <ul className="lista-nav">
                <li><a className="links-nav" href="/login">Inicia Sesión</a></li>
                <li><a className="links-nav-register" href="/register">Registrarse</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
