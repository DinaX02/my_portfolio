import React from "react";
import "../App.css";
import Reveal from "./Reveal";
import ImagemCamadas from "./ImagemCamadas";
import imgVisaoGeRAL from "../assets/visao_geral.png"

const Introduction = ()=> {

    return(       <div id="intro" className="into_divvv">

      <div className="instagram-container">

      <Reveal from="left" className="instagram-info">

      <p className="paragrafo_intro_sizes">Introdução</p>

<h2 className="fontsize_tags"><span className="title_marcado_koru">Visão Geral.</span></h2>


        <p className="paragrafo_origens">O meu portefólio reflete a minha capacidade de unir a criatividade com as soluções técnicas necessárias para realizar os desafios que me são propostos.<br></br>
<br></br>Ao criar os meus designs, presto atenção a cada detalhe, desde a escolha da paletas de cores e tipografia até a seleção de ícones e ilustrações. Meu objetivo é sempre alcançar um equilíbrio entre estética e funcionalidade, garantindo que cada elemento no design tenha um propósito claro e atenda às necessidades dos utilizadores.
        </p>


      </Reveal>
      <Reveal from="right" delay={0.15} className="other-info">
<ImagemCamadas
  src={imgVisaoGeRAL}
  altA="Wireframes de uma aplicação desenhados em papel"
  altB="Código num ecrã de portátil"
/>
      </Reveal>
    </div>
</div>
    )
}

export default Introduction
