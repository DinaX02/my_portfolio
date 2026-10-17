import React from "react";
import coverUXToolkit from "../assets/coverUXToolkit.png";
import "../App.css";
import MockupProjeto from "./MockupProjeto";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

const ContentP6 = () => {
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
        <MockupProjeto src={coverUXToolkit} alt="mockup UX Toolkit" />
        <div className="content_p4">
          <h1 className="title_uxtoolkit_hero">UX Toolkit</h1>

          <h2 className="fontsize_tags">
            <span className="text_marcado_uxtoolkit">Tags.</span>
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
            <div className="tags_uxtoolkit">User Experience</div>
            <div className="tags_uxtoolkit">User Interface</div>
            <div className="tags_uxtoolkit">Metodologias UX</div>
            <div className="tags_uxtoolkit_big">Development(al) Research</div>
          </div>

          <h2 className="fontsize_tags">
            <span className="text_marcado_uxtoolkit">Tools.</span>
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
            <div className="tags_uxtoolkit">Figma</div>
            <div className="tags_uxtoolkit">React js</div>
            <div className="tags_uxtoolkit">Vite</div>
            <div className="tags_uxtoolkit">GitHub</div>
            <div className="tags_uxtoolkit">Netlify</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentP6;