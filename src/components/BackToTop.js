import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronUp } from "react-icons/fi";
import "../App.css";

// botão "voltar ao topo" de todas as páginas; usa o mesmo estilo dos botões do roadmap
const BackToTop = () => {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisivel(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const subir = () => {
    const reduzir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduzir ? "auto" : "smooth" });
    // quem usa teclado continua a navegar a partir do topo do conteúdo
    const main = document.getElementById("conteudo");
    if (main) main.focus({ preventScroll: true });
  };

  return (
    <AnimatePresence>
      {visivel && (
        <motion.button
          type="button"
          className="roadmap_btn back_to_top"
          onClick={subir}
          aria-label="Voltar ao topo"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.25 }}
        >
          <FiChevronUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
