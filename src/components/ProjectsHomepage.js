import React from "react";
import ProjectKoruImg from "../assets/koru_project_img.png";
// import ZetflickstKoruImg from "../assets/zetflicks_proj_3.png";
import BoomerangCapa from "../assets/capa_boomerang_pequena.png"
import { Link } from "react-router-dom";
import "../App.css";

// const projects = [
//   {
//     id: 1,
//     title: "Koru Mobile App",
//     description: "The app focuses on the dynamics of",
//     type: "UX/UI Design",
//     image: ProjectKoruImg,
//     link: "/project1",
//   },
//   {
//     id: 2,
//     title: "Zetflicks",
//     description: "Zetflicks é  ver filmes adicioná-los à sua Watchlist.",
//     type: "UI Design e Front-end",
//     image: ZetflickstKoruImg,
//     link: "/project2",
//   },
//   {
//     id: 3,
//     title: "Submerso",
//     description: " Primeiro projeto em javaScript.",
//     type: "Design e Front-end",
//     image: SubmersoImg,
//     link: "/project3",
//   },
// ];





const ProjectsHomePage = () => {
  return (
    <div id="projetos" className="altura_projetos"> 
    
      
       {/* <p className="introduction">Os meus trabalhos</p>
     <div className="title-with-marker_2">
      <p className="big_title">Projetos.</p></div> */}

  <div className="container_projectsHp">
  <div className="instagram-info">
  <p className="paragrafo_intro_sizes">Os meus trabalhos</p>

<p className="fontsize_tags"><span className="title_marcado_koru">Projetos.</span></p>
</div>
</div>         

 <div className="instagram-container">



      <div className="instagram-info">
        
        <p style={{marginTop:10, fontSize:19}}>Os seguintes projetos mostram as minhas competências e experiência através de exemplos reais do meu trabalho. Cada projeto apresenta uma breve descrição, evidenciando as minhas capacidades e as tarefas que fui responsável.
        </p>
        

      </div>
      <div className="other-info">
        <p style={{marginTop:10, fontSize:19}}>Estes exemplos refletem não só a minha capacidade de resolver problemas complexos, trabalhar com diferentes tecnologias e gerir projetos de forma eficaz, mas também demonstram a minha dedicação em alcançar bons resultados.</p>
      </div>
    </div> 
      <section className="portfolio">

<div className="project-card">
  <img src={ProjectKoruImg} alt="koru" />
  <div className="project-info">
    <h2>Koru Mobile App</h2>
   {/*<p>{project.description}</p>*/} 
   <div style={{display: "flex", flexDirection:"row"}}>
           <p className="tags_projetos">UX/UI Design</p><p className="tags_projetos">Branding</p><p className="tags_projetos">Front-end</p></div>
    <Link to={"/project-Koru"}>Ver detalhes</Link>
  </div>
</div>


 {/*
<div className="project-card">
  <img src={ZetflickstKoruImg} alt="zetflicks" />
  <div className="project-info">
    <h2>Zetflicks</h2>
  <p>{project.description}</p>
    <span>UI Design e Front-end</span>
    <Link to={"/project2"}>Ver detalhes</Link>
  </div>
</div>*/} 



<div className="project-card">
  <img src={BoomerangCapa} alt="Boomerang" />
  <div className="project-info">
    <h2>Boomerang</h2>
   {/*<p>{project.description}</p>*/} 
   <div style={{display: "flex", flexDirection:"row"}}>
           <p className="tags_projetos">UX/UI Design</p><p className="tags_projetos">Branding</p><p className="tags_projetos">Front-end</p></div>
    <Link to={"/project-Boomerang"}>Ver detalhes</Link>
  </div>
</div>

<div className="project-card">
          <img src={BoomerangCapa} alt="Boomerang" />
          <div className="project-info">
            <h2>ToCare</h2>
           <div style={{display: "flex", flexDirection:"row"}}>
           <p className="tags_projetos">Case Study</p><p className="tags_projetos">UX/UI Design</p></div>
            <Link to={"/project-ToCare"}>Ver detalhes</Link>
          </div>
        </div>

</section>

    </div>
  );
};

export default ProjectsHomePage;
