import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// mockup do topo das páginas de projeto: entra ao abrir a página e
// sobe mais devagar que o scroll (parallax)
const MockupProjeto = ({ src, alt }) => {
  const { scrollY } = useScroll();
  const suave = useSpring(scrollY, { stiffness: 120, damping: 30, mass: 0.4 });
  const y = useTransform(suave, [0, 700], [0, -80]);

  return (
    <motion.div style={{ y }}>
      <motion.img
        className="img-pc_movies"
        src={src}
        alt={alt}
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.03, rotate: -1 }}
      />
    </motion.div>
  );
};

export default MockupProjeto;
