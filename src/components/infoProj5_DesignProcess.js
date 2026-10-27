import React, { useState, useEffect } from "react";
import "../App.css";
import { ampliavel, useFecharModal } from "./acessibilidade";
import Separadores from "./Separadores";
import EmpathyMap from "../assets/empathy map.webp";
import DiagramDesignProcess from "../assets/design_thinking_grafico_tocare.png";
import BenchmarkingToCare from "../assets/benchmarking.webp";
import HMWToCare from "../assets/HMWtocare.webp";
import PersonaToCare from "../assets/PersonaToCare.webp";
import InsightsToCare from "../assets/Insights.webp";
import UserJourneyMapToCare from "../assets/User Journey Map_tocare.webp";
import UserFlowToCare from "../assets/User Flow_tocare.webp";
import MatrizPriority from "../assets/matriz_prioridade.svg";
import styled from "styled-components";

const InfoProj5_DesignProcess = () => {
  const [viewImage, setViewImage] = useState(null);

  useEffect(() => {
    if (viewImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [viewImage]);


  const openImageView = (imageUrl) => {
    setViewImage(imageUrl);
  };

  const closeImageView = () => {
    setViewImage(null);
  };

    useFecharModal(viewImage, closeImageView);

  return (
    <div className="info_tocare">
      {viewImage && (
        <ImageViewModal onClick={closeImageView} role="dialog" aria-modal="true" aria-label="Imagem ampliada">
          <button type="button" className="modal_fechar" aria-label="Fechar imagem">×</button>
          <ImageView>
            <img src={viewImage} alt="Imagem em tamanho maior" />
          </ImageView>
        </ImageViewModal>
      )}
      <div className="containerDesignProcess">
        <h2 className="fontsize_tags">
          <span className="title_marcado_tocare">Design Thinking.</span>
        </h2>
        <p className="paragrafo_design_process">
          Para dar resposta a este desafio, foi utilizada a metodologia de Design Thinking para a estruturação e desenvolvimento da ToCare. Neste desafio foram trabalhadas apenas as 4 primeiras fases desta metodologia, tendo sido priorizadas especialmente as fases da Empatia, Definição e Ideação.
        </p>
        <ImageContainer>
          <img
            className="img_diagram"
            src={DiagramDesignProcess}
            alt="Design Process Diagram"
            {...ampliavel(() => openImageView(DiagramDesignProcess))}
          />
        </ImageContainer>
      </div>
      <div className="containerDesignProcess">
      <h2 className="fontsize_tags_tocare">
          <span className="title_marcado_tocare">Processo.</span>
      </h2>
      <Separadores
        rotulo="Processo"
        cor="#2EA7BA"
        onAmpliar={openImageView}
        itens={[
        { id: "empathymap", rotulo: "Empathy Map", imagem: EmpathyMap, alt: "empathy map_tocare", largura: 1812, altura: 905 },
        { id: "designSystem", rotulo: "Benchmarking", imagem: BenchmarkingToCare, alt: "benchmarking_tocare", largura: 1812, altura: 905 },
        { id: "persona", rotulo: "Persona", imagem: PersonaToCare, alt: "persona", largura: 1812, altura: 905 },
        { id: "hmw", rotulo: "How might we?", imagem: HMWToCare, alt: "How might we questions", largura: 1812, altura: 905 },
        { id: "insights", rotulo: "Insights", imagem: InsightsToCare, alt: "Insights", largura: 1812, altura: 905 },
        { id: "userjourney", rotulo: "User Journey Map", imagem: UserJourneyMapToCare, alt: "user journey map", largura: 1812, altura: 905 },
        { id: "userflow", rotulo: "User Flow", imagem: UserFlowToCare, alt: "user flow", largura: 1812, altura: 905 },
        { id: "matrizprioridade", rotulo: "Matriz de Prioridade", imagem: MatrizPriority, alt: "matriz de prioridade" },
        ]}
      />
        </div>
    </div>
  );
};

const ImageViewModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;



const ImageView = styled.div`
  max-width: 90%;
  height: auto;
  overflow: hidden;
  border-radius: 8px;
  background-color: #2EA7BA;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
`;

export default InfoProj5_DesignProcess;
