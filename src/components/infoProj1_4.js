import React, {useState, useEffect} from "react";
import "../App.css";
import Wireframesskoru from "../assets/koru_finallll.png";
import { FaArrowUp} from "react-icons/fa";
import styled from "styled-components";

const ButtonVerPrototipo = styled.button`
  display: inline-block;
  text-align: center;
  padding: 0.6rem 1.2rem;
  background-color: #1c1c1c;
  color: rgba(189, 139, 255, 0.9) !important;
  border-radius: 12px;
  font-size: 0.85rem;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #333;
  }
`;

const InfoProj1_4 = ()=> {

    const [showScrollToTop, setShowScrollToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const contentP1Height = document.querySelector('.contentP1')?.offsetHeight || 0;
          const contentP1Top = document.querySelector('.contentP1')?.offsetTop || 0;
          const scrollPosition = window.scrollY;
    
          if (scrollPosition > contentP1Top + contentP1Height) {
            setShowScrollToTop(true);
          } else {
            setShowScrollToTop(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };

    return (
      <div className="info_p22222">
        {showScrollToTop && (
          <ScrollToTopButton onClick={scrollToTop}>
            <FaArrowUp />
          </ScrollToTopButton>
        )}
        <div className="instagram-container">
          <div className="instagram-info">
            <p className="fontsize_tags">
              <span className="title_marcado_koru">Wireframes.</span>
            </p>

            <p className="paragrafo_origens">
              Uma vez decidida a arquitetura da aplicação e o <i>site map</i>{" "}
              passou-se para o <i>sketching</i> dos <i>wireframes</i>, começando
              pela baixa fidelidade e progredindo progressivamente para a média
              e alta fidelidade.<br></br>
              <br></br>
              Com a criação dos primeiros <i>wireframes</i> de baixa fidelidade,
              foi possível obter uma imagem clara do aspecto visual da aplicação
              e da forma como o utilizador irá navegar através dela.
              <br></br>
              <br></br>
              Ao avançar para os protótipos de média fidelidade, as
              funcionalidades e o fluxo da aplicação foram ilustrados,
              permitindo um aperfeiçoamento ainda maior da interface do
              utilizador e a identificação de eventuais falhas funcionais nas
              fases iniciais.
              <br></br>
              <br></br>
              Por fim, os protótipos foram convertidos de Mid-fi para Hi-fi,
              criando assim os flows de utilização do protótipo usando o Figma.
            </p>
            <ButtonVerPrototipo
              as="a"
              href="https://www.figma.com/proto/XvQjbPsxIYJKLmFfWOfHCg/MID-FI?node-id=739-840&scaling=scale-down&page-id=327%3A2&starting-point-node-id=739%3A840"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Protótipo
            </ButtonVerPrototipo>
          </div>

          <div className="other-info">
            <img
              className="img_vision"
              src={Wireframesskoru}
              alt="ImgWireframesKoru"
            />
          </div>
        </div>
      </div>
    );
}   

const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  background-color: #5331B2;
  color: white;
  border: none;
  padding: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #9747FF;
  }
`;

export default InfoProj1_4





