import React, { useState, useEffect} from "react";
import "../App.css";
import { ampliavel, useFecharModal } from "./acessibilidade";
import HiFi1 from "../assets/hifi_screens_tocare_1.png";
import HiFi2 from "../assets/hifi_screens_tocare_2.png";
import styled from "styled-components";

const InfoProj5Screens = () => {
  const [activeTab, setActiveTab] = useState("designSystem");
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


  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

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
          <span className="title_marcado_tocare">Ecrãs.</span>
        </h2>

        <TabsContainer>
          <TabButton
            onClick={() => handleTabClick("designSystem")}
            active={activeTab === "designSystem"}
            aria-pressed={activeTab === "designSystem"}
          >
            Homepage, Criar Tarefas e Lista de Tarefas
          </TabButton>
          <TabButton
            onClick={() => handleTabClick("colors")}
            active={activeTab === "colors"}
            aria-pressed={activeTab === "colors"}
          >
            Calendário, Dados Biométricos e Lista de Medicamentos
          </TabButton>
        </TabsContainer>
        <ImageContainer>
          {activeTab === "designSystem" && (
            <img
              className="img_diagram"
              src={HiFi1}
              alt="ecrãs homepage, adicionar tarefa e lista de tarefas"
              {...ampliavel(() => openImageView(HiFi1))}
            />
          )}
          {activeTab === "colors" && (
            <img
              className="img_diagram"
              src={HiFi2}
              alt="Criar conta- wireframes"
              {...ampliavel(() => openImageView(HiFi2))}
            />
          )}
        </ImageContainer>
      </div>
    </div>
  );
};

const TabsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 1em;
    justify-content: center;
`;

const TabButton = styled.button`
  background-color: ${(props) => (props.active ? "#2EA7BA" : "transparent")};
  color: ${(props) => (props.active ? "#fff" : "#2E2E2E")};
  border: 2px solid ${(props) => (props.active ? "transparent" : "#ccc")};
  font-family: 'Poppins', sans-serif;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  margin-right: 10px;
  margin-bottom: 1em;
`;

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

const ImageContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
`;



export default InfoProj5Screens;