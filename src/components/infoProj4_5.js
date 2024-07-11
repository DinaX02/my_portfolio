import React, { useState, useEffect} from "react";
import "../App.css";
import OnBoardingImage from "../assets/onboarding.png";
import EntrarCriarContaImage from "../assets/Entrar_criarconta.png"
import HomepageWireframes from "../assets/homepage_wireframess.png";
import PesquisaWireframes from "../assets/pesquisa_wireframess.png";
import ArigoeChatImage from "../assets/artigo_wireframess.png";
import AlugarArtigoImage from "../assets/rent_wireframess_2.png";
import PublicarImage from "../assets/publicar_wireframess.png";
import CaixadeEntradeImage from "../assets/caixa de entrada_wireframess.png";
import PerfilImage from "../assets/perfil_wireframess.png";
import styled from "styled-components";

const InfoProj4_5 = () => {
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

  return (
    <div className="info_p4">
      {viewImage && (
        <ImageViewModal onClick={closeImageView}>
          <ImageView>
            <img src={viewImage} alt="Imagem em tamanho maior" />
          </ImageView>
        </ImageViewModal>
      )}
      <div className="containerDesignProcess">
        <p className="fontsize_tags">
          <span className="title_marcado_boomerang">Wireframes.</span>
        </p>

        <TabsContainer>
          <TabButton
            onClick={() => handleTabClick("designSystem")}
            active={activeTab === "designSystem"}
          >
            OnBoarding
          </TabButton>
          <TabButton
            onClick={() => handleTabClick("colors")}
            active={activeTab === "colors"}
          >
            Entrar/ Criar Conta
          </TabButton>
          <TabButton
            onClick={() => handleTabClick("typography")}
            active={activeTab === "typography"}
          >
            Homepage
          </TabButton>
          <TabButton
            onClick={() => handleTabClick("iconography")}
            active={activeTab === "iconography"}
          >
            Pesquisa
          </TabButton>
          <TabButton
            onClick={() => handleTabClick("components")}
            active={activeTab === "components"}
          >
            Artigo + Chat
          </TabButton>

          <TabButton
            onClick={() => handleTabClick("rent")}
            active={activeTab === "rent"}
          >
            Alugar Artigo
          </TabButton>

          <TabButton
            onClick={() => handleTabClick("publicar")}
            active={activeTab === "publicar"}
          >
            Publicar Artigo
          </TabButton>

          <TabButton
            onClick={() => handleTabClick("notifications")}
            active={activeTab === "notifications"}
          >
            Caixa de Entrada
          </TabButton>

          <TabButton
            onClick={() => handleTabClick("perfil")}
            active={activeTab === "perfil"}
          >
            Perfil
          </TabButton>

        </TabsContainer>
        <ImageContainer>
          {activeTab === "designSystem" && (
            <img
              className="img_diagram"
              src={OnBoardingImage}
              alt="onboarding- wireframes"
              onClick={() => openImageView(OnBoardingImage)}
            />
          )}
          {activeTab === "colors" && (
            <img
              className="img_diagram"
              src={EntrarCriarContaImage}
              alt="Criar conta- wireframes"
              onClick={() => openImageView(EntrarCriarContaImage)}
            />
          )}
          {activeTab === "typography" && (
            <img
              className="img_diagram"
              src={HomepageWireframes}
              alt="homepage-wireframes"
              onClick={() => openImageView(HomepageWireframes)}
            />
          )}
          {activeTab === "iconography" && (
            <img
              className="img_diagram"
              src={PesquisaWireframes}
              alt="pesquisa- wireframes"
              onClick={() => openImageView(PesquisaWireframes)}
            />
          )}
          {activeTab === "components" && (
            <img
              className="img_diagram"
              src={ArigoeChatImage}
              alt="artigo + Chat- wireframes"
              onClick={() => openImageView(ArigoeChatImage)}
            />
          )}
                    {activeTab === "rent" && (
            <img
              className="img_diagram"
              src={AlugarArtigoImage}
              alt="alugar artigo- wireframes"
              onClick={() => openImageView(AlugarArtigoImage)}
            />
          )}

{activeTab === "publicar" && (
            <img
              className="img_diagram"
              src={PublicarImage}
              alt="publicar- wireframes"
              onClick={() => openImageView(PublicarImage)}
            />
          )}

{activeTab === "notifications" && (
            <img
              className="img_diagram"
              src={CaixadeEntradeImage}
              alt="caixa de entrada- wireframes"
              onClick={() => openImageView(CaixadeEntradeImage)}
            />
          )}

{activeTab === "perfil" && (
            <img
              className="img_diagram"
              src={PerfilImage}
              alt="perfil- wireframes"
              onClick={() => openImageView(PerfilImage)}
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
  background-color: ${(props) => (props.active ? "#00c17c" : "transparent")};
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

export default InfoProj4_5;