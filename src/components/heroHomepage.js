import React from "react";
import "../App.css";
import { motion } from "framer-motion";

const HeroHomepage = () => {
  return (
    <div className="hero_homepage_div">
      <div className="hero">
        <h1>Olá, sou o Dinis</h1>
        <p>
          Tenho como objetivo transformar as experiências digitais cativantes
          através do meu UX/UI Design e desenvolvimento Front-end.
        </p>
        <button>Mais sobre mim</button>
      </div>

      <div className="scroll_icon btn_plus btn_minus">
        <a href="#intro">
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

export default HeroHomepage;
