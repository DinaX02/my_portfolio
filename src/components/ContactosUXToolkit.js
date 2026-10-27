import React from "react";
import iconEmail from '../assets/email_orange.svg';
import iconLinkdin from '../assets/linkedin_orange.svg';
import iconInstagram from '../assets/instagram_orange.svg';
import iconGitHub from '../assets/github_orange.svg';
import Contactos from "./Contactos";

// mesmo módulo (e motion) da homepage, com as cores do projeto
const ContactosUXToolkit = () => (
  <Contactos
    icones={{ email: iconEmail, linkedin: iconLinkdin, instagram: iconInstagram, github: iconGitHub }}
    classeSecao="space_contacto_uxtoolkit"
    classeTitulo="title_marcado_uxtoolkit"
  />
);

export default ContactosUXToolkit;
