import React, { useState, useEffect} from "react";
import "../App.css";
import { ampliavel, useFecharModal } from "./acessibilidade";
import ExerciciosPraticosToolkitFisica from "../assets/ExerciciosPraticos_uxtoolkit.png";
import MecanicasToolkitFisica from "../assets/MecanicaseFormasdeAplicacao_uxtoolkit.png";
import LigacaoComponentes from "../assets/LigacaoEntreComponentes.png";
import OrganizacaoVisual from "../assets/OrganizacaoVisual.png";
import EstruturadaToolkitFisica from "../assets/EstruturadaToolkitFisica.png";
import styled from "styled-components";

const InfoProj6UXToolkitFisica = () => {
  const [activeTab, setActiveTab] = useState("estruturadatoolkitfisica");
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
              <p style={{width:"80%", fontSize:"19px"}}>A componente física da toolkit consiste num conjunto de trinta e sete (37) cartas, 
construídas a partir da categorização feita no âmbito deste estudo. Além destas cartas, 
a toolkit inclui um manual de utilização que tem o intuito de explicar aos utilizadores como a 
toolkit funciona, e um conjunto extra de três (3) exercícios práticos desenhados para estimular 
a aplicação mais prática e dinâmica desta componente física. 
        </p>
        <TabsContainer>
          <TabButton
            onClick={() => handleTabClick("estruturadatoolkitfisica")}
            active={activeTab === "estruturadatoolkitfisica"}
            aria-pressed={activeTab === "estruturadatoolkitfisica"}
          >
            Estrutura da Toolkit
          </TabButton>
          <TabButton
            onClick={() => handleTabClick("organizacaovisual")}
            active={activeTab === "organizacaovisual"}
            aria-pressed={activeTab === "organizacaovisual"}
          >
           Organização Visual
          </TabButton>
                    <TabButton
            onClick={() => handleTabClick("ligacaoentrecomponentes")}
            active={activeTab === "ligacaoentrecomponentes"}
            aria-pressed={activeTab === "ligacaoentrecomponentes"}
          >
           Ligação entre Componentes
          </TabButton>
                    <TabButton
            onClick={() => handleTabClick("mecanicastoolkitfisica")}
            active={activeTab === "mecanicastoolkitfisica"}
            aria-pressed={activeTab === "mecanicastoolkitfisica"}
          >
           Mecânicas e formas de aplicação
          </TabButton>
                    <TabButton
            onClick={() => handleTabClick("exerciciospraticostoolkitfisica")}
            active={activeTab === "exerciciospraticostoolkitfisica"}
            aria-pressed={activeTab === "exerciciospraticostoolkitfisica"}
          >
           Exercícios Práticos
          </TabButton>
        </TabsContainer>
        <ImageContainer>
                    {activeTab === "estruturadatoolkitfisica" && (
            <img
              className="img_diagram"
              src={EstruturadaToolkitFisica}
              alt="estrutura da toolkit fisica"
              {...ampliavel(() => openImageView(EstruturadaToolkitFisica))}
            />
          )}
          {activeTab === "exerciciospraticostoolkitfisica" && (
            <img
              className="img_diagram"
              src={ExerciciosPraticosToolkitFisica}
              alt="exercicios praticos toolkit fisica"
              {...ampliavel(() => openImageView(ExerciciosPraticosToolkitFisica))}
            />
          )}
              {activeTab === "organizacaovisual" && (
            <img
              className="img_diagram"
              src={OrganizacaoVisual}
              alt="Organizacao visual do conteudo das cartas da toolkit fisica"
              {...ampliavel(() => openImageView(OrganizacaoVisual))}
            />
          )}
                    {activeTab === "ligacaoentrecomponentes" && (
            <img
              className="img_diagram"
              src={LigacaoComponentes}
              alt="Ligacao entre componente fisica e digital"
              {...ampliavel(() => openImageView(LigacaoComponentes))}
            />
          )}
          {activeTab === "mecanicastoolkitfisica" && (
            <img
              className="img_diagram"
              src={MecanicasToolkitFisica}
              alt="Mecanicas e formas de aplicacao da toolkit fisica"
              {...ampliavel(() => openImageView(MecanicasToolkitFisica))}
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
  background-color: ${(props) => (props.active ? "#CA9050" : "transparent")};
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
  background-color: #CA9050;
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



export default InfoProj6UXToolkitFisica;