import React from "react";
import "../App.css";
import Reveal from "../components/Reveal";
import BarraProgresso from "../components/BarraProgresso";
import NavbarProjectToCare from "../components/Navbar_projectToCare.js";
import ContentP5 from "../components/content_proj5.js";
import InfoProj5 from "../components/infoProj5.js";
import ContactosToCare from "../components/ContactosToCare.js";
import InfoProj52 from "../components/infoProj5_2.js";
import InfoProj5DesignProcess from "../components/infoProj5_DesignProcess.js";
import InfoProj5Wireframes from "../components/infoProj5_Wireframes.js";
import InfoProj5Screens from "../components/infoProj5_Screens.js";
import InfoProj5Final from "../components/infoProj5_Final.js";

const Project5 = ()=> {


    return(
        <div>
           <NavbarProjectToCare/> 
           <BarraProgresso cor="#0097B2" />
           <main id="conteudo" tabIndex={-1}>
           <ContentP5/>
            <Reveal amount={0.05}><InfoProj5/></Reveal>
          <Reveal amount={0.05}><InfoProj52/></Reveal>
          <Reveal amount={0.05}><InfoProj5DesignProcess/></Reveal>
          <Reveal amount={0.05}><InfoProj5Wireframes/></Reveal>
          <Reveal amount={0.05}><InfoProj5Screens/></Reveal>
          <Reveal amount={0.05}><InfoProj5Final/></Reveal>
           <ContactosToCare/>
   
        </main>
        </div>
    )
}

export default Project5





