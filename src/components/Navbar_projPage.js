import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const NavbarProjectPage = ()=> {

    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className="Navbar" >
            <span className="nav-logo">
            <p><Link to={"/"}>Dinis Antunes</Link></p>
            </span>
            <div className={`nav-items ${isOpen && "open"}`}>
                <Link to={"/aboutme"}>Sobre mim</Link>
                <a href="#contactos">Contactos</a>
                 <div className="space_search_bar">
        </div>
            </div>
            <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                <div className="bar"></div>
            </div>
        </div>
    )
}

export default NavbarProjectPage





