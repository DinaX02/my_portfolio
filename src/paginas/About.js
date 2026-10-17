import React from "react";
import { MotionConfig, motion, useScroll, useSpring } from "framer-motion";
import NavbarAbout from "../components/Navbar_about";
import Skills from "../components/Skills";
import "../App.css";
import RoadmapAcademico from "../components/RoadmapAcademico";
import Contactos from "../components/Contactos";
import HeroAbout from "../components/heroAbout";
import Origens from "../components/Origens";

const About = () => {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <MotionConfig reducedMotion="user">
    <div>
      <motion.div className="scroll_progress_bar" style={{ scaleX: progress }} />
      <NavbarAbout/>
      <main id="conteudo" tabIndex={-1}>
      <HeroAbout/>
      <Origens/>
   <RoadmapAcademico />
      <Skills />
      <Contactos />
{/* <Footer/> */}
    </main>
        </div>
    </MotionConfig>
  );
};

export default About;
