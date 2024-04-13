import React from "react";
import "../App.css";
// import icon1 from "../assets/front-end white.png"
// import icon2 from "../assets/web design icon white.png"
// import {Tilt} from "react-tilt";
import imgVisaoGeRAL from "../assets/visao_geral.png"

const Introduction = ()=> {

    return(       <div id="intro" className="into_divvv">
          
{/*    
      <p className="introduction">Introdução</p> */}

         {/* <div className="title-with-marker_2">
      <p className="big_title">Visão Geral.</p></div> */}

      <div className="instagram-container">
         
      <div className="instagram-info"> 

      <p className="paragrafo_intro_sizes">Introdução</p>

<p className="fontsize_tags"><span className="title_marcado_koru">Visão Geral.</span></p>


        <p className="paragrafo_origens">O meu portefólio reflete a minha capacidade de unir a criatividade com as soluções técnicas necessárias para realizar os desafios que me são propostos.<br></br>
<br></br>Ao criar os meus designs, presto atenção a cada detalhe, desde a escolha de paletas de cores e tipografia até a seleção de ícones e ilustrações. Meu objetivo é sempre alcançar um equilíbrio entre estética e funcionalidade, garantindo que cada elemento no design tenha um propósito claro e atenda às necessidades dos utilizadores.
        </p>
        

      </div>
      <div className="other-info">
<img className="img_vision" src={imgVisaoGeRAL} alt="imgCoverVisaoGeral"/>
      </div>
    </div>  
</div>
    )
}

export default Introduction





//         <div id="intro" className="into_divvv">
//             <p className="introduction">Introdução</p>
//             <p className="big_title">Visão Geral.</p>
//             <p className="content_intro_hero2">O meu portfólio reflete a minha habilidade de unir a criatividade com as soluções técnicas necessárias para realizar os desafios que me são propostos.
// <br></br><br></br>
// Ao criar os meus designs, presto atenção a cada detalhe, desde a escolha de paletas de cores e tipografia até a seleção de ícones e ilustrações. <br></br>Meu objetivo é sempre alcançar um equilíbrio perfeito entre estética e funcionalidade, garantindo que cada elemento no design tenha um propósito claro e atenda às necessidades dos utilzadores.</p>

// <section>
//       <div className="card-container">
//         <Tilt className="card">
//           <div className="icon"><img className="icon_card_ajuste" src={icon2}/></div>
//           <div className="text_card">Web Design</div>
//         </Tilt>
//         <Tilt className="card">
//           <div className="icon"><img className="icon_card_ajuste_2" src={icon1}/></div>
//           <div className="text_card">Desenvolvimento Front-end</div>
//         </Tilt>
//       </div>
//     </section>

//         </div>