import React from "react";
import "../App.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroAbout = () => {
  return (
    <div className="hero_homepage_div">
      <div className="hero">
        <div className="content_hero">
        <h1>About me <span className="cor_nome">Dinis.</span></h1>
        <p>
          Tenho como objetivo transformar as experiências digitais cativantes
          através do meu <span className="cor_nome">UX/UI Design</span> e <span className="cor_nome">Desenvolvimento Front-end.</span>
        </p>
        </div>
      </div>

      <div className="scroll_icon btn_plus btn_minus">
        <a href="#percurso">
        <div className="btn_scrolll">
        <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            className="inner_scroll"
          />    
        </div>
        </a>
      </div>
    </div>
  );
};

export default HeroAbout;
