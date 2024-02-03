import React from "react";
import "../App.css";
import { motion } from "framer-motion";

const HeroHomepage = () => {
  return (
    <div className="hero_homepage_div">
      <div className="hero">
        <div className="content_hero">
        <h1>Olá, sou o <span className="cor_nome">Dinis.</span></h1>
        <p>
          Tenho como objetivo transformar as experiências digitais cativantes
          através do <span className="effect_line">UX/UI Design</span> e <span className="effect_line_2">Desenvolvimento Front-end.</span>
        </p>
        {/* <div>
        <Link to={"/aboutme"}><button className="btn_hero">Mais sobre mim</button></Link></div> */}
        </div>
      </div>
      <div className="scroll_icon btn_plus btn_minus">
          <p className="alinhar_p_scroll">scroll down</p>
      </div>
      <div className="scroll_icon btn_plus btn_minus">
          {/* <p className="alinhar_p_scroll">scroll down</p> */}
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
