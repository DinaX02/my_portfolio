import React, {useState, useEffect} from "react";
import ProjectKoruImg from "../assets/koru_project_img.png";
// import ZetflickstKoruImg from "../assets/zetflicks_proj_3.png";
import BoomerangCapa from "../assets/capa_boomerang_pequena.png"
import UXToolkitBanner from "../assets/ux toolkit_banner.svg";
import "../App.css";
import ImgDinisProjetos from "../assets/projetos_page_svg.svg";
import ImgDinisProjetos2 from "../assets/projetos_page_2_v2.svg";
import TocareBanner from "../assets/Tocare_banner.png";
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

const ProjectssALONEE = () => {

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  useEffect(() => {
    // Função para verificar a largura da tela e atualizar o estado hovered
    const handleScreenSizeChange = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 423) {
        setHovered(false);
      }
    };

    // Adiciona o listener para verificar a largura da tela quando o componente é montado
    window.addEventListener("resize", handleScreenSizeChange);

    // Remove o listener quando o componente é desmontado para evitar vazamento de memória
    return () => {
      window.removeEventListener("resize", handleScreenSizeChange);
    };
  }, []);

  return (
    <div className="spacee_single_perojts" id="intro">
      <img
        className="projetos_foto_circulo"
        src={hovered ? ImgDinisProjetos2 : ImgDinisProjetos}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        alt="projetos_DINIS"
      />


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

export default ProjectssALONEE;

