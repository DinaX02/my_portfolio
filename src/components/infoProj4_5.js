import React, { useState, useEffect} from "react";
import "../App.css";
import { useFecharModal } from "./acessibilidade";
import Separadores from "./Separadores";
import OnBoardingImage from "../assets/onboarding.png";
import EntrarCriarContaImage from "../assets/Entrar_criarconta.webp"
import HomepageWireframes from "../assets/homepage_wireframess.webp";
import PesquisaWireframes from "../assets/pesquisa_wireframess.png";
import ArigoeChatImage from "../assets/artigo_wireframess.png";
import AlugarArtigoImage from "../assets/rent_wireframess_2.webp";
import PublicarImage from "../assets/publicar_wireframess.png";
import CaixadeEntradeImage from "../assets/caixa de entrada_wireframess.png";
import PerfilImage from "../assets/perfil_wireframess.webp";
import styled from "styled-components";

const InfoProj4_5 = () => {
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
          <span className="title_marcado_boomerang">Ecrãs.</span>
        </h2>

        <Separadores
          rotulo="Ecrãs"
          cor="#00c17c"
          onAmpliar={openImageView}
          itens={[
          { id: "designSystem", rotulo: "OnBoarding", imagem: OnBoardingImage, alt: "onboarding- wireframes", largura: 1812, altura: 905 },
          { id: "colors", rotulo: "Entrar/ Criar Conta", imagem: EntrarCriarContaImage, alt: "Criar conta- wireframes", largura: 1812, altura: 905 },
          { id: "typography", rotulo: "Homepage", imagem: HomepageWireframes, alt: "homepage-wireframes", largura: 1812, altura: 905 },
          { id: "iconography", rotulo: "Pesquisa", imagem: PesquisaWireframes, alt: "pesquisa- wireframes", largura: 1812, altura: 905 },
          { id: "components", rotulo: "Artigo + Chat", imagem: ArigoeChatImage, alt: "artigo + Chat- wireframes", largura: 1812, altura: 905 },
          { id: "rent", rotulo: "Alugar Artigo", imagem: AlugarArtigoImage, alt: "alugar artigo- wireframes", largura: 1812, altura: 905 },
          { id: "publicar", rotulo: "Publicar Artigo", imagem: PublicarImage, alt: "publicar- wireframes", largura: 1812, altura: 905 },
          { id: "notifications", rotulo: "Caixa de Entrada", imagem: CaixadeEntradeImage, alt: "caixa de entrada- wireframes", largura: 1812, altura: 905 },
          { id: "perfil", rotulo: "Perfil", imagem: PerfilImage, alt: "perfil- wireframes", largura: 1812, altura: 905 },
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
  background-color: #00c17c;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;



export default InfoProj4_5;