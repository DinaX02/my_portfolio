import React from "react";
import teleKOru from  "../assets/mobilee_context_koru.png"
import "../App.css";
import setaBack from '../assets/Arrow 1 (1).svg'
import { useNavigate } from "react-router-dom";

const ContentP1 = ()=> {

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    

{/* <div className="div_content_p1">
    <img className="img-phone" src={teleKOru} alt="mockupKoru"/>
    <div className="content_p111">
        <h1 className="title_overvieww">Koru</h1>
    <p>O foco da aplicação do Koru é a participação em eventos ao vivo, que permite ao utilizador ver mais informações sobre o evento e criar uma dinâmica de votação nos projetos exibidos no evento em questão, tendo como objetivo facilitar o processo de criar e gerir atividades de votação em projetos dentro de um evento ao vivo.</p>
       <span><h3>Papel desempenhado:</h3><p>UX/UI Design e Branding</p></span> 
        <h3>Ferramentas usadas:</h3>
        <ul>
          <li>Figma</li>
          <li>Papel e caneta (Wireframes)</li>
          <li>Abode illustrator</li>
        </ul>
        <a href="https://www.figma.com/proto/XvQjbPsxIYJKLmFfWOfHCg/MID-FI?node-id=739-840&scaling=scale-down&page-id=327%3A2&starting-point-node-id=739%3A840" target="blank" rel="noopener noreferrer"><button className="btn_viewmore">Ver Protótipo</button></a>
      </div>
</div> */}


return (
<div>
            <header className="header_proj4">
<div onClick={goBack} className="seta_rounded">
<img className="seta_back_projects" src={setaBack} alt="goBackArrow"/></div>
{/* <h1>Submerso </h1> */}
</header>

<div className="div_content_p4">
  <img
    className="img-pc_movies"
    src={teleKOru}
    alt="mockupKoru"
  />
  <div className="content_p4">
    <h1 className="title_koru_hero">Koru</h1>

    <p className="fontsize_tags"><span className="text_marcado_koru">Tags.</span></p>

<div style={{width: "auto", display: "flex", flexWrap:"wrap", alignItems:"center", maxWidth: "600px"}}>
    <div className="tags_koru">Aplicação</div><div className="tags_koru_big">Organização de eventos
</div><div className="tags_koru">Investimento</div> <div className="tags_koru">Votação</div><div className="tags_koru">Moedas Digitais</div>
</div>

    <p className="fontsize_tags"><span className="text_marcado_koru">Tools.</span></p>

    <div style={{width: "auto", display: "flex", flexWrap:"wrap", alignItems:"center", maxWidth: "600px"}}>
    <div className="tags_koru">Figma</div><div className="tags_koru">React Native</div><div className="tags_koru">GitHub</div>
</div>
  </div>
</div>
</div>

    )
}

export default ContentP1





