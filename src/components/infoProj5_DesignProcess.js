import React, { useState, useEffect } from "react";
import "../App.css";
import { ampliavel, useFecharModal } from "./acessibilidade";
import EmpathyMap from "../assets/empathy map.png";
import DiagramDesignProcess from "../assets/design_thinking_grafico_tocare.png";
import BenchmarkingToCare from "../assets/benchmarking.png";
import HMWToCare from "../assets/HMWtocare.png";
import PersonaToCare from "../assets/PersonaToCare.png";
import InsightsToCare from "../assets/Insights.png";
import UserJourneyMapToCare from "../assets/User Journey Map_tocare.png";
import UserFlowToCare from "../assets/User Flow_tocare.png";
import MatrizPriority from "../assets/matriz_prioridade.svg";
import styled from "styled-components";

const InfoProj5_DesignProcess = () => {
  const [activeTab, setActiveTab] = useState("empathymap");
  const [viewImage, setViewImage] = useState(null);

  useEffect(() => {
    if (viewImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [viewImage]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

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
      <TabsContainer>
          <TabButton
            onClick={() => handleTabClick("empathymap")}
            active={activeTab === "empathymap"}
            aria-pressed={activeTab === "empathymap"}
          >
            Empathy Map
          </TabButton>
          <TabButton
            onClick={() => handleTabClick("designSystem")}
            active={activeTab === "designSystem"}
            aria-pressed={activeTab === "designSystem"}
          >
            Benchmarking
          </TabButton>

          <TabButton
            onClick={() => handleTabClick("persona")}
            active={activeTab === "persona"}
            aria-pressed={activeTab === "persona"}
          >
            Persona
          </TabButton>

          <TabButton
            onClick={() => handleTabClick("hmw")}
            active={activeTab === "hmw"}
            aria-pressed={activeTab === "hmw"}
          >
            How might we? 
          </TabButton>
  
          <TabButton
            onClick={() => handleTabClick("insights")}
            active={activeTab === "insights"}
            aria-pressed={activeTab === "insights"}
          >
            Insights 
          </TabButton>

          <TabButton
            onClick={() => handleTabClick("userjourney")}
            active={activeTab === "userjourney"}
            aria-pressed={activeTab === "userjourney"}
          >
            User Journey Map 
          </TabButton>

          <TabButton
            onClick={() => handleTabClick("userflow")}
            active={activeTab === "userflow"}
            aria-pressed={activeTab === "userflow"}
          >
            User Flow 
          </TabButton>
          <TabButton
            onClick={() => handleTabClick("matrizprioridade")}
            active={activeTab === "matrizprioridade"}
            aria-pressed={activeTab === "matrizprioridade"}
          >
            Matriz de Prioridade 
          </TabButton>

        </TabsContainer>
        <ImageContainer>
        {activeTab === "empathymap" && (
            <img
              className="img_diagram"
              src={EmpathyMap}
              alt="empathy map_tocare"
              {...ampliavel(() => openImageView(EmpathyMap))}
            />
          )}
          {activeTab === "designSystem" && (
            <img
              className="img_diagram"
              src={BenchmarkingToCare}
              alt="benchmarking_tocare"
              {...ampliavel(() => openImageView(BenchmarkingToCare))}
            />
          )}
          {activeTab === "persona" && (
            <img
              className="img_diagram"
              src={PersonaToCare}
              alt="persona"
              {...ampliavel(() => openImageView(PersonaToCare))}
            />
          )}
          {activeTab === "hmw" && (
            <img
              className="img_diagram"
              src={HMWToCare}
              alt="How might we questions"
              {...ampliavel(() => openImageView(HMWToCare))}
            />
          )}
            {activeTab === "insights" && (
            <img
              className="img_diagram"
              src={InsightsToCare}
              alt="Insights"
              {...ampliavel(() => openImageView(InsightsToCare))}
            />
          )}
            {activeTab === "userjourney" && (
            <img
              className="img_diagram"
              src={UserJourneyMapToCare}
              alt="user journey map"
              {...ampliavel(() => openImageView(UserJourneyMapToCare))}
            />
          )}
            {activeTab === "userflow" && (
            <img
              className="img_diagram"
              src={UserFlowToCare}
              alt="user flow"
              {...ampliavel(() => openImageView(UserFlowToCare))}
            />
          )}
            {activeTab === "matrizprioridade" && (
            <img
              className="img_diagram"
              src={MatrizPriority}
              alt="matriz de prioridade"
              {...ampliavel(() => openImageView(MatrizPriority))}
            />
          )}
        </ImageContainer>
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

const TabsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 1em;
    justify-content: center;
`;

const TabButton = styled.button`
  background-color: ${(props) => (props.active ? "#2EA7BA" : "transparent")};
  color: ${(props) => (props.active ? "#fff" : "#2E2E2E")};
  border: 2px solid ${(props) => (props.active ? "transparent" : "#ccc")};
  font-family: 'Poppins', sans-serif;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  margin-right: 10px;
  margin-bottom: 1em;
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
