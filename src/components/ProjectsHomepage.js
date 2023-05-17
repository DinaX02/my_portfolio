import React from "react";
import ProjectKoruImg from "../assets/koru_project_img.png";
import ZetflickstKoruImg from "../assets/zetflicks_proj_3.png";
import SubmersoImg from "../assets/submerso_cover.PNG"
import { Link } from "react-router-dom";
import "../App.css";
{/* 
const projects = [
  {
    id: 1,
    title: "Koru Mobile App",
    description: "The app focuses on the dynamics of",
    type: "UX/UI Design",
    image: ProjectKoruImg,
    link: "/project1",
  },
  {
    id: 2,
    title: "Zetflicks",
    description: "Zetflicks é  ver filmes adicioná-los à sua Watchlist.",
    type: "UI Design e Front-end",
    image: ZetflickstKoruImg,
    link: "/project2",
  },
  {
    id: 3,
    title: "Submerso",
    description: " Primeiro projeto em javaScript.",
    type: "Design e Front-end",
    image: SubmersoImg,
    link: "/project3",
  },
];*/}





const ProjectsHomePage = () => {
  return (
    <div id="intro">
      <p id="projetos"  className="introduction">Os meus trabalhos</p>
      <p className="big_title">Projetos.</p>
      <p className="content_intro_hero2  space_bottt">
        Os seguintes projetos mostram as minhas competências e experiência
        através de exemplos reais do meu trabalho. Cada projeto tem uma breve
        descrição e e os respetivos links para os seus protótipos com Live demo.
        <br></br>
        <br></br>
        Estes exemplos refletem a minha capacidade de resolver problemas
        complexos, trabalhar com diferentes tecnologias e gerir projetos de
        forma eficaz.
      </p>

      <section className="portfolio">

<div className="project-card">
  <img src={ProjectKoruImg} alt="koru" />
  <div className="project-info">
    <h2>Koru Mobile App</h2>
   {/*<p>{project.description}</p>*/} 
    <span>UX/UI Design</span>
    <Link to={"/project1"}>Ver detalhes</Link>
  </div>
</div>



<div className="project-card">
  <img src={ZetflickstKoruImg} alt="zetflicks" />
  <div className="project-info">
    <h2>Zetflicks</h2>
   {/*<p>{project.description}</p>*/} 
    <span>UI Design e Front-end</span>
    <Link to={"/project2"}>Ver detalhes</Link>
  </div>
</div>



<div className="project-card">
  <img src={SubmersoImg} alt="submerso" />
  <div className="project-info">
    <h2>Submerso</h2>
   {/*<p>{project.description}</p>*/} 
    <span>Design e Front-end</span>
    <Link to={"/project3"}>Ver detalhes</Link>
  </div>
</div>
</section>

    </div>
  );
};

export default ProjectsHomePage;
