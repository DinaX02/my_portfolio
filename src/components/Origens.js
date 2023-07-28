import React from "react";
import "../App.css";
import icon1 from "../assets/front-end white.png"
import icon2 from "../assets/web design icon white.png"
import {Tilt} from "react-tilt";
import imgOrigens from "../assets/origenss.png"

const Origens = ()=> {

  const linhaStyle = {
    marginTop:20,
    width: '200px',
    height: '5px',
    backgroundColor: '#A767FB',
    position:"absolute",
    right: '0',
  };

  const numeroStyle = {
    marginTop:5,
    position:"absolute",
    right: '15px',
    color: '#A767FB',
    fontSize: '46px',
    fontWeight: 'bold',
  };

    return(     
      <div id="origens" className="into_divvv">
          
               <div className="linhasss_roxos">
      <div style={linhaStyle}>
        <p style={numeroStyle}>01</p>
      </div>

    </div>
                 <p className="introduction">Sobre mim</p>

      <div className="title-with-marker_3">
    <h1 className="big_title">Origens.</h1>
    </div>  
      <div className="instagram-container">

      <div className="instagram-info"> 
   

        <p className="paragrafo_origens">Devido ao facto de viver numa zona costeira sempre fui muito ligado ao mar, simultaneamente pratiquei desporto, tendo sido atleta federado em natação
pura. Mais tarde, fiz curso elementar de juízes de natação pura, natação adaptada e águas abertas.

<br></br>
<br></br>A conciliação entre os estudos e a prática desportiva foram importantes no desenvolvimento das minhas
características pessoais, tendo sido sempre um estudante trabalhador, empenhado, organizado e responsável.<br></br><br></br>
Ao longo do meu percurso escolar foram as áreas relacionadas com artes e tecnologias que mais me interessaram, tendo desenvolvido um grande interesse pelo UX/UI Design e mais tarde pelo Front-end .
        </p>
        

      </div>
      <div className="other-info">
<img className="img_vision" src={imgOrigens}/> 
      </div>
    </div>  
</div>
    )
}

export default Origens





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