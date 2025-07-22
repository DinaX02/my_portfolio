import React from "react";
import ProjectKoruImg from "../assets/koru_project_img.png";
import BoomerangCapa from "../assets/capa_boomerang_pequena.png";
import TocareBanner from "../assets/Tocare_banner.png";
import UXToolkitBanner from "../assets/ux toolkit_banner.svg";
import "../App.css";
import ProjectUICard from "./CardUIProject";
import styled from "styled-components";

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;       
  justify-content: center; 
  gap: 2rem; 
  padding: 4rem 2rem;
  box-sizing: border-box;
`;

export const CardWrapper = styled.div`
  flex: 0 0 320px;
  max-width: 320px;
`;

const ProjectsHomePage = () => {
  return (
    <div id="projetos" className="altura_projetos">
      {/* <p className="introduction">Os meus trabalhos</p>
     <div className="title-with-marker_2">
      <p className="big_title">Projetos.</p></div> */}

      <div className="container_projectsHp">
        <div className="instagram-info">
          <p className="paragrafo_intro_sizes">Os meus trabalhos</p>

          <p className="fontsize_tags">
            <span className="title_marcado_koru">Projetos.</span>
          </p>
        </div>
      </div>

      <div className="instagram-container">
        <div className="instagram-info">
          <p style={{ marginTop: 10, fontSize: 19 }}>
            Os seguintes projetos mostram as minhas competências e experiência
            através de exemplos reais do meu trabalho. Cada projeto apresenta
            uma breve descrição, evidenciando as minhas capacidades e as tarefas
            que fui responsável.
          </p>
        </div>
        <div className="other-info">
          <p style={{ marginTop: 10, fontSize: 19 }}>
            Estes exemplos refletem não só a minha capacidade de resolver
            problemas complexos, trabalhar com diferentes tecnologias e gerir
            projetos de forma eficaz, mas também demonstram a minha dedicação em
            alcançar bons resultados.
          </p>
        </div>
      </div>
      <CardsContainer>
        <CardWrapper>
          <ProjectUICard
            image={UXToolkitBanner}
            title="UX Toolkit"
            year="2025"
            tags={[
              "Tese Mestrado",
              "Projeto Investigação",
              "UX/UI Design",
              "Front-end",
            ]}
            link="/project-UXToolkit"
          />
        </CardWrapper>
        <CardWrapper>
          {" "}
          <ProjectUICard
            image={BoomerangCapa}
            title="Boomerang"
            year="2024"
            tags={[
              "UX/UI Design",
              "Branding",
              "Front-end",
              "Challenge Based Learning",
            ]}
            link="/project-Boomerang"
          />
        </CardWrapper>
                <CardWrapper>
          {" "}
          <ProjectUICard
            image={TocareBanner}
            title="ToCare"
            year="2024"
            tags={["Case Study", "1 Week Challenge", "UX/UI Design"]}
            link="/project-ToCare"
          />
        </CardWrapper>
        <CardWrapper>
          {" "}
          <ProjectUICard
            image={ProjectKoruImg}
            title="Koru Mobile App"
            year="2023"
            tags={[
              "Projeto Final Licenciatura",
              "UX/UI Design",
              "Branding",
              "Front-end",
            ]}
            link="/project-Koru"
          />
        </CardWrapper>
      </CardsContainer>
    </div>
  );
};

export default ProjectsHomePage;
