import React, { useState, useEffect } from "react";
import "../App.css";
import { ampliavel, useFecharModal } from "./acessibilidade";
import Separadores from "./Separadores";
import DiagramDesignProcess from "../assets/metodologia_Uxtoolkit.png";
import ObjetivosEstudo from "../assets/Objetivos_uxtoolkit.png";
import ReferencialTeorico from "../assets/referencialTeorico_uxtoolkit.webp";
import InstrumentosRecolhadeDados from "../assets/instrumentoRecolhadeDados.png";
import PerguntadeInvestigacao from "../assets/pergunta de investigacao_uxtoolkit.png";
import styled from "styled-components";

const InfoProj6_DesignProcess = () => {
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
    <div className="info_uxtoolkit">
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
          <span className="title_marcado_uxtoolkit">Metodologia.</span>
        </h2>
        <p className="paragrafo_design_process">
          A development(al) research permitiu a integração contínua de investigação e desenvolvimento na construção e avaliação de protótipos, assegurando um ciclo permanente de refinamento do artefacto até à sua plena adequação ao contexto de utilização.<br></br><br></br>Para tal, o processo decorreu em cinco fases: levantamento teórico, planeamento e criação dos instrumentos de recolha de dados, desenvolvimento de protótipos e recolha e análise dos dados referentes ao questionário e entrevistas, validação das soluções com utilizadores e refinamento final, e por fim a consolidação e disseminação da informação recolhida ao longo do estudo.
        </p>
        <ImageContainer>
          <img
            className="img_diagram"
            src={DiagramDesignProcess}
            alt="Diagrama processo metodologico"
            {...ampliavel(() => openImageView(DiagramDesignProcess))}
          />
        </ImageContainer>
      </div>
      <div className="containerDesignProcess">
      <h2 className="fontsize_tags_tocare">
          <span className="title_marcado_uxtoolkit">Processo.</span>
      </h2>
      <Separadores
        rotulo="Processo da investigação"
        cor="#CA9050"
        onAmpliar={openImageView}
        itens={[
        { id: "perguntadeinvestigacao", rotulo: "Pergunta de Investigação", imagem: PerguntadeInvestigacao, alt: "pergunta de investigacao", largura: 1812, altura: 905 },
        { id: "objetivos", rotulo: "Objetivos", imagem: ObjetivosEstudo, alt: "objetivos do estudo ux toolkit", largura: 1812, altura: 905 },
        { id: "referencialteorico", rotulo: "Referencial Teórico", imagem: ReferencialTeorico, alt: "Referencial teorico do estudo", largura: 1812, altura: 905 },
        { id: "instrumentosrecolhadedados", rotulo: "Instrumentos de recolha de dados", imagem: InstrumentosRecolhadeDados, alt: "Instrumentos Recolha de Dados", largura: 1812, altura: 905 },
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
  background-color: #CA9050;
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

export default InfoProj6_DesignProcess;
