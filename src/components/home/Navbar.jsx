import "../../assets/styles/home/Navbar.css";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <ul className="lista-nav">
        <li><p className="codekids">Codekids</p></li>
        <li className="menu-toggle">
          <button onClick={() => setMenuOpen(!menuOpen)} className="hamburger">
            ☰
          </button>
        </li>
      </ul>

      <ul className={`lista-nav right-nav ${menuOpen ? "open" : ""}`}>
        <li><a className="links-nav" href="#section3">Servicios</a></li>
        <li><a className="links-nav" href="/login">Inicia Sesión</a></li>
        <li><a className="links-nav-register" href="/register">Registrarse</a></li>
      </ul>
    </nav>
  );
}