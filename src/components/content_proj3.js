import React from "react";
import pcsUubmerso from "../assets/submeros_mockup.png"
import "../App.css";

const ContentP3 = ()=> {


    return(

<div className="div_content_p1">
    <img className="img-pc_movies" src={pcsUubmerso}/>
    <div className="content_p111">
        <h1 className="title_overview_3">Submerso</h1>
    <p>Pequeno jogo didático desenvolvido no âmbito da unidade curricular de Laboratório Multimédia 3. Tem como objetivo sensibilizar crianças do 2º ciclo em relação à subida do nível médio do mar.</p>
       <span><h3>Papel desempenhado:</h3><p>Design dos ambientes e personagens (Pixel Art) e Programação dos níveis</p></span> 
        <h3>Ferramentas usadas:</h3>
        <ul>
          <li>Adobe Photoshop</li>
          <li>Adobe Illustrator</li>
          <li>HTML, CSS e JavaScript</li>
        </ul>
        <a href="https://cerkeira.github.io/submerso/menu/index_menu.html" target="blank" rel="noopener noreferrer"><button className="btn_viewmore_3">Live Demo</button></a>
      </div>
</div>
    )
}

export default ContentP3





