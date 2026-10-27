import React, { useState, useEffect} from "react";
import "../App.css";
import { useFecharModal } from "./acessibilidade";
import Separadores from "./Separadores";
import DiagramDesignProcess from "../assets/logos.webp";
// import LogoImage from "../assets/design_process_diagram.png";
import DownloadIcon from "../assets/download_icon.svg"
import ColorsImage from "../assets/cores.webp";
import TypographyImage from "../assets/tipografia.webp";
import IconographyImage from "../assets/iconografia.webp";
import ComponentsImage from "../assets/Components.webp";
import ManualPDF from "../assets/Portfolio_Boomerang.pdf"
import styled from "styled-components";

const InfoProj4_4 = () => {
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

  // Função para baixar o PDF
  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = ManualPDF;
    link.setAttribute("download", "manual_identidade_boomerang.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
          <span className="title_marcado_boomerang">Design System.</span>
        </h2>
        <p className="paragrafo_design_process">
          Para o projeto Boomerang, foi desenvolvido um sistema de design para
          garantir a consistência e a eficiência no processo de criação,
          conhecido por Design System.
        </p>

        <Separadores
          rotulo="Design System"
          cor="#00c17c"
          onAmpliar={openImageView}
          itens={[
          { id: "designSystem", rotulo: "Logótipo", imagem: DiagramDesignProcess, alt: "Logo- Design system", largura: 1812, altura: 489 },
          { id: "colors", rotulo: "Cores", imagem: ColorsImage, alt: "Colors- Design system", largura: 1813, altura: 489 },
          { id: "typography", rotulo: "Tipografia", imagem: TypographyImage, alt: "Typography-Design system", largura: 1812, altura: 489 },
          { id: "iconography", rotulo: "Iconografia", imagem: IconographyImage, alt: "Iconography- Design system", largura: 1812, altura: 489 },
          { id: "components", rotulo: "Componentes", imagem: ComponentsImage, alt: "Components- Design system", largura: 1812, altura: 489 },
          ]}
        />

        <p className="paragrahseemore">Para ver mais detalhadamente: </p>
        <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
        <button className="btnInstallManual" onClick={downloadPDF}>Manual de Design do Projeto <img style={{marginLeft: "10px"}} src={DownloadIcon} alt="icon download manual de Design"/></button></div>
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


export default InfoProj4_4;