import React, { useState, useEffect } from "react";
import "../App.css";
import { ampliavel, useFecharModal } from "./acessibilidade";
import Separadores from "./Separadores";
import { QRCodeCanvas } from "qrcode.react";
import TecnologiasUtilizadas from "../assets/tecnologias_usadas_boomerang.webp";
import AcessibilidadeBommerang from "../assets/Acessibilidade_boomerang.webp";
import ResultadosAcessibilidadeBoomerang from "../assets/Resultados_Acessibilidade_boomerang.webp";
import DiagramDesenvolvimentoProcess from "../assets/process_desenvolvimento_boomerang.png";
import styled from "styled-components";

const InfoProj4DesignProcess = () => {
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
    <div className="info_p4">
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
          <span className="title_marcado_boomerang">Desenvolvimento.</span>
        </h2>
        <p className="paragrafo_design_process">
          Este projeto, foi desenvolvido durante <strong>1 ano </strong> sendo que após as fases de Ideação e Design estarem concluídas veio a fase mais trabalhosa do projeto, o Desenvolvimento, que ficou marcado principalmente pelo desenvolvimento Front-end, Back-end e a preocupação constante pela Acessibilidade do mesmo.
        </p>
        <ImageContainer>
          <img
            className="img_diagram"
            src={DiagramDesenvolvimentoProcess}
            alt="Design Process Diagram"
            {...ampliavel(() => openImageView(DiagramDesenvolvimentoProcess))}
          />
        </ImageContainer>


        <Separadores
          rotulo="Desenvolvimento"
          cor="#00c17c"
          onAmpliar={openImageView}
          itens={[
          { id: "tecnologias", rotulo: "Tecnologias Utilizadas", imagem: TecnologiasUtilizadas, alt: "Tecnologias utilizadas no desenbvolvimento da Boomerang", largura: 1812, altura: 905 },
          { id: "acessibilidade", rotulo: "Detalhes da Acessibilidade", imagem: AcessibilidadeBommerang, alt: "Ferramentas utilizadas para meder a Acessibilidade da Boomerang", largura: 1812, altura: 905 },
          { id: "resultadosAcessibilidade", rotulo: "Resutlados Acessibilidade", imagem: ResultadosAcessibilidadeBoomerang, alt: "Resultados obtidos na Acessibilidade do Projeto Boomerang", largura: 1812, altura: 905 },
          ]}
        />

           <div className="links_koruu_2" style={{ marginTop: "2em", marginBottom: "1em", display:"flex", flexDirection:"column"}}>
          <div className="links_boomerang" style={{ paddingRight: 20 }}>
            <h3>Link:</h3>
            <a href="https://github.com/DinaX02/Boomerang" target="_blank" rel="noopener noreferrer">
              <p style={{ marginLeft: 10 }}>Repositório Front-end</p>
            </a>
          </div>
          <div className="links_boomerang" style={{ textAlign: "center", marginTop: "20px", display:"flex", flexDirection:"column"}}>
            <QRCodeCanvas value="https://664e68495c92c646f698fe82--idyllic-daffodil-41744f.netlify.app/" />
            <p>Projeto com Dados Mock-up</p>
          </div>
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
  background-color: #00c17c;
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


export default InfoProj4DesignProcess;
