import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../App.css";

// navegação partilhada por todas as páginas; className mantém o estilo de cada página
const SiteNavbar = ({ className, projetosHref = "/projetos", mostrarProjetos = true }) => {
  const [isOpen, setIsOpen] = useState(false);
  const fechar = () => setIsOpen(false);

  // Esc fecha o menu mobile
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return (
    <header className={className}>
      <span className="nav-logo">
        <p>
          <Link to="/" aria-label="Dinis Antunes - página inicial">Dinis Antunes</Link>
        </p>
      </span>
      <nav id="menu-principal" aria-label="Principal" className={`nav-items ${isOpen ? "open" : ""}`}>
        {mostrarProjetos &&
          (projetosHref.startsWith("#") ? (
            <a href={projetosHref} onClick={fechar}>Projetos</a>
          ) : (
            <NavLink to={projetosHref} onClick={fechar}>Projetos</NavLink>
          ))}
        <NavLink to="/aboutme" onClick={fechar}>Sobre mim</NavLink>
        <a href="#contactos" onClick={fechar}>Contactos</a>
      </nav>
      <button
        type="button"
        className={`nav-toggle ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="menu-principal"
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
      >
        <span className="bar"></span>
      </button>
    </header>
  );
};

export default SiteNavbar;
