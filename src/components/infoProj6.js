import React from "react";
import "../App.css";
import uxToolkitOverview from "../assets/coverWEBSITE uxtoolkit.png"

const InfoProj6 = ()=> {
    return(

<div className="info_p6">

<div className="instagram-container">

<div className="instagram-info"> 
<p className="fontsize_tags"><span className="title_marcado_uxtoolkit">Overview.</span></p>
<p className="paragrafo_origens">Este estudo parte de um problema bem identificado pelos UI designers e developers que enfrentam dificuldades na aplicação de metodologias de UX em produtos digitais devido a uma perceção limitada do seu valor estratégico, falta de recursos adequados, equipas multidisciplinares e prazos apertados que encurtam fases de planeamento de um produto.<br></br><br></br>A solução proposta é uma <strong>toolkit híbrida</strong> composta por uma componente física (37 cartas, manual e três exercícios práticos) e uma componente digital (plataforma web interativa) que visa orientar decisões de UX de forma prática e colaborativa.
<br></br><br></br>
A metodologia development(al) research foi escolhida pelo seu caráter exploratório e iterativo, permitindo prototipar, testar e refinar continuamente ambas as componentes junto de docentes/investigadores, estudantes da área de CTC e profissionais de UX/UI.
<br></br><br></br>
Os resultados demonstram que a UX Toolkit não só consolida as melhores práticas de UX, mas adapta-se às necessidades reais dos utilizadores, facilitando a tomada de decisões técnicas em cada etapa do desenvolvimento de produtos digitais.
</p>

<p className="fontsize_tags"><span className="title_marcado_uxtoolkit">Tarefas.</span></p>

<div className="tarefas_boomerang">
    <div className="tags_uxtoolkit_big">Investigação Científica</div>
        <div className="tags_uxtoolkit">UX/UI Design</div>
        <div className="tags_uxtoolkit">Front-end</div>
        </div>  

        <div className="links_uxtoolkit" style={{paddingRight:20}}><h3>Link:</h3><a href="https://uxtoolkit.netlify.app/" target="blank"><p style={{marginLeft:10}}>Plataforma Digital | UX Toolkit</p></a></div> 
</div>


<div className="other-info">
<img className="img_vision" src={uxToolkitOverview} alt="UX Toolkit website imagem overview"/>
</div>
</div>  
</div>

    )
}   

export default InfoProj6





