import React from "react";
import NavbarAbout from "../components/Navbar_about";
import PercursoAcademico from "../components/PercursoAcademico";
import Skills from "../components/Skills";
import "../App.css";
import Contactos from "../components/Contactos";
import HeroAbout from "../components/heroAbout";
import Footer from "../components/Footer";
const About = () => {
  return (
    <div>
      <NavbarAbout/>
      <HeroAbout/>
   <PercursoAcademico />
      <Skills />
      <Contactos />
<Footer/>
    </div>
  );
};

export default About;
