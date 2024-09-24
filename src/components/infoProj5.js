import React from "react";
import "../App.css";
import tocareMockupOverview from "../assets/overview_ToCare_mock-up.png"

const InfoProj5 = ()=> {
    return(

<div className="info_p5">
{/* <div className="title-with-marker">
<p className="big_title">Overview.</p> 

</div>*/}

<div className="instagram-container">

<div className="instagram-info"> 
<p className="fontsize_tags"><span className="title_marcado_tocare">Overview.</span></p>
<p className="paragrafo_origens">Em 2022, 22,9% da população portuguesa correspondia a idosos e em 2100, prevê-se que esse número atinja cerca de 36,28%. Este envelhecimento populacional traz desafios na saúde e no cuidado de idosos, intensificando a necessidade de cuidadores de idosos. {/* Esses profissionais enfrentam dificuldades na coordenação de tarefas e na comunicação com familiares e profissionais de saúde. */}
<br></br><br></br>
Como resposta ao desafio lançado pela InovaRia e Altice Labs, onde era pretendido a criação de um produto inovador na área da saúde, surge a ToCare uma aplicação móvel desenvolvida para facilitar a gestão e coordenação dos cuidados de idosos.<br></br><br></br>Através de um design centrado no utilizador, a ToCare pretende melhorar a comunicação entre cuidadores, oferecendo acesso a informações médicas atualizadas e facilitar a organização de tarefas diárias essenciais, como administração de medicamentos e higiene pessoal.
</p>

<p className="fontsize_tags"><span className="title_marcado_tocare">Tarefas.</span></p>

<div className="tarefas_boomerang">
        <div className="tags_tocare">UX/UI Design</div>
        </div>   

        <div style={{paddingRight:20}}><h3> Desafio InovaRia e Altice Labs:</h3><p>Design Thinking aplicado ao Design de Produto Digital: <strong>1 Semana</strong></p></div>

</div>


<div className="other-info">
<img className="img_vision" src={tocareMockupOverview} alt="ToCare mockup  overview"/>
</div>
</div>  
</div>

    )
}   

export default InfoProj5





