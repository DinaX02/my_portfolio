import React from "react";
import { MotionConfig, motion, useScroll, useSpring } from "framer-motion";
import NavbarProjectPage from "../components/Navbar_about";
import ProjectssALONEE from "../components/Projectsss";
import Contactos from "../components/Contactos";
import "../App.css";

const Projetoss = () => {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <MotionConfig reducedMotion="user">
    <div>
      <motion.div className="scroll_progress_bar" style={{ scaleX: progress }} />
      <NavbarProjectPage />
      <main id="conteudo" tabIndex={-1}>
      <ProjectssALONEE />
      <Contactos />
    </main>
        </div>
    </MotionConfig>
  );
};

export default Projetoss;
