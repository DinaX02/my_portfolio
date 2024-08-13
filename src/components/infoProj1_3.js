import React, { useState, useEffect } from "react";
import "../App.css";
import Persona from "../assets/persona_koru.jpg";
import styled from "styled-components";

const InfoProj1_3 = () => {
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

  return (
    <div className="info_p22222">
      {viewImage && (
        <ImageViewModal onClick={closeImageView}>
          <ImageView>
            <img src={viewImage} alt="Imagem em tamanho maior" />
          </ImageView>
        </ImageViewModal>
      )}

      <div className="instagram-container">
        <div className="instagram-info">
          <p className="fontsize_tags">
            <span className="title_marcado_koru">Persona.</span>
          </p>

          <p className="paragrafo_origens">
            Como público-alvo da aplicação inserem-se os participantes dos
            eventos, que poderão usar a plataforma para submissão de projetos ou
            para votação dos seus projetos preferidos.
            <br></br>
            <br></br>
            Para idealizar a interação deste público-alvo criamos uma persona
            com determinados comportamentos, personalidade e motivações. Neste
            caso, o objetivo foi garantir que este tipo de utilizador da nossa
            plataforma representaria as necessidades principais de alguém que
            tem como objetivo dinamizar a sua presença nas iniciativas em que
            participa.
            <br></br>
            <br></br>
            Entendemos que este tipo de utilizador terá como principais objetivos
            na aplicação, recorrer ao sistema de voto, e analisar as posições do
            ranking de projetos em tempo real. Ou seja, acreditamos que esta
            persona não representa um público que procure uma interface completa
            de gestão do evento, optando por uma interface simples e intuitiva.
          </p>
        </div>

        <div className="other-info">
          <img
            style={{borderRadius: "8px"}}
            className="img_vision"
            src={Persona}
            alt="personaImg"
            onClick={() => openImageView(Persona)}
          />
        </div>
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
  background-color: #807dff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default InfoProj1_3;





