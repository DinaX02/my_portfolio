import React from "react";
import teleKOru from  "../assets/mobilee_context_koru.png"
import "../App.css";
import MockupProjeto from "./MockupProjeto";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const ContentP1 = ()=> {

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    
return (
<div>
            <header className="header_proj4">
<button type="button" onClick={goBack} className="seta_rounded" aria-label="Voltar à página anterior">
<FiArrowLeft className="seta_back_projects" aria-hidden="true" /></button>
{/* <h1>Submerso </h1> */}
</header>

<div className="div_content_p4">
  <MockupProjeto src={teleKOru} alt="mockupKoru" />
  <div className="content_p4">
    <h1 className="title_koru_hero">Koru</h1>

    <h2 className="fontsize_tags"><span className="text_marcado_koru">Tags.</span></h2>

<div style={{width: "auto", display: "flex", flexWrap:"wrap", alignItems:"center", maxWidth: "600px"}}>
    <div className="tags_koru">Aplicação</div><div className="tags_koru_big">Organização de eventos
</div><div className="tags_koru">Investimento</div> <div className="tags_koru">Votação</div><div className="tags_koru">Moedas Digitais</div>
</div>

    <h2 className="fontsize_tags"><span className="text_marcado_koru">Tools.</span></h2>

    <div style={{width: "auto", display: "flex", flexWrap:"wrap", alignItems:"center", maxWidth: "600px"}}>
    <div className="tags_koru">Figma</div><div className="tags_koru">React Native</div><div className="tags_koru">GitHub</div>
</div>
  </div>
</div>
</div>

    )
}

export default ContentP1





