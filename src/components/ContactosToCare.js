import React from "react";
import iconEmail from '../assets/email_tocare.svg';
import iconLinkdin from '../assets/linkedin_tocare.svg';
import iconInstagram from '../assets/instagram_tocare.svg';
import iconGitHub from '../assets/github_tocare.svg';
import Contactos from "./Contactos";

// mesmo módulo (e motion) da homepage, com as cores do projeto
const ContactosToCare = () => (
  <Contactos
    icones={{ email: iconEmail, linkedin: iconLinkdin, instagram: iconInstagram, github: iconGitHub }}
    classeSecao="space_contacto_tocare"
    classeTitulo="title_marcado_tocare"
  />
);

export default ContactosToCare;
