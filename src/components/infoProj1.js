import React from "react";
import "../App.css";
import imgKoru_1 from "../assets/content_koru.png"

const InfoProj1 = ()=> {
    return(
<div className="info_p1_koru">
{/* <div className="title-with-marker">
<p className="big_title">Overview.</p> 

</div>*/}

<div className="instagram-container">

<div className="instagram-info"> 
<p className="fontsize_tags"><span className="title_marcado_koru">Overview.</span></p>
<p className="paragrafo_origens">Este projeto visa desenvolver uma plataforma de votação desenhada principalmente para concursos onde os organizadores pretendem adicionar uma componente de interatividade para aumentar a participação e investimento em, por exemplo, projetos ou ideias.
<br></br><br></br>
Esta aplicação foi desenvolvida no âmbito do Projeto Koru, é uma plataforma de acompanhamento de eventos que permite aos seus organizadores criar e gerir eventos de forma eficiente, enquanto fornece aos participantes do mesmo uma experiência personalizada e interativa.
<br></br><br></br>
O foco da aplicação é a dinâmica de votação nos projetos exibidos no evento em questão. Ou seja, este projeto tem como objetivo facilitar o processo de criar e gerir atividades de votação em projetos dentro de um evento ao vivo. 
</p>

<p className="fontsize_tags" style={{marginTop:"2em"}}><span className="title_marcado_koru">Tarefas.</span></p>

<div className="tarefas_boomerang">
        <div className="tags_koru">UX/ UI Design</div>
        <div className="tags_koru">Branding</div>
        <div className="tags_koru">Front-end</div>
        </div>
<div className="links_koruu_2"  style={{marginTop:"2em", marginBottom:"1em"}}>
<div className="links_koruu" style={{paddingRight:20}}><h3>Link:</h3><a href="https://jovial-salamander-313a31.netlify.app/" target="blank"><p style={{marginLeft:10}}>Website</p></a></div>
<div className="links_koruu"><h3>Link:</h3><a href="https://www.instagram.com/koru.app/" target="blank"><p style={{marginLeft:10}}>Instagram</p></a></div></div>        
</div>



<div className="other-info">
<img className="img_vision" src={imgKoru_1} alt="Boomerang Koru overview"/>
</div>
</div>  
</div>
    )
}   

export default InfoProj1





