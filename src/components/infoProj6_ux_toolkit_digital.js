import React, { useState, useEffect} from "react";
import "../App.css";
import { useFecharModal } from "./acessibilidade";
import Separadores from "./Separadores";
import FuncionalidadeTiersCustomPlan from "../assets/FuncionalidadeTiersCustomPlan.webp";
import FuncionalidadeCustomPlan from "../assets/FuncionalidadeCustomPlan.webp";
import FuncionalidadeDigitalFerramentasDesign from "../assets/FuncionalidadeDigitalFerramentasDesign.webp";
import FuncionalidadeCatalogoDigital from "../assets/FuncionalidadeCatalogoDigital.webp";
import ExerciciosPraticosSite from "../assets/FuncionalidadeDigitalExerciciosPraticos.webp";
import SitemapUXToolkitDigital from "../assets/SitemapUXToolkitDigital.webp";
import styled from "styled-components";

const InfoProj6UXToolkitDigital = () => {
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
          <span className="title_marcado_uxtoolkit">Toolkit Digital.</span>
        </h2>
              <p className="texto_corrido" style={{width:"80%"}}>A plataforma digital foi desenhada com o objetivo de ser fácil e intuitiva e oferecer recursos 
adicionais de maneira a complementarem a componente física da toolkit.<br></br><br></br>
A estrutura da plataforma foi organizada de forma a facilitar a navegação entre as várias 
páginas, sendo que a navegação está sempre disponível ao utilizador através do menu de 
navegação lateral (aside) que permite o acesso direto às quatro páginas principais da 
plataforma. 
        </p>
        <Separadores
          rotulo="Componente digital da toolkit"
          cor="#CA9050"
          onAmpliar={openImageView}
          itens={[
          { id: "sitemapuxtoolkit", rotulo: "Sitemap", imagem: SitemapUXToolkitDigital, alt: "sitemap da toolkit digital", largura: 1812, altura: 905 },
          { id: "catalogouxtoolkitdigital", rotulo: "Catálogo", imagem: FuncionalidadeCatalogoDigital, alt: "funcionalidade de catalogo da toolkit digital", largura: 1812, altura: 905 },
          { id: "funcionalidadedigitalferramentasdesign", rotulo: "Design Tools", imagem: FuncionalidadeDigitalFerramentasDesign, alt: "funcionalidade pagina de ferramentas de design toolkit digital", largura: 1812, altura: 905 },
          { id: "exerciciospraticostoolkitdigital", rotulo: "Exercícios Práticos", imagem: ExerciciosPraticosSite, alt: "exercicios praticos toolkit digital", largura: 1812, altura: 905 },
          { id: "funcionalidadetierscustomplan", rotulo: "Sugestões de Plano", imagem: FuncionalidadeTiersCustomPlan, alt: "Funcionalidade Tiers Custom Plan da toolkit digital", largura: 1812, altura: 905 },
          { id: "funcionalidadescustomplan", rotulo: "Custom Plan", imagem: FuncionalidadeCustomPlan, alt: "Funcionalidade Custom Plan da toolkit digital", largura: 1812, altura: 905 },
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




export default InfoProj6UXToolkitDigital;