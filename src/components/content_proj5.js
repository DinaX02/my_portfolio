import React from "react";
import coverToCare from "../assets/cover_tocaree.png";
import "../App.css";
import MockupProjeto from "./MockupProjeto";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

const ContentP5 = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <header className="header_proj4">
        <button type="button" onClick={goBack} className="seta_rounded" aria-label="Voltar à página anterior">
          <FiArrowLeft className="seta_back_projects" aria-hidden="true" />
        </button>
        {/* <h1>Submerso </h1> */}
      </header>
      <div className="div_content_p4">
        <MockupProjeto src={coverToCare} alt="mockup ToCare" />
        <div className="content_p4">
          <h1 className="title_tocare_hero">ToCare</h1>

          <h2 className="fontsize_tags">
            <span className="text_marcado_tocare">Tags.</span>
          </h2>

          <div
            style={{
              width: "auto",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              maxWidth: "600px",
            }}
          >
            <div className="tags_tocare">Desafio</div>
            <div className="tags_tocare_big">Design Thinking</div>
            <div className="tags_tocare">Inovação</div>
            <div className="tags_tocare">Saúde</div>
            <div className="tags_tocare_big">Cuidadores de Idosos</div>
          </div>

          <h2 className="fontsize_tags">
            <span className="text_marcado_tocare">Tools.</span>
          </h2>

          <div
            style={{
              width: "auto",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              maxWidth: "600px",
            }}
          >
            <div className="tags_tocare">FigJam</div>
            <div className="tags_tocare">Jira</div>
            <div className="tags_tocare_big">Papel e Caneta</div>
            <div className="tags_tocare">Figma</div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentP5;
