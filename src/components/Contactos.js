import React from "react";
import iconEmail from '../assets/email.png';
import iconLinkdin from '../assets/linkdin (1).png';
import iconInstagram from '../assets/instagram.png';
import iconGitHub from '../assets/github.png';
import "../App.css";

const Contactos = ()=> {

    return(
        <div className="space_contacto">
                 {/* <p id="projetos" className="introduction">
        Como me contactar{" "}
      </p> */}

<div className="title-with-marker">
    

<h1 id="contactos" className="big_title">Contactos.</h1>
</div>



<div className="content_skills">
  <div>
    <p>Vamos criar juntos algo incrível! Entre em contacto :)</p>
  </div>
  <div className="conct_geral_text_img">
    <div className="text_contaaa">

      <div className="icons_contactos">
        <div className="center_content_icon">
          <img className="icons_size_contact" src={iconEmail} alt="iconEmail"/>
          <h5 className="responsive_names">dinis.p.antunes2002@gmail.com</h5>
        </div>
      </div>
    </div>

<div className="three_icons">

    <div className="icons_contactos">
      <div className="center_content_icon">
        <a href="https://www.linkedin.com/in/dinis-antunes-96b79b276/" target="blank"><img className="icons_size_contact" src={iconLinkdin} alt="iconLinkdIn"/></a>
      </div>
    </div>

    <div className="icons_contactos">
      <div className="center_content_icon">
        <a href="https://www.instagram.com/dinisantunes02/" target="blank"><img className="icons_size_contact" src={iconInstagram} alt="iconInstagram"/></a>
      </div>
    </div>

    <div className="icons_contactos">
      <div className="center_content_icon">
        <a href="https://github.com/DinaX02" target="blank"> <img className="icons_size_contact" src={iconGitHub} alt="iconGitHub"/></a>
      </div>
    </div>

</div>

  </div>
</div>

        </div>
    )
}

export default Contactos
