import React, { useState, useEffect} from "react";
import "../App.css";
import { useFecharModal } from "./acessibilidade";
import Separadores from "./Separadores";
import DiagramDesignProcess from "../assets/logo_koru.webp";
import DownloadIcon from "../assets/download_icon_koru.svg"
import ColorsImage from "../assets/cores_koru.webp";
import TypographyImage from "../assets/tipografia_koru.webp";
import IconographyImage from "../assets/iconografia_koru.webp";
import ComponentsImage from "../assets/Components_koru.webp";
import Manual_Identidade_Koru from "../assets/Manual_Identidade_Koru.pdf";
import styled from "styled-components";

const InfoProj1DesignSystem = () => {
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
    link.href = Manual_Identidade_Koru;
    link.setAttribute("download", "manual_identidade_koru.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="info_p1_koru">
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
          <span className="title_marcado_koru">Design System.</span>
        </h2>

        <Separadores
          rotulo="Design System"
          cor="rgba(151, 71, 255, 0.8)"
          onAmpliar={openImageView}
          itens={[
          { id: "designSystem", rotulo: "Logótipo", imagem: DiagramDesignProcess, alt: "Logo- Design system", largura: 1812, altura: 489 },
          { id: "colors", rotulo: "Cores", imagem: ColorsImage, alt: "Colors- Design system", largura: 1812, altura: 489 },
          { id: "typography", rotulo: "Tipografia", imagem: TypographyImage, alt: "Typography-Design system", largura: 1812, altura: 489 },
          { id: "iconography", rotulo: "Iconografia", imagem: IconographyImage, alt: "Iconography- Design system", largura: 1812, altura: 489 },
          { id: "components", rotulo: "Componentes", imagem: ComponentsImage, alt: "Components- Design system", largura: 1812, altura: 489 },
          ]}
        />

        <p className="paragrahseemore">Para ver mais detalhadamente: </p>
        <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
        <button className="btnInstallManualKoru" onClick={downloadPDF}>Manual de Identidade do Projeto <img style={{marginLeft: "10px"}} src={DownloadIcon} alt="icon download manual de Design"/></button></div>
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
  background-color: #807DFF;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;


export default InfoProj1DesignSystem;