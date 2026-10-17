import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import "../App.css";

// composição de duas fotos sobrepostas (828x693, usada em Origens e na Visão Geral);
// cada foto é recortada numa camada própria.
// A = foto de cima/direita (sem o canto que fica por baixo da B), B = foto de baixo/esquerda
const RECORTE_A = "polygon(23.79% 0, 100% 0, 100% 52.81%, 54.23% 52.81%, 54.23% 36.36%, 23.79% 36.36%)";
const RECORTE_B = "inset(36.36% 45.77% 0 0)";

const sombra = "drop-shadow(0 18px 30px rgba(28, 28, 46, 0.35))";
const semSombra = "drop-shadow(0 0 0 rgba(28, 28, 46, 0))";

const ImagemCamadas = ({ src, altA, altB }) => {
  const ref = useRef(null);
  const [hover, setHover] = useState(null);

  // scroll: as fotos encaixam uma na outra quando a imagem está a meio do ecrã.
  // só se movem uma em direção à outra, para nunca abrir um buraco entre elas
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const encaixe = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [40, 0, 40]), {
    stiffness: 80,
    damping: 20,
  });
  const menosEncaixe = useTransform(encaixe, (v) => -v);
  const subida = useTransform(scrollYProgress, [0, 1], [60, -60]);

  // rato: inclinação 3D da composição
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useSpring(rx, { stiffness: 150, damping: 15 });
  const rotateY = useSpring(ry, { stiffness: 150, damping: 15 });

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * 14);
    rx.set(-py * 14);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
    setHover(null);
  };

  const camada = (id) => ({
    animate: {
      scale: hover === id ? 1.04 : 1,
      opacity: hover && hover !== id ? 0.75 : 1,
      filter: hover === id ? sombra : semSombra,
    },
    transition: { type: "spring", stiffness: 200, damping: 20 },
  });

  return (
    <motion.div
      ref={ref}
      className="origens_img"
      style={{ y: subida, rotateX, rotateY, transformPerspective: 900 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div className="origens_camada" style={{ x: menosEncaixe, y: encaixe, transformOrigin: "62% 26%" }} {...camada("A")}>
        <img
          src={src}
          alt={altA}
          style={{ clipPath: RECORTE_A }}
          onMouseEnter={() => setHover("A")}
          onMouseLeave={() => setHover(null)}
        />
      </motion.div>
      <motion.div className="origens_camada" style={{ x: encaixe, y: menosEncaixe, transformOrigin: "27% 68%" }} {...camada("B")}>
        <img
          src={src}
          alt={altB}
          style={{ clipPath: RECORTE_B }}
          onMouseEnter={() => setHover("B")}
          onMouseLeave={() => setHover(null)}
        />
      </motion.div>
    </motion.div>
  );
};

export default ImagemCamadas;
