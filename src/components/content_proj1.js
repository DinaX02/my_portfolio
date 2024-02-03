import React from "react";
import teleKOru from "../assets/tele_koru.png"
import "../App.css";

const ContentP1 = ()=> {


    return(

<div className="div_content_p1">
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
</div>
    )
}

export default ContentP1





