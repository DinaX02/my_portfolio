import React from "react";
import "../App.css";
import Reveal from "../components/Reveal";
import BarraProgresso from "../components/BarraProgresso";
// import HeroProject4 from "../components/hero_proj4.js";
import NavbarProjectBoomerang from "../components/Navbar_projectBoomerang.js";
import ContentP4 from "../components/content_proj4.js";
import InfoProj4 from "../components/infoProj4.js";
import ContactosBoomerang from "../components/ContactosBoomerang.js";
import InfoProj42 from "../components/infoProj4_2.js";
import InfoProj43 from "../components/infoProj4_3.js";
import InfoProj44 from "../components/infoProj4_4.js";
import InfoProj45 from "../components/infoProj4_5.js";
import InfoProj41DesignProcess from "../components/infoProj4_DesignProcess";
const Project_4 = ()=> {


    return(
        <div>
           <NavbarProjectBoomerang/> 
           <BarraProgresso cor="#00C17C" />
           <main id="conteudo" tabIndex={-1}>
           {/* <HeroProject4/> */}
           <ContentP4/>
            <Reveal amount={0.05}><InfoProj4/></Reveal>
          <Reveal amount={0.05}><InfoProj42/></Reveal>
          <Reveal amount={0.05}><InfoProj43/></Reveal>
          <Reveal amount={0.05}><InfoProj44/></Reveal>
          <Reveal amount={0.05}><InfoProj45/></Reveal>
          <Reveal amount={0.05}><InfoProj41DesignProcess/></Reveal>
           <ContactosBoomerang/>
   
        </main>
        </div>
    )
}

export default Project_4





