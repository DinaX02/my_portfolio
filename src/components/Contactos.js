import React from "react";
import iconEmail from '../assets/email.png';
import iconLinkdin from '../assets/linkdin (1).png';
import iconInstagram from '../assets/instagram.png';
import iconGitHub from '../assets/github.png';
import ilustrationContact from "../assets/ilustracao_contact.svg"
import "../App.css";

const Contactos = ()=> {

    return(
        <div id="contactos" className="space_contacto">
                 <p id="projetos" className="introduction">
        Como me contactar{" "}
      </p>
<h1 id="contactos" className="big_title">Contactos.</h1>

<div className="content_skills">
    <div>
    <p>Vamos criar juntos algo incrível! Entre em contacto :)
        </p></div>
        <div className="conct_geral_text_img">
            <div className="text_contaaa">
        <div className="icons_contactos">
            <div className="center_content_icon">
            <img className="icons_size_contact" src={iconEmail}/>
            <h5 className="responsive_names">dinis.p.antunes2002@gmail.com</h5></div>
            </div>

            <div className="icons_contactos">
            <div className="center_content_icon">
            <a href="https://www.linkedin.com/in/dinis-antunes-96b79b276/" target="blank"><img className="icons_size_contact" src={iconLinkdin}/></a>
            <a href="https://www.linkedin.com/in/dinis-antunes-96b79b276/" target="blank"><h5 className="responsive_names">Dinis Antunes</h5></a></div>
            </div>

            <div className="icons_contactos">
            <div className="center_content_icon">
            <a href="https://www.instagram.com/dinisantunes02/" target="blank"><img className="icons_size_contact" src={iconInstagram}/></a>
            <a href="https://www.instagram.com/dinisantunes02/" target="blank"><h5 className="responsive_names">@dinisantunes02</h5></a></div>
            </div>

            <div className="icons_contactos">
            <div className="center_content_icon">
           <a href="https://github.com/DinaX02" target="blank"> <img className="icons_size_contact" src={iconGitHub}/></a>
           <a href="https://github.com/DinaX02" target="blank">  <h5 className="responsive_names">Dinis Antunes | Dinax02</h5></a></div>
            </div></div>
            
            <div className="img_contact">
<img className="img_contact_svg" src={ilustrationContact}/></div>
            </div>
        </div>
       
        </div>
    )
}

export default Contactos





