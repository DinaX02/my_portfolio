import React from "react";
import "../App.css";
import { motion } from "framer-motion";
import ImgDinis from "../assets/foto_dinis.png"

const HeroAbout = () => {
  return (
    <div className="hero_homepage_div_about">
<img className="foto_hero_about" src={ImgDinis} alt="coverProfilePicture"/>
<p className="nome_hero_about">Dinis Antunes</p>
<p className="tecnical_hero_about">UX/UI Designer e Front-end Developer</p>
<div className="scroll_icon btn_plus btn_minus">
          <p className="alinhar_p_scroll_2">scroll down</p>
      </div>
      <div className="scroll_icon btn_plus btn_minus">
          {/* <p className="alinhar_p_scroll">scroll down</p> */}
        <a href="#origens">
         
        <div className="btn_scrolll_2">
         
        <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            className="inner_scroll_2"
          />    
        </div>
        </a>
      </div>
    </div>
  );
};

export default HeroAbout;


//<div className="hero_about">
//<div className="about_text">
//<h1>Sobre <span className="cor_nome">Mim.</span></h1>
//<p>
//Olá, eu sou o Dinis Pinto Antunes e concluirei a Licenciatura em Multimédia e Tecnologias da Comunicação, na Universidade de Aveiro, no ano letivo 2022/23.<br></br><br></br>
//Pretendo dar continuidade à minha formação académica, razão pela qual me candidato ao Mestrado em Comunicação e Tecnologias Web, Departamento de Comunicação e Arte, na //Universidade de Aveiro. Pretendo, assim, consolidar, desenvolver e adquirir novos conhecimentos e competências que sejam uma mais-valia para a minha futura integração no //mercado de trabalho.<br></br><br></br>
//Ao longo do meu percurso escolar foram as áreas relacionadas com Web Design e Tecnologias que mais me interessaram, sendo entusiasta de <span className="cor_nome_about">UX///UI Design</span> e sempre interessado em aprender novas técnicas para o aprimoramento dos meus Designs, procurando novos desafios para crescer como <span //className="cor_nome_about">Desenvolvedor Web </span> e <span className="cor_nome_about">Designer</span>.
//<br></br><br></br>
//Simultaneamente pratiquei desporto, tendo sido atleta federado em natação pura.
//A conciliação entre os estudos e a pratica desportiva foram importantes no desenvolvimento das minhas características pessoais, tendo sido sempre um estudante trabalhador, //empenhado, organizado e responsável.

//</p>
//</div>

//<div className="img_about_new">
//<img className="dinis_img_about" src={ImgDinis}/>

//</div>


//</div>
//<div className="btn_about_meee">
//<a href="#percurso"><button className="btn_hero_about space_btn_About">Percuso Académico</button></a>
//<a href="#skills"><button className="btn_hero_about">Skills</button></a>
//</div> 

