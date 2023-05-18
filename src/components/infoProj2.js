import React from "react";
import "../App.css";
import Zetflciks_1 from "../assets/zetflicks_img1.PNG"
import Zetflciks_2 from "../assets/zetflicks_img2.PNG"
import Zetflciks_3 from "../assets/zetflicks_img3.PNG"



const InfoProj2 = ()=> {
    return(

<div className="info_p11111">
<p className="big_titleP1">Contextualização.</p>

<p className="content_proj11111">	Este projeto visa desenvolver uma plataforma web responsive, onde o utilizador poderá escolher entre "Movies" e "Tv shows" e ver os principais filmes e series nas diferentes categorias e adicionar os seus filmes / series favoritos à sua watchlist e mais tarde passa-los para a sua Watched list, o projeto foi desenvolvido com dados retirados da API TMDB, a Zetflciks permite ainda ver os detalhes do filme / serie que for selecionada onde poderá ver o "overview" e o "cast" que participou no projeto, no caso das series poderá ver o numero total de episódios e temporadas.
</p>

<p className="big_titleP1">Funcionalidades.</p>

<p className="content_proj11111">As principais funcionalidades do Zetflicks encontram-se na parte da watchlist, onde o utilizador pode fazer a pesquisa dos seus filmes / series e pode escolher <strong className="strong_p2">adicionar à sua Watchlist</strong> ou à <strong className="strong_p2">Watched list </strong>e remove-los se assim o entender.
Uma grande vantagem do Zetflicks é que permite ao utilizador usufruir dessas funcionalidades sem ser preciso efetuar qualquer registo, pois os seus filmes são todos guardados em <strong className="strong_p2">LocalStorage.</strong></p>

<div className="niveis_subb_zetflicks">
<div>
<img className="storyboardd" src={Zetflciks_1}/>
<p className="legendas_zetflicks"><strong>Legenda:</strong> Filtragem de Filmes</p>
</div>
<div>
<img className="storyboardd" src={Zetflciks_2}/>
<p className="legendas_zetflicks"><strong>Legenda:</strong> Pesquisa de filmes</p>
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





