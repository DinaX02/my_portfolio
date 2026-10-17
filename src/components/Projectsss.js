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
import { motion, useMotionValue, useSpring } from "framer-motion";

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
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
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

// card que inclina em 3D na direção do rato
const TiltCard = ({ children }) => {
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useSpring(rx, { stiffness: 150, damping: 15 });
  const rotateY = useSpring(ry, { stiffness: 150, damping: 15 });

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 12);
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * 12);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <CardWrapper
      variants={cardVariants}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </CardWrapper>
  );
};

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
      <div
        className="projetos_foto_circulo projetos_foto_wrapper"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={ImgDinisProjetos} alt="Fotografia de Dinis Antunes" />
        {/* a imagem do balão já inclui a foto na mesma posição: só aparece por cima */}
        <img
          className={`projetos_foto_balao ${hovered ? "visivel" : ""}`}
          src={ImgDinisProjetos2}
          alt=""
          aria-hidden="true"
        />
      </div>


      <h1 className="sr-only">Projetos</h1>
      <CardsContainer variants={cardsVariants} initial="hidden" animate="visible">
        <TiltCard>
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
        </TiltCard>
        <TiltCard>
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
        </TiltCard>
        <TiltCard>
          <ProjectUICard
            image={TocareBanner}
            title="ToCare"
            year="2024"
            tags={["Case Study", "1 Week Challenge", "UX/UI Design"]}
            link="/project-ToCare"
          />
        </TiltCard>
        <TiltCard>
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
        </TiltCard>
      </CardsContainer>
    </div>
  );
};

export default ProjectssALONEE;

