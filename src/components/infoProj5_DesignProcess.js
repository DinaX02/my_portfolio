import React, { useState, useEffect } from "react";
import "../App.css";
import DiagramDesignProcess from "../assets/design_thinking_grafico_tocare.png";
import OnBoardingImage from "../assets/onboarding.png";
import EntrarCriarContaImage from "../assets/Entrar_criarconta.png"
import styled from "styled-components";

const InfoProj5_DesignProcess = () => {
  const [activeTab, setActiveTab] = useState("designSystem");
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

  return (
    <div className="info_tocare">
      {viewImage && (
        <ImageViewModal onClick={closeImageView}>
          <ImageView>
            <img src={viewImage} alt="Imagem em tamanho maior" />
          </ImageView>
        </ImageViewModal>
      )}
      <div className="containerDesignProcess">
        <p className="fontsize_tags">
          <span className="title_marcado_tocare">Design Thinking.</span>
        </p>
        <p className="paragrafo_design_process">
          Para dar resposta a este desafio, foi utilizada a metodologia de Design Thinking para a estruturação e desenvolvimento da ToCare. Neste desafio foram trabalhadas apenas as 4 primeiras fases desta metodologia, tendo sido priorizadas especialmente as fases da Empatia, Definição e Ideação.
        </p>
        <ImageContainer>
          <img
            className="img_diagram"
            src={DiagramDesignProcess}
            alt="Design Process Diagram"
            onClick={() => openImageView(DiagramDesignProcess)}
          />
        </ImageContainer>
      </div>
      <div className="containerDesignProcess">
      <p className="fontsize_tags_tocare">
          <span className="title_marcado_tocare">Processo.</span>
        </p>
      <TabsContainer>
          <TabButton
            onClick={() => handleTabClick("designSystem")}
            active={activeTab === "designSystem"}
          >
            OnBoarding
          </TabButton>
          <TabButton
            onClick={() => handleTabClick("colors")}
            active={activeTab === "colors"}
          >
            Entrar/ Criar Conta
          </TabButton>

        </TabsContainer>
        <ImageContainer>
          {activeTab === "designSystem" && (
            <img
              className="img_diagram"
              src={OnBoardingImage}
              alt="onboarding- wireframes"
              onClick={() => openImageView(OnBoardingImage)}
            />
          )}
          {activeTab === "colors" && (
            <img
              className="img_diagram"
              src={EntrarCriarContaImage}
              alt="Criar conta- wireframes"
              onClick={() => openImageView(EntrarCriarContaImage)}
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
