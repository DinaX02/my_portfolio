import React from "react";
import "../App.css";
import boomerangMockupOverview from "../assets/mockup_overview_boomerang_2.png"

const InfoProj4 = ()=> {
    return(

<div className="info_p4">
{/* <div className="title-with-marker">
<p className="big_title">Overview.</p> 

</div>*/}

<div className="instagram-container">

<div className="instagram-info"> 
<p className="fontsize_tags"><span className="title_marcado_boomerang">Overview.</span></p>
<p className="paragrafo_origens">Projeto desenvolvido em contexto CBL no primeiro ano de mestrado em Comunicação e Tecnologias Web na Universidade de Aveiro.
<br></br><br></br>
A Boomerang é uma plataforma de aluguer de roupa peer-to-peer, que tem como missão central a redução do desperdício têxtil, contribuindo diretamente para a diminuição do impacto ambiental.
<br></br><br></br>
Ao estender a vida útil das roupas, não só reduz a pegada de carbono, mas também cria oportunidades económicas para os utilizadores, promovendo uma economia circular. Além dos benefícios tangíveis, ao escolher alugar em vez de comprar, os utilizadores tornam-se defensores ativos da sustentabilidade, participando numa comunidade consciente.
<br></br><br></br>
Esta aplicação não é apenas uma plataforma, mas uma voz na discussão global sobre moda sustentável. 
</p>

<p className="fontsize_tags"><span className="title_marcado_boomerang">Tarefas.</span></p>

<div className="tarefas_boomerang">
        <div className="tags_boomerang">UX/UI Design</div>
        <div className="tags_boomerang">Branding</div>
        <div className="tags_boomerang">Front-end</div>
        <div className="tags_boomerang">Acessibilidade</div>
        </div>
        <div className="links_koruu_2"  style={{marginTop:"2em", marginBottom:"1em"}}>
<div className="links_boomerang" style={{paddingRight:20}}><h3>Link:</h3><a href="https://guileless-bienenstitch-7518c4.netlify.app/" target="blank"><p style={{marginLeft:10}}>Website</p></a></div>
<div className="links_boomerang"><h3>Link:</h3><a href="https://www.instagram.com/app_boomerang/" target="blank"><p style={{marginLeft:10}}>Instagram</p></a></div></div>        
</div>


<div className="other-info">
<img className="img_vision" src={boomerangMockupOverview} alt="Boomerang mockup  overview"/>
</div>
</div>  
</div>

    )
}   

export default InfoProj4





