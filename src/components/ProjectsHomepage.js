import React from "react";
import ProjectKoruImg from "../assets/koru_project_img.png";
import BoomerangCapa from "../assets/capa_boomerang_pequena.png";
import TocareBanner from "../assets/Tocare_banner.png";
import UXToolkitBanner from "../assets/ux toolkit_banner.svg";
import "../App.css";
import ProjectUICard from "./CardUIProject";
import styled from "styled-components";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

export const CardsContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 4rem 2rem;
  box-sizing: border-box;
`;

export const CardWrapper = styled(motion.div)`
  flex: 0 0 320px;
  max-width: 320px;
`;

const cardsVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const ProjectsHomePage = () => {
  return (
    <div id="projetos" className="altura_projetos">
      <Reveal className="container_projectsHp">
        <div className="instagram-info">
          <p className="paragrafo_intro_sizes">Os meus trabalhos</p>

          <h2 className="fontsize_tags">
            <span className="title_marcado_koru">Projetos.</span>
          </h2>
        </div>
      </Reveal>

      <div className="instagram-container">
        <Reveal from="left" className="instagram-info">
          <p className="texto_corrido" style={{ marginTop: 10 }}>
            Os seguintes projetos mostram as minhas competências e experiência
            através de exemplos reais do meu trabalho. Cada projeto apresenta
            uma breve descrição, evidenciando as minhas capacidades e as tarefas
            que fui responsável.
          </p>
        </Reveal>
        <Reveal from="right" delay={0.15} className="other-info">
          <p className="texto_corrido" style={{ marginTop: 10 }}>
            Estes exemplos refletem não só a minha capacidade de resolver
            problemas complexos, trabalhar com diferentes tecnologias e gerir
            projetos de forma eficaz, mas também demonstram a minha dedicação em
            alcançar bons resultados.
          </p>
        </Reveal>
      </div>
      <CardsContainer
        variants={cardsVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <CardWrapper variants={cardVariants}>
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
        <CardWrapper variants={cardVariants}>
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
        <CardWrapper variants={cardVariants}>
          <ProjectUICard
            image={TocareBanner}
            title="ToCare"
            year="2024"
            tags={["Case Study", "1 Week Challenge", "UX/UI Design"]}
            link="/project-ToCare"
          />
        </CardWrapper>
        <CardWrapper variants={cardVariants}>
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
