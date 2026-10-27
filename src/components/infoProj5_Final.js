import React, { useState, useEffect} from "react";
import "../App.css";
import { useFecharModal } from "./acessibilidade";
import Separadores from "./Separadores";
import RequisitosToCare from "../assets/requesitos_tocare.webp";
import SolutionToCare from "../assets/solucao_tocare.png";
import InovationToCare from "../assets/inovacao_tocare.png";
import styled from "styled-components";

const InfoProj5Final = () => {
  const [viewImage, setViewImage] = useState(null);

  useEffect(() => {

    if (viewImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
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
          <span className="title_marcado_tocare">ToCare.</span>
        </h2>

        <Separadores
          rotulo="ToCare"
          cor="#2EA7BA"
          onAmpliar={openImageView}
          itens={[
          { id: "solucao", rotulo: "Solução", imagem: SolutionToCare, alt: "solucao", largura: 1812, altura: 905 },
          { id: "requisitos", rotulo: "Requisitos", imagem: RequisitosToCare, alt: "requisitos", largura: 1812, altura: 905 },
          { id: "inovacao", rotulo: "Inovação", imagem: InovationToCare, alt: "inocação", largura: 1812, altura: 905 },
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


export default InfoProj5Final;