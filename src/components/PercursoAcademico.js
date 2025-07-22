import React  from 'react';
// import HorizontalTimeline from './TimelineHorizontalNew';
import imgPercursoAcademicoSvg from "../assets/illustrationPercursoAcademico.svg"
import "../App.css";
import styled from 'styled-components';

const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
  align-items: center;
`;

const ButtonPlanoCurricular = styled.button`
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

// const Separator = styled.hr`
//   width: 50px;
//   border: 0;
//   border-top: 2px solid #A767FB;
//   margin: 0.5rem 0;
// `;

// const Averages = styled.div`
//   font-size: 0.9rem;
//   color: #333;
//   margin-top: 0.5rem;
// `;

const PercursoAcademico = () => {
    const linhaStyle = {
        marginTop: 20,
        width: "200px",
        height: "5px",
        backgroundColor: "#A767FB",
        position: "absolute",
        right: "0",
      };
    
      const numeroStyle = {
        marginTop: 5,
        position: "absolute",
        right: "15px",
        color: "#A767FB",
        fontSize: "46px",
        fontWeight: "bold",
      };
  return (
    <div className="into_divvv">
    <div className="skills_div">
    <div className="linhasss_roxos">
    <div style={linhaStyle}>
      <p style={numeroStyle}>02</p>
    </div>
  </div>
    <div className="instagram-container">
    <div className="instagram-info">
    <p className="paragrafo_intro_sizes">A nível Académico - Universidade de Aveiro</p>

    <p className="fontsize_tags">
      <span className="title_marcado_koru">Percurso.</span>
    </p>
    <p className='tituloEtapasAcademicas'>Licenciatura em Multimédia e Tecnologias da Comunicação (2020-2023)</p>
        <p className="paragrafo_percurso">Esta formação apresentou uma articulação entre a teoria e a prática nas várias fases da criação multimédia - da conceção e planeamento ao desenvolvimento e avaliação - dotando-me de competências técnicas (audiovisuais, 3D, criação de jogos, aplicações móveis e páginas Web dinâmicas) e de uma visão crítica sobre os processos comunicacionais e a interação humano-computador. No plano pessoal, fortaleceu a minha curiosidade, capacidade de resolver problemas complexos e de trabalhar em equipa; no profissional, conferiu-me versatilidade para conceber e produzir conteúdos inovadores, adaptáveis a diferentes setores da indústria, promovendo a eficiência, a inovação e a experiência do utilizador.
        </p>
          <ButtonsContainer>
              <ButtonPlanoCurricular
        as="a"
        href="https://www.ua.pt/pt/c/1531/p"
        target="_blank"
        rel="noopener noreferrer"
      >
        Plano Curricular
      </ButtonPlanoCurricular>
      {/* <Separator />
 <Averages>
        <p style={{fontSize:"18px"}}>Média: <strong>15,4</strong></p>
      </Averages> */}
</ButtonsContainer>
         <p className='tituloEtapasAcademicas'>Mestrado em Comunicação e Tecnologias Web (2023-2025)</p>
          <p className="paragrafo_percurso">O MCTW aprofundou principalmente a minha especialização em UX/UI Design e Desenvolvimento Web, focando-se na conceptualização, desenvolvimento e avaliação de soluções Web com base em metodologias de Challenge Based Learning. Aqui, desenvolvi competências chave na criação de produtos digitais sustentáveis, design de interfaces responsivas e inclusivas, e avaliação da experiência do utilizador. A experiência de propor soluções para desafios reais reforçou a minha autonomia, pensamento estratégico e espírito empreendedor. Profissionalmente, preparou-me para liderar projetos Web, integrando tecnologias atuais e emergentes e garantindo a acessibilidade, usabilidade e impacto social positivo do projeto em questão.
        </p>
 <ButtonsContainer>
              <ButtonPlanoCurricular
        as="a"
        href="https://www.ua.pt/pt/c/508/p"
        target="_blank"
        rel="noopener noreferrer"
      >
        Plano Curricular
      </ButtonPlanoCurricular>
         {/*    <Separator />
 <Averages>
        <p style={{fontSize:"18px"}}>Média:<strong></strong></p>
      </Averages> */}
      </ButtonsContainer>
  </div>
        <div className="other-info">
<img className="img_vision" src={imgPercursoAcademicoSvg} alt="Ilustracao Percurso Académico"/> 
      </div>
</div></div></div>
  );
};

export default PercursoAcademico;



