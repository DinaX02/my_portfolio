import React from "react";
import iconEmail from '../assets/email_green.svg';
import iconLinkdin from '../assets/linkedin_green.svg';
import iconInstagram from '../assets/instagram_green.svg';
import iconGitHub from '../assets/github_green.svg';
import Contactos from "./Contactos";

// mesmo módulo (e motion) da homepage, com as cores do projeto
const ContactosBoomerang = () => (
  <Contactos
    icones={{ email: iconEmail, linkedin: iconLinkdin, instagram: iconInstagram, github: iconGitHub }}
    classeSecao="space_contacto_boomerang"
    classeTitulo="title_marcado_boomerang"
  />
);

export default ContactosBoomerang;
