import React from "react";
import iconEmail from '../assets/email.png';
import iconLinkdin from '../assets/linkdin (1).png';
import iconInstagram from '../assets/instagram.png';
import iconGitHub from '../assets/github.png';
import "../App.css";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const iconHover = { scale: 1.15, rotate: -6 };
const iconTap = { scale: 0.95 };

const Contactos = ()=> {

    return(
        <div className="space_contacto">

<Reveal className="container_projectsHp">

<h2 id="contactos" className="fontsize_tags"><span className="title_marcado_koru">Contactos.</span></h2>

<p className="texto_contactos">Vamos criar juntos algo incrível! Entre em contacto :)</p>
</Reveal>

<Reveal delay={0.15} className="content_contactoss">

  <div className="conct_geral_text_img">
    <div className="text_contaaa">

      <div className="icons_contactos">
        <div className="center_content_icon">
          <img className="icons_size_contact" src={iconEmail} alt=""/>
          <p className="responsive_names"><a href="mailto:dinis.p.antunes2002@gmail.com">dinis.p.antunes2002@gmail.com</a></p>
        </div>
      </div>
    </div>

<div className="three_icons">

    <motion.div className="icons_contactos" whileHover={iconHover} whileTap={iconTap}>
      <div className="center_content_icon">
        <a href="https://www.linkedin.com/in/dinis-antunes-96b79b276/" target="_blank" rel="noopener noreferrer"><img className="icons_size_contact" src={iconLinkdin} alt="LinkedIn (abre num novo separador)"/></a>
      </div>
    </motion.div>

    <motion.div className="icons_contactos" whileHover={iconHover} whileTap={iconTap}>
      <div className="center_content_icon">
        <a href="https://www.instagram.com/dinisantunes02/" target="_blank" rel="noopener noreferrer"><img className="icons_size_contact" src={iconInstagram} alt="Instagram (abre num novo separador)"/></a>
      </div>
    </motion.div>

    <motion.div className="icons_contactos" whileHover={iconHover} whileTap={iconTap}>
      <div className="center_content_icon">
        <a href="https://github.com/DinaX02" target="_blank" rel="noopener noreferrer"> <img className="icons_size_contact" src={iconGitHub} alt="GitHub (abre num novo separador)"/></a>
      </div>
    </motion.div>

</div>

  </div>
</Reveal>

        </div>
    )
}

export default Contactos
