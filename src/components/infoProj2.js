import React from "react";
import "../App.css";
import Zetflciks_1 from "../assets/zetflicks_img1.PNG"
import Zetflciks_2 from "../assets/zetflicks_img2.PNG"
import Zetflciks_3 from "../assets/zetflicks_img3.PNG"



const InfoProj2 = ()=> {
    return(

<div className="info_p11111">
<p className="big_titleP1">Contextualização.</p>

<p className="content_proj11111">	Este projeto visa desenvolver uma plataforma de votação desenhada principalmente para concursos onde os organizadores pretendem adicionar uma componente de interatividade para aumentar a participação e investimento em, por exemplo, projetos ou ideias.
<br></br>
A aplicação em desenvolvimento, no âmbito do Projeto Koru, é uma plataforma de acompanhamento de eventos que permite aos seus organizadores criar e gerir eventos de forma eficiente, enquanto fornece aos participantes do mesmo uma experiência personalizada e interativa.
<br></br><br></br>
O foco da aplicação é a dinâmica de votação nos projetos exibidos no evento em questão. Ou seja, este projeto tem como objetivo facilitar o processo de criar e gerir atividades de votação em projetos dentro de um evento ao vivo. Este sistema de votação passa por distribuir uma série de moedas pelo público do evento, permitindo a cada utilizador dividir os seus votos pelos seus projetos favoritos, objetivando manter o sistema de votação justo e democrático.
<br></br><br></br>
Este projeto prevê uma aplicação mobile, utilizada por participantes de eventos para votar em projetos e assistir ao live ranking das votações, e um website, utilizado pelos organizadores para gerir atividades, características do evento e projetos.
</p>

<p className="big_titleP1">Funcionalidades.</p>

<p className="content_proj11111">As principais funcionalidades do Zetflicks encontram-se na parte da watchlist, onde o utilizador pode fazer a pesquisa dos seus filmes / series e pode escolher <strong className="strong_p2">adicionar à sua Watchlist</strong> ou à <strong className="strong_p2">Watched list </strong>e remove-los se assim o entender.
Uma grande vantagem do Zetflicks é que permite ao utilizador usufruir dessas funcionalidades sem ser preciso efetuar qualquer registo, pois os seus filmes são todos guardados em <strong className="strong_p2">LocalStorage.</strong></p>

<div className="niveis_subb_zetflicks">
<div>
<img className="storyboardd" src={Zetflciks_1}/>
<p className="legendas_zetflicks"><strong>Legenda:</strong> Filtragem de Filmes por categorias</p>
</div>
<div>
<img className="storyboardd" src={Zetflciks_2}/>
<p className="legendas_zetflicks"><strong>Legenda:</strong> Pesquisa de filmes /series para adicionar</p>
</div>
<div>
<img className="storyboardd" src={Zetflciks_3}/>
<p className="legendas_zetflicks"><strong>Legenda:</strong> Watchlist</p>
</div>
</div>

{/* 
<p className="big_titleP1">Wireframes.</p>
<p className="content_proj11111">Uma vez decidida a arquitetura da nossa aplicação e site map avançei para o sketching dos wireframes.</p>

<p className="introductionP1">Protótipos Hi-fi</p>

<p className="content_proj11111">Ao criar wireframes de média fidelidade, consegui ilustrar funcionalidades e o fluxo da aplicação, aperfeiçoando ainda mais a interface do utilizador e identificar eventuais falhas funcionais nas fases iniciais.</p>


<div className="btn_next_projects">
<Link to={"/project_1"}><button className="btn_viewmore">Ver Projeto Koru</button></Link>
<Link to={"/project_3"}><button className="btn_viewmore">Ver Projeto Submerso</button></Link>
</div>*/}
</div>

    )
}   

export default InfoProj2





