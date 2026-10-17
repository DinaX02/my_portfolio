import React from "react";
import { MotionConfig, motion, useScroll, useSpring } from "framer-motion";
import Navbar from "../components/Navbar";
import Introduction from "../components/IntroductionVisaoGeral";
import HeroHomepage from "../components/heroHomepage";
import ProjectsHomePage from "../components/ProjectsHomepage";
import Contactos from "../components/Contactos";
import "../App.css";

const Homepage = ()=> {
    const { scrollYProgress } = useScroll();
    const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

    return(
        // reducedMotion="user" desliga as animações para quem tem "reduzir movimento" ativo
        <MotionConfig reducedMotion="user">
        <div>
<motion.div className="scroll_progress_bar" style={{ scaleX: progress }} />
<Navbar/>
<main id="conteudo" tabIndex={-1}>
<HeroHomepage/>
<Introduction/>
<ProjectsHomePage/>
<Contactos/>
        </main>
        </div>
        </MotionConfig>
    )
}

export default Homepage
