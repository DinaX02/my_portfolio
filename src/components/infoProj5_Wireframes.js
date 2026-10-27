import React, { useState, useEffect} from "react";
import "../App.css";
import { useFecharModal } from "./acessibilidade";
import Separadores from "./Separadores";
import LowFi1 from "../assets/Lofi-protypes1.jpg";
import LowFi2 from "../assets/LowFi-prototypes2.jpg"
import styled from "styled-components";

const InfoProj5Wireframes = () => {
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
          <span className="title_marcado_tocare">Wireframes.</span>
        </h2>

        <Separadores
          rotulo="Wireframes"
          cor="#2EA7BA"
          onAmpliar={openImageView}
          itens={[
          { id: "designSystem", rotulo: "Low-fi (Crazy 8) 1", imagem: LowFi1, alt: "onboarding- wireframes", largura: 1812, altura: 905 },
          { id: "colors", rotulo: "Low-fi (Crazy 8) 2", imagem: LowFi2, alt: "Criar conta- wireframes", largura: 1812, altura: 905 },
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


export default InfoProj5Wireframes;