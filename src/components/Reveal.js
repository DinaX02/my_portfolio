import React from "react";
import { motion } from "framer-motion";

// Revela o conteúdo quando entra no ecrã
const offsets = {
  up: { y: 50 },
  left: { x: -60 },
  right: { x: 60 },
};

const Reveal = ({ children, from = "up", delay = 0, amount = 0.25, className, style }) => (
  <motion.div
    className={className}
    style={style}
    initial={{ opacity: 0, ...offsets[from] }}
    whileInView={{ opacity: 1, x: 0, y: 0 }}
    viewport={{ once: true, amount }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export default Reveal;
