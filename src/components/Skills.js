import React from "react";
import webDesignicon from "../assets/web design.png";
import frontendICON from "../assets/icon_front_end.png";
import "../App.css";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

// as barras enchem da esquerda para a direita quando entram no ecrã
const barAnim = {
  initial: { scaleX: 0 },
  whileInView: { scaleX: 1 },
  viewport: { once: true, amount: 0.8 },
  transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  style: { transformOrigin: "left" },
};

const Skills = () => {
  const linhaStyle = {
    marginTop: 20,
    width: "200px",
    height: "5px",
    backgroundColor: "#A767FB",
    position: "absolute",
    right: "0",
  };

  const numeroStyle = {
    marginTop: 5,
    position: "absolute",
    right: "15px",
    color: "#A767FB",
    fontSize: "46px",
    fontWeight: "bold",
  };

  return (
    <div className="skills_div">
      <div className="linhasss_roxos">
        <div style={linhaStyle}>
          <p style={numeroStyle}>03</p>
        </div>
      </div>
      {/* 
      <p  id="skills" className="introduction">
        A nível Técnico{" "}
      </p>
      <div className="title-with-marker">
    

    <h1 className="big_title">Skills.</h1>
    </div> */}
      <div className="instagram-container">
        <Reveal from="left" className="instagram-info">
          <p className="paragrafo_intro_sizes">A nível Técnico</p>

          <h2 className="fontsize_tags">
            <span className="title_marcado_koru">Skills.</span>
          </h2>

          <p style={{ marginTop: 40, fontSize: 19 }}>
            Através do{" "}
            <span className="title_marcado_skills">UX/UI Design</span> e do{" "}
            <span className="title_marcado_skills">
              Desenvolvimento Front-end
            </span>
            , sou capaz de criar experiências envolventes e únicas no utilizador
            , combinando o design com o conhecimento técnico para o
            desenvolvimento de soluções web que cativam e satisfazem os seus
            utilizadores.
          </p>
        </Reveal>
        <div className="other-info">
          {/* <img className="img_vision" src={imgVisaoGeRAL}/>  */}
        </div>
      </div>

      <Reveal delay={0.1}>
      <section className="skills_geral skills section">
        <div className="skills_container container grid">
          <div>
            <div className="skills_content">

            <div className="skills_content">
                <div className="skills_header space_bg_ecra_2">
                  <div className="arrow_nome">
                    <img
                      className="icons_skills"
                      src={webDesignicon}
                      alt="IconWebDesign"
                    />
                    <h3 className="skills_title">UX/ UI Design</h3>
                    {/*  <img className="arrow_ajust" src={arrowDown}/>*/}
                  </div>
                  <div className="skills_list grid">
                    <div className="skills_data">
                      <div className="skills_titles">
                        <h3 className="skills_name">Sketching</h3>
                        <span className="skills_number">90%</span>
                      </div>

                      <div className="skills_bar">
                        <motion.span className="skills_percentage skills_sketch" {...barAnim}></motion.span>
                      </div>
                    </div>

                    <div className="skills_data">
                      <div className="skills_titles">
                        <h3 className="skills_name">Figma</h3>
                        <span className="skills_number">90%</span>
                      </div>

                      <div className="skills_bar">
                        <motion.span className="skills_percentage skills_sketch" {...barAnim}></motion.span>
                      </div>
                    </div>

                    <div className="skills_data">
                      <div className="skills_titles">
                        <h3 className="skills_name">Invision</h3>
                        <span className="skills_number">75%</span>
                      </div>
                      <div className="skills_bar">
                        <motion.span className="skills_percentage skills_invision" {...barAnim}></motion.span>
                      </div>
                    </div>

                    <div className="skills_data">
                    <div className="skills_titles">
                      <h3 className="skills_name">Illustrator</h3>
                      <span className="skills_number">85%</span>
                    </div>
                    <div className="skills_bar">
                      <motion.span className="skills_percentage skills_bootstrap" {...barAnim}></motion.span>
                    </div>
                  </div>

                    {/* <div className="skills_data">
    <div className="skills_titles">
      <h3 className="skills_name">Photoshop</h3>
      <span className="skills_number">60%</span>
    </div>
    <div className="skills_bar">
    <motion.span className="skills_percentage skills_photoshop" {...barAnim}></motion.span>
    </div>
  </div> */}
                  </div>
                </div>
              </div>


              <div className="skills_header space_bg_ecra">
                <div className="arrow_nome">
                  <img
                    className="icons_skills"
                    src={frontendICON}
                    alt="IconFrontEnd"
                  />
                  <h3 className="skills_title">Desenvolvimento Front-end</h3>
                  {/* <img className="arrow_ajust" src={arrowDown}/>*/}
                </div>
                <div className="skills_list grid">
                  <div className="skills_data">
                    <div className="skills_titles">
                      <h3 className="skills_name">HTML5</h3>
                      <span className="skills_number">90%</span>
                    </div>

                    <div className="skills_bar">
                      <motion.span className="skills_percentage skills_html" {...barAnim}></motion.span>
                    </div>
                  </div>

                  {/* <div className="skills_data">
    <div className="skills_titles">
      <h3 className="skills_name">CSS3</h3>
      <span className="skills_number">80%</span>
    </div>
    <div className="skills_bar">
    <motion.span className="skills_percentage skills_css" {...barAnim}></motion.span>
    </div>
  </div> */}

                  <div className="skills_data">
                    <div className="skills_titles">
                      <h3 className="skills_name">CSS3 e Bootstrap</h3>
                      <span className="skills_number">85%</span>
                    </div>
                    <div className="skills_bar">
                      <motion.span className="skills_percentage skills_bootstrap" {...barAnim}></motion.span>
                    </div>
                  </div>

                  <div className="skills_data">
                    <div className="skills_titles">
                      <h3 className="skills_name">JavaScript</h3>
                      <span className="skills_number">80%</span>
                    </div>
                    <div className="skills_bar">
                      <motion.span className="skills_percentage skills_illustrator" {...barAnim}></motion.span>
                    </div>
                  </div>

                  <div className="skills_data">
                    <div className="skills_titles">
                      <h3 className="skills_name">React</h3>
                      <span className="skills_number">85%</span>
                    </div>
                    <div className="skills_bar">
                      <motion.span className="skills_percentage skills_bootstrap" {...barAnim}></motion.span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      </Reveal>
    </div>
  );
};

export default Skills;
