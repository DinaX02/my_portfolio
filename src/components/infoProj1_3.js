import React from "react";
import "../App.css";
import Persona from "../assets/Persona_koru.png"


const infoProj1_3 = ()=> {
    return(

<div className="info_p22222">

<div className="title-with-marker">
<p className="big_title">Persona.</p></div>
<div className="instagram-container">

<div className="instagram-info"> 

<p className="paragrafo_origens">Como público-alvo da aplicação inserem-se os participantes dos eventos, que poderão usar a plataforma para submissão de projetos ou para votação dos seus projetos preferidos.
<br></br><br></br>
Para idealizar a interação deste público-alvo criamos uma persona com determinados comportamentos, personalidade e motivações. Neste caso, o objetivo foi garantir que este tipo de utilizador da nossa plataforma representaria as necessidades principais de alguém que tem como objetivo dinamizar a sua presença nas iniciativas em que participa.
<br></br><br></br>
Entendemos que este tipo de utilizador terá como principais objetivos na aplicação, recorrer ao sistema de voto, e analisar as posições do ranking de projetos em tempo real. Ou seja, acreditamos que esta persona não representa um público que procure uma interface completa de gestão do evento, optando por uma interface simples e intuitiva.
</p>

</div>


<div className="other-info">
<img className="img_vision" src={Persona}/>
</div>
</div>  

</div>

    )
}   

export default infoProj1_3





