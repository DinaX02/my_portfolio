import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

// barra no topo que mostra quanto da página já foi lida
const BarraProgresso = ({ cor }) => {
  const { scrollYProgress } = useScroll();
  const progresso = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <motion.div
      className="scroll_progress_bar"
      style={{ scaleX: progresso, ...(cor ? { background: cor } : {}) }}
    />
  );
};

export default BarraProgresso;
