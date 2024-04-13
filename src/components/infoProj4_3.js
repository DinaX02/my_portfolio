import React, { useState } from "react";
import "../App.css";
import DiagramDesignProcess from "../assets/design_process_diagram.png";
import styled from "styled-components";

const InfoProj4_3 = () => {
  const [viewImage, setViewImage] = useState(null);

  const openImageView = (imageUrl) => {
    setViewImage(imageUrl);
  };

  const closeImageView = () => {
    setViewImage(null);
  };

  return (
    <div className="info_p4">
      {viewImage && (
        <ImageViewModal onClick={closeImageView}>
          <ImageView>
            <img src={viewImage} alt="Imagem em tamanho maior" />
          </ImageView>
        </ImageViewModal>
      )}
      <div className="containerDesignProcess">
        <p className="fontsize_tags"><span className="title_marcado_boomerang">Design Process.</span></p>
        <p className="paragrafo_design_process">Para o desenvolvimento deste projeto, foi utilizado o processo de design thinking, de modo a ajudar a descobrir o processo de design centrado no utilizador (UCD) dando prioridade às necessidades e perspectivas dos utilizadores através das fases de empatia, definição, ideação, protótipos e por último os testes desses protótipos.</p>
        <ImageContainer>
          <img
            className="img_diagram"
            src={DiagramDesignProcess}
            alt="Design Process Diagram"
            onClick={() => openImageView(DiagramDesignProcess)}
            
          />
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

const ImageView = styled.div`
  max-width: 90%;
  height: auto;
  overflow: hidden;
  border-radius: 15px;
  background-color: #00C17C;
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

export default InfoProj4_3;
