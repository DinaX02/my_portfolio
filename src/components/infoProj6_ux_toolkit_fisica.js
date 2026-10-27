import React, { useState, useEffect} from "react";
import "../App.css";
import { useFecharModal } from "./acessibilidade";
import Separadores from "./Separadores";
import ExerciciosPraticosToolkitFisica from "../assets/ExerciciosPraticos_uxtoolkit.webp";
import MecanicasToolkitFisica from "../assets/MecanicaseFormasdeAplicacao_uxtoolkit.png";
import LigacaoComponentes from "../assets/LigacaoEntreComponentes.webp";
import OrganizacaoVisual from "../assets/OrganizacaoVisual.webp";
import EstruturadaToolkitFisica from "../assets/EstruturadaToolkitFisica.webp";
import styled from "styled-components";

const InfoProj6UXToolkitFisica = () => {
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
          <span className="title_marcado_uxtoolkit">Toolkit Física.</span>
        </h2>
              <p className="texto_corrido" style={{width:"80%"}}>A componente física da toolkit consiste num conjunto de trinta e sete (37) cartas, 
construídas a partir da categorização feita no âmbito deste estudo. Além destas cartas, 
a toolkit inclui um manual de utilização que tem o intuito de explicar aos utilizadores como a 
toolkit funciona, e um conjunto extra de três (3) exercícios práticos desenhados para estimular 
a aplicação mais prática e dinâmica desta componente física. 
        </p>
        <Separadores
          rotulo="Componente física da toolkit"
          cor="#CA9050"
          onAmpliar={openImageView}
          itens={[
          { id: "estruturadatoolkitfisica", rotulo: "Estrutura da Toolkit", imagem: EstruturadaToolkitFisica, alt: "estrutura da toolkit fisica", largura: 1812, altura: 905 },
          { id: "organizacaovisual", rotulo: "Organização Visual", imagem: OrganizacaoVisual, alt: "Organizacao visual do conteudo das cartas da toolkit fisica", largura: 1812, altura: 905 },
          { id: "ligacaoentrecomponentes", rotulo: "Ligação entre Componentes", imagem: LigacaoComponentes, alt: "Ligacao entre componente fisica e digital", largura: 1812, altura: 905 },
          { id: "mecanicastoolkitfisica", rotulo: "Mecânicas e formas de aplicação", imagem: MecanicasToolkitFisica, alt: "Mecanicas e formas de aplicacao da toolkit fisica", largura: 1812, altura: 905 },
          { id: "exerciciospraticostoolkitfisica", rotulo: "Exercícios Práticos", imagem: ExerciciosPraticosToolkitFisica, alt: "exercicios praticos toolkit fisica", largura: 1812, altura: 905 },
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




export default InfoProj6UXToolkitFisica;