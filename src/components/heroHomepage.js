import React from "react";
import "../App.css";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const HeroHomepage = ({ scrollToIntroduction }) => {
  const { scrollY } = useScroll();
  const smoothY = useSpring(scrollY, { stiffness: 120, damping: 30, mass: 0.4 });

  // parallax: o texto sobe e desaparece com o scroll
  const contentY = useTransform(smoothY, [0, 600], [0, -120]);
  const contentOpacity = useTransform(smoothY, [0, 450], [1, 0]);
  const scrollIconOpacity = useTransform(smoothY, [0, 200], [1, 0]);

  return (
    <div className="hero_homepage_div">
      <div className="hero">
        <motion.div
          className="content_hero"
          style={{ y: contentY, opacity: contentOpacity }}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={item}>
            Olá, sou o{" "}
            <motion.span
              className="cor_nome"
              style={{ display: "inline-block" }}
              initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 180, damping: 12 }}
            >
              Dinis.
            </motion.span>
          </motion.h1>
          <motion.p variants={item}>
            Tenho como objetivo transformar as experiências digitais cativantes
            através do <span className="text_marcado">UX/UI Design</span> e{" "}
            <span className="text_marcado">Desenvolvimento Front-end.</span>
          </motion.p>
        </motion.div>
      </div>

      <motion.div className="scroll_icon btn_plus btn_minus" style={{ opacity: scrollIconOpacity }}>
        <p className="alinhar_p_scroll" aria-hidden="true">scroll down</p>
      </motion.div>
      <motion.div
        className="scroll_icon btn_plus btn_minus"
        style={{ opacity: scrollIconOpacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <a href="#intro" aria-label="Descer para a introdução">
          <div className="btn_scrolll">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="inner_scroll"
            />
          </div>
        </a>
      </motion.div>
    </div>
  );
};

export default HeroHomepage;
