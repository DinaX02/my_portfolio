import React from "react";
import webDesignicon from "../assets/web design.png"
import frontendICON from "../assets/icon_front_end.png"
import "../App.css";

const Skills = () => {
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

  return (
    <div className="skills_div">

<div className="linhasss_roxos">
      <div style={linhaStyle}>
        <p style={numeroStyle}>02</p>
      </div>
      </div>

      <p  id="skills" className="introduction">
        A nível Técnico{" "}
      </p>
      <div className="title-with-marker">
    

    <h1 className="big_title">Skills.</h1>
    </div>
    <div className="instagram-container">
    <div className="instagram-info"> 
   
     <p style={{marginTop:40, fontSize:19}}>Através do  <span className="cor_nome_2">Front-end</span> e  <span className="cor_nome_2">UX/UI Design</span>, sou capaz de criar experiências envolventes e únicas no utilizador , combinando o design com o conhecimento técnico para o desenvolvimento de soluções web que cativam e satisfazem os seus utilizadores.
     </p>


   </div>
   <div className="other-info">
{/* <img className="img_vision" src={imgVisaoGeRAL}/>  */}
      </div></div>


      <section className="skills_geral skills section">
        <div className="skills_container container grid">
          <div>
            <div className="skills_content">
              <div className="skills_header space_bg_ecra">

<div className="arrow_nome">
<img className="icons_skills" src={frontendICON}/>
  <h1 className="skills_title">Desenvolvimento Front-end</h1>
 {/* <img className="arrow_ajust" src={arrowDown}/>*/}
</div>
<div className="skills_list grid">

  <div className="skills_data">
    <div className="skills_titles">
      <h3 className="skills_name">HTML5</h3>
      <span className="skills_number">90%</span>
    </div>


    <div className="skills_bar">
    <span className="skills_percentage skills_html"></span>
    </div>
  </div>

  {/* <div className="skills_data">
    <div className="skills_titles">
      <h3 className="skills_name">CSS3</h3>
      <span className="skills_number">80%</span>
    </div>
    <div className="skills_bar">
    <span className="skills_percentage skills_css"></span>
    </div>
  </div> */}

  <div className="skills_data">
    <div className="skills_titles">
      <h3 className="skills_name">CSS3 e Bootstrap</h3>
      <span className="skills_number">85%</span>
    </div>
    <div className="skills_bar">
    <span className="skills_percentage skills_bootstrap"></span>
    </div>
  </div>

  <div className="skills_data">
    <div className="skills_titles">
      <h3 className="skills_name">JavaScript</h3>
      <span className="skills_number">70%</span>
    </div>
    <div className="skills_bar">
    <span className="skills_percentage skills_javascript"></span>
    </div>
  </div>

  <div className="skills_data">
    <div className="skills_titles">
      <h3 className="skills_name">React</h3>
      <span className="skills_number">80%</span>
    </div>
    <div className="skills_bar">
    <span className="skills_percentage skills_react"></span>
    </div>
  </div>
</div>

              </div>
           


            <div className="skills_content">
              <div className="skills_header space_bg_ecra_2">

                <div className="arrow_nome">
<img className="icons_skills" src={webDesignicon }/>
  <h1 className="skills_title">UX/ UI Design</h1>
 {/*  <img className="arrow_ajust" src={arrowDown}/>*/}
</div>
<div className="skills_list grid">

  <div className="skills_data">
    <div className="skills_titles">
      <h3 className="skills_name">Sketching</h3>
      <span className="skills_number">90%</span>
    </div>


    <div className="skills_bar">
    <span className="skills_percentage skills_sketch"></span>
    </div>
  </div>

  <div className="skills_data">
    <div className="skills_titles">
      <h3 className="skills_name">Figma</h3>
      <span className="skills_number">80%</span>
    </div>
    <div className="skills_bar">
    <span className="skills_percentage skills_figma"></span>
    </div>
  </div>

  <div className="skills_data">
    <div className="skills_titles">
      <h3 className="skills_name">Invision</h3>
      <span className="skills_number">75%</span>
    </div>
    <div className="skills_bar">
    <span className="skills_percentage skills_invision"></span>
    </div>
  </div>

  <div className="skills_data">
    <div className="skills_titles">
      <h3 className="skills_name">Illustrator</h3>
      <span className="skills_number">80%</span>
    </div>
    <div className="skills_bar">
    <span className="skills_percentage skills_illustrator"></span>
    </div>
  </div>

  {/* <div className="skills_data">
    <div className="skills_titles">
      <h3 className="skills_name">Photoshop</h3>
      <span className="skills_number">60%</span>
    </div>
    <div className="skills_bar">
    <span className="skills_percentage skills_photoshop"></span>
    </div>
  </div> */}
  
</div>
</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
