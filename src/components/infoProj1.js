import React from "react";
import "../App.css";

import { Link } from "react-router-dom";



const InfoProj1 = ()=> {



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

<p className="big_titleP1"><i>Benchmarking</i>.</p>
<p className="content_proj11111">	Para o levantamento de requisitos necessários para o desenho da nossa aplicação, uma das fontes de informação foi a pesquisa de mercado, para compreender quais são as funcionalidades priorizadas em soluções já existentes de outras empresas ou iniciativas que oferecem algo semelhante ao que idealizamos.
<br></br><br></br>
Para isto estudamos empresas de organização de eventos com investimento em moedas, aplicações que conseguem ter soluções móveis e Web, algumas aplicações de mercado de valores e gestão de carteiras de criptomoedas.
</p>
<p className="big_titleP1">Persona.</p>
<p className="content_proj11111">Como público-alvo da nossa aplicação inserem-se os participantes dos eventos, que poderão usar a plataforma para submissão de projetos ou para  votação dos seus projetos preferidos.
<br></br><br></br>
Para idealizar a interação deste público-alvo criamos uma persona com determinados comportamentos, personalidade e motivações. Neste caso, o objetivo foi garantir que este tipo de utilizador da nossa plataforma representaria as necessidades principais de alguém que tem como objetivo dinamizar a sua presença nas iniciativas em que participa.
<br></br><br></br>
Entendemos que este tipo de utilizador terá como principais objetivos na aplicação, recorrer ao sistema de voto, e analisar as posições do ranking de projetos em tempo real. Ou seja, acreditamos que esta persona não representa um público que procure uma interface completa de gestão do evento, optando por uma interface simples e intuitiva.
</p>

<p className="introductionP1">User FLow</p>
<p className="content_proj11111">Foi criado <i> user flows </i>para mostrar diferentes caminhos que o utilizador pode usar para completar a mesma tarefa e assim poder identificar possíveis problemas e melhorar a experiência geral do utilizador dentro da nossa aplicação.</p>
<p className="introductionP1">Site Map</p>
<p className="content_proj11111">Com base na pesquisa realizada no nosso <i>Benchmarking</i> , foi determinado o conteúdo que deveria ser incluído na nossa aplicação, criando assim o site map para poder
 ajudar na organização e planeamento da arquitetura base do projeto, bem como melhorar a navegação do utilizador.</p>

<p className="big_titleP1">Wireframes.</p>
<p className="content_proj11111">Uma vez decidida a arquitetura da nossa aplicação e site map avançei para o sketching dos wireframes, começando pela baixa fidelidade e progredindo para a média e alta fidelidade.</p>

<p className="introductionP1">Crazy 8 Wireframes</p>
<p className="content_proj11111">Ao criar os wireframes de baixa fidelidade, obtive uma imagem clara do aspecto visual da aplicação e da forma como o utilizador irá navegar através dela.</p>
<p className="introductionP1">Protótipos Mid-fi</p>
<p className="content_proj11111">Ao criar wireframes de média fidelidade, consegui ilustrar funcionalidades e o fluxo da aplicação, aperfeiçoando ainda mais a interface do utilizador e identificar eventuais falhas funcionais nas fases iniciais.</p>
<p className="introductionP1">Protótipos Hi-fi</p>
<p className="content_proj11111">Ao criar wireframes de média fidelidade, consegui ilustrar funcionalidades e o fluxo da aplicação, aperfeiçoando ainda mais a interface do utilizador e identificar eventuais falhas funcionais nas fases iniciais.</p>


<div className="btn_next_projects">
<Link to={"/project_2"}><button className="btn_viewmore">Ver Projeto Zetflicks</button></Link>
<Link to={"/project_3"}><button className="btn_viewmore">Ver Projeto Submerso</button></Link>
</div>
</div>
    )
}   

export default InfoProj1





