import React from "react";
import pcZetflicks from "../assets/hero_p2.png"
import "../App.css";

const ContentP2 = ()=> {


    return(

<div className="div_content_p1">
    <img className="img-pc_movies" src={pcZetflicks}/>
    <div className="content_p111">
        <h1 className="title_overview_2">Zetflicks</h1>
    <p>Zetflicks é um pequeno projeto desenvolvido por 3 estudantes universitários da Universidade de Aveiro com o objetivo de se tornarem mais experientes em novas linguagens de programação e uso de API. O projeto consiste num site responsivo onde o utilizador pode encontrar novos filmes e series, ver alguns detalhes sobre eles e adicioná-los à sua Watchlist.</p>
       <span><h3>Papel desempenhado:</h3><p>UI Design e Front-end</p></span> 
        <h3>Ferramentas usadas:</h3>
        <ul>
          <li>Figma</li>
          <li>React js</li>
          <li>TMDB API</li>
        </ul>
        <a href="https://www.figma.com/proto/XvQjbPsxIYJKLmFfWOfHCg/MID-FI?node-id=739-840&scaling=scale-down&page-id=327%3A2&starting-point-node-id=739%3A840" target="blank"><button className="btn_viewmore_2">Live Demo</button></a>
      </div>
</div>
    )
}

export default ContentP2




