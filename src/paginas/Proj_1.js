import React from "react";
import NavbarProject from "../components/Navbar_project";
// import HeroProject1 from "../components/hero_proj1";
import ContentP1 from "../components/content_proj1";
import InfoProj1 from "../components/infoProj1";
import Contactos from "../components/Contactos";
import InfoProj12 from "../components/infoProj1_2";
import InfoProj13 from "../components/infoProj1_3";
import InfoProj14 from "../components/infoProj1_4";
import InfoProj5 from "../components/infoProj1_5";
import InfoProj1DesignSystem from "../components/infoProj1_DesignSystem";
import InfoProj1DesignProcess from "../components/infoProj1_DesignProcess";
import "../App.css";
import Reveal from "../components/Reveal";
import BarraProgresso from "../components/BarraProgresso";

const Project_1 = ()=> {


    return(
        <div>
            <NavbarProject />
            <BarraProgresso cor="#5331B2" />
           <main id="conteudo" tabIndex={-1}>
<ContentP1/>
<Reveal amount={0.05}><InfoProj1/></Reveal>
<Reveal amount={0.05}><InfoProj5/></Reveal>
<Reveal amount={0.05}><InfoProj1DesignProcess/></Reveal>
<Reveal amount={0.05}><InfoProj1DesignSystem/></Reveal>
<Reveal amount={0.05}><InfoProj12/></Reveal>
<Reveal amount={0.05}><InfoProj13/></Reveal>
<Reveal amount={0.05}><InfoProj14/></Reveal>
<Contactos/>
        </main>
        </div>
    )
}

export default Project_1





