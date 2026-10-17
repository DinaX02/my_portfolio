import React from "react";
import "../App.css";
import Reveal from "../components/Reveal";
import BarraProgresso from "../components/BarraProgresso";
import NavbarUXToolkit from "../components/Navbar_uxToolkit.js";
import ContentP6 from "../components/content_proj6.js";
import InfoProj6 from "../components/infoProj6.js";
import ContactosUXToolkit from "../components/ContactosUXToolkit.js";
import InfoProj6DesignProcess from "../components/infoProj6_DesignProcess.js";
import InfoProj6UXToolkitFisica from "../components/infoProj6_ux_toolkit_fisica.js";
import InfoProj6UXToolkitDigital from "../components/infoProj6_ux_toolkit_digital.js";
const Project6 = ()=> {


    return(
        <div>
           <NavbarUXToolkit/> 
           <BarraProgresso cor="#CA9050" />
           <main id="conteudo" tabIndex={-1}>
           <ContentP6/>
           <Reveal amount={0.05}><InfoProj6/></Reveal>
        <Reveal amount={0.05}><InfoProj6DesignProcess/></Reveal>
          <Reveal amount={0.05}><InfoProj6UXToolkitFisica/></Reveal>
          <Reveal amount={0.05}><InfoProj6UXToolkitDigital/></Reveal>
           <ContactosUXToolkit/>
   
        </main>
        </div>
    )
}

export default Project6





